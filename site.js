const filterKeys = ['all','embedded','vision','iot','robotics','mathematics'];
const preference = {
  get(key){try{return localStorage.getItem(key)}catch{return null}},
  set(key,value){try{localStorage.setItem(key,value)}catch{}}
};
let language = ['en','fr','es'].includes(preference.get('lt-language')) ? preference.get('lt-language') : 'en';
let filter = 'all';
let activity = 'speaking';
const panels = ['home','education','experience','projects','skills','activities','cv','contact'];

function renderMedia(items, className='media-gallery'){
  if(!items || !items.length)return '';
  return `<div class="${className}">${items.map(item=>`<figure><img src="${item.src}" alt="${item.caption}" loading="lazy"><figcaption>${item.caption}</figcaption></figure>`).join('')}</div>`;
}

function renderEducation(){
  document.getElementById('education-content').innerHTML = copy[language].education.map(item => `
    <article class="timeline-item education-item">
      <div class="timeline-meta">${item.date}</div><h3>${item.title}</h3>
      <div class="timeline-place">${item.place}</div><p>${item.description}</p>
    </article>`).join('');
}

function renderExperience(){
  const labels=copy[language];
  document.getElementById('experience-content').innerHTML=labels.experience.map((item,index)=>`
    <details class="experience-card" ${index===0?'open':''}>
      <summary class="experience-head"><div><div class="timeline-meta">${item.date}</div><h3>${item.title}</h3><div class="timeline-place">${item.place}</div></div>${item.images?.[0]?`<img class="experience-preview" src="${item.images[0].src}" alt="" loading="lazy">`:''}<span class="summary-indicator" aria-hidden="true">＋</span></summary>
      <div class="experience-body">
        <div><h4>${labels.contextLabel}</h4><p>${item.context}</p></div>
        <div><h4>${labels.workLabel}</h4><ul>${item.actions.map(action=>`<li>${action}</li>`).join('')}</ul></div>
        ${item.deliverables?.length?`<div><h4>${labels.deliverablesLabel}</h4><ul>${item.deliverables.map(deliverable=>`<li>${deliverable}</li>`).join('')}</ul></div>`:''}
        <div><h4>${labels.resultLabel}</h4><p>${item.result}</p></div>
      </div>
      <div class="experience-foot"><span>${labels.toolsLabel}</span><p>${item.tools}</p>${item.link?`<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.linkText}</a>`:''}</div>
      ${item.relatedProjects?.length?`<div class="experience-related"><strong>${labels.relatedProjectsLabel}</strong>${item.relatedProjects.map(id=>{const project=labels.projects.find(project=>project.id===id);return project?`<a href="project.html?id=${id}">${project.title} ↗</a>`:''}).join('')}</div>`:''}
      ${renderMedia(item.images)}
    </details>`).join('');
}

function renderProjects(){
  const lang=copy[language];
  document.getElementById('project-filters').innerHTML=filterKeys.map((key,i)=>`<button type="button" data-filter="${key}" class="${filter===key?'active':''}" aria-pressed="${filter===key}">${lang.filters[i]}</button>`).join('');
  const items=lang.projects.filter(project=>filter==='all'||project.category===filter);
  document.getElementById('project-grid').innerHTML=items.map(project=>`
    <article class="project-card project-${project.id} ${project.featured?'featured':''} ${project.image?'has-image':''}" data-project-url="project.html?id=${project.id}" role="link" tabindex="0" aria-label="${lang.caseStudy}: ${project.title}">
      ${project.image?`<div class="project-thumb"><img src="${project.image}" alt="${project.imageAlt}" loading="lazy"></div>`:''}
      <div class="project-content"><div class="project-top">${project.type}</div><h3>${project.title}</h3><p>${project.description}</p>
        <div class="project-bottom"><div class="project-tech">${project.tech.map(tag=>`<span>${tag}</span>`).join('')}</div>
          <div class="project-links"><a href="project.html?id=${project.id}">${lang.caseStudy} ↗</a>
            ${project.links?project.links.map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join(''):''}
          </div>
        </div>
      </div>
    </article>`).join('');
}

function renderSkills(){
  const lang=copy[language];
  document.getElementById('skills-grid').innerHTML=lang.skills.map(skill=>`
    <article class="skill-card"><h3>${skill.title}</h3><p>${skill.detail}</p><div class="skill-evidence"><strong>${lang.skillsExamples}</strong><span>${skill.examples}</span></div></article>`).join('');
}

