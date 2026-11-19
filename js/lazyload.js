// ── LAZY LOAD IMAGES (IntersectionObserver) ──
function initLazyLoad(){
  const lazyImages = document.querySelectorAll('img.lazy');
  if('IntersectionObserver' in window){
    const observer = new IntersectionObserver((entries,obs)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const img = entry.target;
          const dataSrc = img.getAttribute('data-src');
          if(dataSrc){
            img.src = dataSrc;
            img.classList.add('loaded');
          }
          obs.unobserve(img);
        }
      });
    },{rootMargin:'200px'});
    lazyImages.forEach(img=>observer.observe(img));
  } else {
    // Fallback: load all
    lazyImages.forEach(img=>{
      const dataSrc = img.getAttribute('data-src');
      if(dataSrc){ img.src = dataSrc; img.classList.add('loaded'); }
    });
  }
}

document.addEventListener('DOMContentLoaded', initLazyLoad);
