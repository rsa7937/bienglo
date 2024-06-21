$(function () {
  gsap.registerPlugin(ScrollTrigger);
  const visualTL = gsap.timeline({
    //타임라인의 기본 세팅
    defaults: { duration: 2, ease: 'power4.inOut' },
  });

  // 애니메이션 시킬 요소의 기본 세팅
  visualTL.set('.visual .slide2', { opacity: 0 });

  visualTL.from('.visual', { scale: 0.9, duration: 2, ease: 'power4.inOut' });
  visualTL.from('.visual .slide', { scale: 1.3, duration: 2, ease: 'power4.inOut' }, '<');
  visualTL.from(
    '.visual .slide .text',
    {
      autoAlpha: 0,
      y: 20,
      duration: 0.5,
      ease: 'none',
    },
    '-=.1'
  );

  // fadeIn/Out
  visualTL.to('.visual .slide1', {
    delay: 1,
    autoAlpha: 0,
    duration: 4,
    repeat: -1,
    yoyo: true,
    // repeatDelay: 1,
  });
  visualTL.to(
    '.visual .slide2',
    {
      autoAlpha: 1,
      duration: 4,
      repeat: -1,
      yoyo: true,
    },
    '<'
  );

  gsap.from('.visual .scroll-wrap span:nth-child(2)', {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    ease: 'circ.inOut',
  });
  // 타이틀 애니메이션
  // document.querySelectorAll('.about h3 > span:first-child').forEach((title) => {});
  // console.log($('.about h3 > span:first-child'));
  // console.log($('.about h3 > span:last-child'));

  // jquery에서는 index가 먼저 오고, 안써도 꼭 언급을 해줘야함
  $('.about h3 > span:first-child').each((index, title) => {
    gsap.to(title, {
      x: -200,
      scrollTrigger: {
        trigger: title,
        // markers: true,
        scrub: 2.5,
        start: 'top 80%', //trigger scroller(viewport)
        end: 'bottom 20%', //trigger scroller(viewport)
      },
    });
  });
  $('.about h3 > span:last-child').each((index, title) => {
    gsap.to(title, {
      x: 200,
      scrollTrigger: {
        trigger: title,
        // markers: true,
        scrub: 2.5,
        start: 'top 80%', //trigger scroller(viewport)
        end: 'bottom 20%', //trigger scroller(viewport)
      },
    });
  });

  //이미지 애니메이션
  $('.about-con figure').each((index, frame) => {
    // $()로 담아줘야 오류가 생기지 않음,
    // Javascript에서는 frame이라는 변수에 .querySelector로 잡아주면 인식하지만
    //find는 jquery의 method이기 때문에 jquery의 객체에 담아줘야 인식함
    const image = $(frame).find('img');
    console.log(image);

    //figure를 크게 만들기
    gsap.from(frame, {
      scale: 0.9,
      duration: 2,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: frame,
        // markers: true,
        start: 'top 50%',
      },
    });

    // img를 작게 만들기
    gsap.from(image, {
      scale: 1.4,
      duration: 2,
      autoAlpha: 1,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: frame,
        // markers: true,
        start: 'top 50%',
      },
    });
  });

  //하단 배너 링크 애니메이션
  // gsap.from('.contact', {
  //   clipPath: 'inset(50% 100% 50% 100%)',
  //   duration: 3,
  // });

  const contactTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.contact',
      // markers: true,
      start: 'top 70%',
    },
  });
  contactTL.from('.contact', {
    clipPath: 'inset(10% 10% 10% 10%)',
    duration: 2,
    ease: 'power4.inOut',
  });
  contactTL.from(
    '.contact-con',
    {
      autoAlpha: 0,
      y: 30,
      duration: 1,
      ease: 'power4.inOut',
    },
    '-=1.5'
  );

  $('.btn-gotop').on('click', () => {
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: 0,
        },
        function () {
          // $('.btn-gotop').fadeOut();
          gsap.to('.btn-gotop', {
            autoAlpha: 0,
          });
        }
      );
  });

  gsap.from($('.btn-gotop'), {
    autoAlpha: 0,
    duration: 1,
    y: 30,
    // yoyo: true,
    scrollTrigger: {
      trigger: '.about-con figure',
      start: 'top 50%',
      markers: true,
      id: 'test',
      toggleActions: 'play none reverse reverse',
      onEnter: () => console.log('Enter'),
      onLeave: () => console.log('Leave'),
      onEnterBack: () => console.log('EnterBack'),
      onLeaveBack: () => console.log('LeaveBack'),
    },
  });

  // swiper
  const productSlider = new Swiper('.product-slider', {
    speed: 500,
    loop: true,
    loopedSlides: 5,

    autoplay: { delay: 2000, disableOnInteraction: false },

    centeredSlides: true,
    slideToClickedSlide: true,

    slidesPerView: 4.5,
    spaceBetween: 50,
  });
});
