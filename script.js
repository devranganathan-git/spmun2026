(function(){
  const c=window.SPMUN_CONFIG||{};
  const set=(id,value)=>{const el=document.getElementById(id);if(el&&value)el.textContent=value};
  set('event-dates',c.dates); set('registration-deadline',c.registrationDeadline); set('registration-fee',c.registrationFee); set('instagram',c.instagram); set('venue-note',c.venueNote);
  const qr=document.getElementById('payment-qr'); if(qr&&c.paymentQr)qr.src=c.paymentQr;
  const phone=document.getElementById('phone-link'); if(phone&&c.contactPhone){phone.textContent=c.contactPhone;phone.href='tel:'+c.contactPhone.replace(/\D/g,'')}
  const regLinks=[...document.querySelectorAll('a[href="#register"]')]; regLinks.forEach(a=>{if(c.registrationUrl&&c.registrationUrl!=='#register')a.href=c.registrationUrl});
  const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
  const sections=[...document.querySelectorAll('main section[id]')]; const links=[...document.querySelectorAll('.nav a[href^="#"]')];
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-40% 0px -50% 0px'}); sections.forEach(s=>observer.observe(s));
})();
