window.addEventListener("DOMContentLoaded", (e) => {
    const openBtn = document.getElementById('openBtn');
    const backdrop = document.getElementById('backdrop');
    const closeBtn = document.getElementById('closeBtn');
    const modal = backdrop.querySelector('div[role="document"]');

    function openModal(){
      backdrop.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
      backdrop.classList.add('opacity-100');
      modal.classList.remove('translate-y-full');
      modal.classList.add('translate-y-0');
      document.body.classList.add('overflow-hidden');
      document.addEventListener('keydown', onKeyDown);
    }

    function closeModal(){
      backdrop.classList.add('opacity-0', 'pointer-events-none');
      backdrop.classList.remove('opacity-100');
      modal.classList.add('translate-y-full');
      modal.classList.remove('translate-y-0');
      setTimeout(() => backdrop.classList.add('invisible'), 300);
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', onKeyDown);
    }

    function onKeyDown(e){
      if(e.key === 'Escape') closeModal();
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => { if(e.target === backdrop) closeModal(); });
 
})