(function(){
  const cfg=window.SPMUN_CONFIG||{};
  const fee=document.getElementById('registrationFee'); if(fee) fee.textContent=cfg.registrationFee||'To be announced';
  const upi=document.getElementById('paymentUpi'); if(upi) upi.textContent=cfg.paymentUpi||'UPI details to be announced';
  const toggle=document.querySelector('.menu-toggle'); const nav=document.querySelector('.site-nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));}); nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
  const links=[...document.querySelectorAll('.site-nav a[href^="#"]')]; const sections=[...document.querySelectorAll('main section[id]')];
  const onScroll=()=>{const y=window.scrollY+110; let current='home'; for(const s of sections){if(s.offsetTop<=y) current=s.id} links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));}; window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
})();
