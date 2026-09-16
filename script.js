(function(){
  const btn=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav-links');
  if(btn&&nav){btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open'));});}

  document.querySelectorAll('[data-filter]').forEach(button=>{
    button.addEventListener('click',()=>{
      const filter=button.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));
      button.classList.add('active');
      document.querySelectorAll('.gallery-card').forEach(card=>{
        card.classList.toggle('hidden',filter!=='all' && card.dataset.category!==filter);
      });
    });
  });

  const form=document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      if(!form.reportValidity()) return;
      const data=new FormData(form);
      const subject=encodeURIComponent('[Website Aneka Plastik] '+data.get('subject'));
      const body=encodeURIComponent('Nama: '+data.get('name')+'\nEmail: '+data.get('email')+'\n\nPesan:\n'+data.get('message'));
      const notice=document.querySelector('#formNotice');
      if(notice){notice.classList.add('show');notice.textContent='Email client Anda akan dibuka untuk mengirim pesan ke Aneka Plastik.';}
      window.location.href='mailto:aneka_plastik@yahoo.com?subject='+subject+'&body='+body;
    });
  }
})();
