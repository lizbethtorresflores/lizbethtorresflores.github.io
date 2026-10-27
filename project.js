const choice = new URLSearchParams(location.search).get('id');
const preference = {
  get(key){try{return localStorage.getItem(key)}catch{return null}},
  set(key,value){try{localStorage.setItem(key,value)}catch{}}
};
let language = ['en','fr','es'].includes(preference.get('lt-language')) ? preference.get('lt-language') : 'en';

function renderProject(){
  const lang=copy[language];
  const item=lang.projects.find(project=>project.id===choice);
  document.documentElement.lang=language;
  document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===language)));
  document.querySelector('.language-switch').setAttribute('aria-label',lang.languageLabel);
  document.getElementById('back-top').textContent=`← ${lang.allProjects}`;
  document.getElementById('back-bottom').textContent=`← ${lang.backProjects}`;
  if(!item){
    document.getElementById('case-content').innerHTML=`<p class="eyebrow">${lang.projectPageLabel}</p><h1>${lang.allProjects}</h1><p><a class="button primary" href="index.html#projects">${lang.backProjects} ↗</a></p>`;
    return;
  }
  document.title=`${item.title} | Lizbeth Alexandra Torres Flores`;
  const links=item.links?item.links.map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join(''):'';
  const images=item.images?.length?item.images:(item.image?[{src:item.image,caption:item.imageAlt||item.title}]:[]);
  document.getElementById('case-content').innerHTML=`
    <a class="case-breadcrumb" href="index.html#projects">← ${lang.backProjects}</a>
    <header class="case-hero"><p class="eyebrow">${lang.projectPageLabel} / ${item.type}</p><h1>${item.title}</h1><p class="case-lead">${item.description}</p>
      <div class="case-tech">${item.tech.map(tag=>`<span>${tag}</span>`).join('')}</div>
    </header>
    ${images.length?`<div class="case-gallery" aria-label="${lang.photoLabel}">${images.map(image=>`<figure class="case-image"><img src="${image.src}" alt="${image.caption}" loading="lazy"><figcaption>${image.caption}</figcaption></figure>`).join('')}</div>`:''}
    <div class="case-sections">
      <section><span class="case-index">01</span><h2>${lang.contextLabel}</h2><p>${item.context}</p></section>
      <section><span class="case-index">02</span><h2>${lang.workLabel}</h2><p>${item.work}</p></section>
      <section><span class="case-index">03</span><h2>${lang.resultLabel}</h2><p>${item.result}</p></section>
    </div>
    ${item.deepDive?.length?`<div class="case-deep-dive">${item.deepDive.map((section,index)=>`<section><span class="case-index">${String(index+4).padStart(2,'0')}</span><h2>${section.title}</h2><p>${section.text}</p></section>`).join('')}</div>`:''}
    ${links?`<div class="case-links"><span class="eyebrow">${lang.relatedLink}</span><div>${links}</div></div>`:''}
    <div class="case-next"><a href="index.html#projects">← ${lang.backProjects}</a></div>`;
}
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-lang]');
  if(!button)return;
  language=button.dataset.lang;
  preference.set('lt-language',language);
  renderProject();
});
document.getElementById('year').textContent=new Date().getFullYear();
renderProject();