function renderLists(){
  const c=copy[language];
  const talks=[[c.talkLabel,c.talkTitle,c.talkBody],[c.wieLabel,c.wieTitle,c.wieBody],[c.cipLabel,c.cipTitle,c.cipBody]];
  document.getElementById('talks-grid').innerHTML=talks.map(([label,title,body],i)=>`<article class="editorial-card image-card">${renderMedia(c.talkImages[i],'card-gallery')}<span class="card-type">${label}</span><h3>${title}</h3><p>${body}</p></article>`).join('');
  document.getElementById('activities-grid').innerHTML=c.activities.map(item=>`<article class="editorial-card image-card">${renderMedia(item.images,'card-gallery')}<span class="card-type">${item.date}</span><h3>${item.title}</h3><p>${item.description}</p></article>`).join('');
  document.getElementById('training-grid').innerHTML=c.training.map(item=>`<article class="training-item">${item.logo?`<img class="training-logo" src="${item.logo}" alt="" loading="lazy">`:''}<h3>${item.title}</h3><p>${item.description}</p></article>`).join('');
}

function updateCvLinks(){
  const code=document.getElementById('cv-language').value.toUpperCase();
  document.querySelectorAll('[data-cv-view],[data-cv-download]').forEach(link=>link.href=`assets/Lizbeth_Torres_Flores_CV_${code}.pdf`);
}

function showPanel(){
  const anchor=location.hash.slice(1);
  const selected=panels.includes(anchor)?anchor:(['speaking','training','leadership'].includes(anchor)?'activities':'home');
  if(['speaking','training','leadership'].includes(anchor))activity=anchor;
  document.querySelectorAll('[data-panel]').forEach(node=>{
    node.hidden=node.dataset.panel!==selected || (node.dataset.subpanel && node.dataset.subpanel!==activity);
  });
  document.querySelectorAll('.primary-nav a').forEach(link=>{
    if(link.getAttribute('href')===`#${selected}`)link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });
  document.querySelectorAll('[data-activity]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.activity===activity)));
  window.scrollTo(0,0);
}

function renderLanguage(){
  document.documentElement.lang=language;
  document.querySelectorAll('[data-i18n],[data-i18n-html]').forEach(node=>{
    const key=node.dataset.i18n||node.dataset.i18nHtml;
    if(Object.prototype.hasOwnProperty.call(copy[language],key))node.innerHTML=copy[language][key];
  });
  document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===language)));
  document.querySelector('.language-switch').setAttribute('aria-label',copy[language].languageLabel);
  const menu=document.querySelector('.menu-toggle');
  menu.setAttribute('aria-label',menu.getAttribute('aria-expanded')==='true'?copy[language].menuClose:copy[language].menuOpen);
  document.getElementById('cv-language').value=language;
  updateCvLinks();renderEducation();renderExperience();renderProjects();renderSkills();renderLists();showPanel();
}

document.addEventListener('click',event=>{
  const projectCard=event.target.closest('[data-project-url]');
  if(projectCard && !event.target.closest('a,button')){location.href=projectCard.dataset.projectUrl;return;}
  const langButton=event.target.closest('[data-lang]');
  if(langButton){language=langButton.dataset.lang;preference.set('lt-language',language);renderLanguage();return;}
  const filterButton=event.target.closest('[data-filter]');
  if(filterButton){filter=filterButton.dataset.filter;renderProjects();return;}
  const activityButton=event.target.closest('[data-activity]');
  if(activityButton){activity=activityButton.dataset.activity;showPanel();return;}
  if(event.target.closest('.primary-nav a')){
    document.querySelector('.primary-nav').classList.remove('open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
    document.querySelector('.menu-toggle').setAttribute('aria-label',copy[language].menuOpen);
  }
});
document.addEventListener('keydown',event=>{
  if((event.key==='Enter'||event.key===' ') && event.target.matches('[data-project-url]')){event.preventDefault();location.href=event.target.dataset.projectUrl;}
});
document.querySelector('.menu-toggle').addEventListener('click',()=>{
  const nav=document.querySelector('.primary-nav');
  const open=nav.classList.toggle('open');
  document.querySelector('.menu-toggle').setAttribute('aria-expanded',String(open));
  document.querySelector('.menu-toggle').setAttribute('aria-label',open?copy[language].menuClose:copy[language].menuOpen);
});
document.getElementById('cv-language').addEventListener('change',updateCvLinks);
window.addEventListener('hashchange',showPanel);
document.getElementById('year').textContent=new Date().getFullYear();
renderLanguage();
