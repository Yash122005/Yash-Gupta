    const scrollLine = document.querySelector('.scroll-line');

    function updateScrollProgress() {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const scrolled = window.scrollY;
      const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;
      scrollLine.style.width = `${percentScrolled}%`;
    }

    updateScrollProgress();

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    });

    window.addEventListener('resize', updateScrollProgress);
// mouse fallower
Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


    gsap.from("#skills-logo img",{
  opacity:0,
  duration:1,
  x:-90,
  stagger:1,
  scrollTrigger:{
    trigger:"#skills-logo",
    scroller:"body",
    start:"top 80%",
    end:"top 30%",
    scrub:5
  }
  })
