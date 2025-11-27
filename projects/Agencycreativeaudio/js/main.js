window.onload = function(){
  ///GNB 애니메이션
  const menuOpen = document.querySelector('.gnb .menuOpen');
  const menuBox = document.querySelector('.gnb .menuBox');

  menuOpen.addEventListener('click',() => {
    menuBox.classList.toggle('on');
  })

  gsap .registerPlugin(ScrollTrigger); // 지삽라이브러리 스크롤트리거 허용
  
  //01. visual
  gsap.timeline({
    scrollTrigger: {
      trigger: '.visual',
      start: '100% 100%',
      end: '100% 0%',
      scrub: 1, 
      // 스크롤트리거의 이벤트가 스크롤이 사용될때면 재생되도록 만들어주는 속성
      // 안적으면 트리거시점에 나오면 스크롤 안해도 계속 애니 진행됨
      // scrub은 true 또는 숫자로 값을 쓸 수 있음
      // true로 적으면 스크롤할때 바로 진행되고 스크롤 멈추면 바로 멈춤
      // 숫자는 그 시점을 따라잡는데 n초가 걸려서 부드럽게 애니가 진행됨 (1~3까지)
      // markers: true
    }
  })
  .to('.logoWrap #j', {x: -150, y: 250, rotate: 20, ease: 'none', duration: 5},0)
  .to('.logoWrap #y', {x: -30, y: 150, rotate: -10, ease: 'none', duration: 5},0)
  .to('.logoWrap #o', {x: 0, y: 400, rotate: -10, ease: 'none', duration: 5},0)
  .to('.logoWrap #u', {x: 50, y: 300, rotate: 10, ease: 'none', duration: 5},0)
  .to('.logoWrap #n', {x: 100, y: 100, rotate: 10, ease: 'none', duration: 5},0)
  .to('.logoWrap #g', {x: 50, y: 450, rotate: 20, ease: 'none', duration: 5},0)

  // 02. 공통적 MainTextBox, title i 애니메이션
  gsap.utils.toArray('.mainTextBox .title i').forEach((selector) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        start: '100% 100%',
        end: '100% 100%',
        scrub: 1,
        // markers: true
      }
    })
    .fromTo(selector, {overflow: 'hidden', y:150}, {y:0, ease: 'none', duration:5},0)
  })

  // 03. 공통적 .subText p 애니메이션
  gsap.utils.toArray('.subText p').forEach((selector) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        start: '100% 100%',
        end: '100% 100%',
        scrub: 1,
        // markers: true
      }
    })
    .fromTo(selector, {opacity:0, y:100}, {opacity:1, y:0, ease: 'none', duration:5}, 0)
  })


  // 04. con1 textAni 텍스트바뀌는 효과를 gsap 애니메이션으로
  let textAniList = document.querySelectorAll('.con1 .textAni li')
  let textAni = gsap.timeline({repeat: -1});

  for(let i = 0; i < textAniList.length; i++ ) {
    textAni.to(textAniList[i], 0.8, {opacity: 1, repeat: 1, delay: 0, x: 0, yoyo: true, ease: 'power4.out'})
  }
  textAni.play();

  // 05. con4 listBox의 스크롤트리거애니메이션 
  gsap.utils.toArray('.con4 .listBox .box').forEach((selector) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        start: '0% 20%',
        end: '0% 0%',
        scrub: 1,
        // markers: true
      }
    })
    .to(selector , {transform: 'rotateX(-10deg) scale(0.9)', transformOrigin: 'top', filter: 'brightness(0.3)'},0)
  })

  //06. con3 listBox카드애니메이션
  gsap.utils.toArray('.con3 .listBox li').forEach((selector, t) => {
    ScrollTrigger.create({
      trigger: selector,
      start: '30% 50%',
      onEnter: () => {
        gsap.set(selector, {
          rotationX: '-65deg',
          z: '-500px',
          opacity: 0
        }),
        gsap.to(selector, {
          rotationX: 0,
          z: 0,
          opacity: 1,
          delay: t % 3 * .05
        })
      },
      // markers: true
    })
  })

  //07. con5 listBox li호버시 이미지가 보이는 애니메이션
  let listBox = document.querySelectorAll('.con5 .listBox li');
  let imgBox = document.querySelector('.con5 .imgBox');
  let img = document.querySelector('.con5 .imgBox img');

  for(let i = 0; i < listBox.length; i++) {

    listBox[i].addEventListener('mouseover',() => {
      img.src = `images/img${i}.jpg`;
      gsap.set(imgBox, {scale:0, opacity:0, duration:.3}),
      gsap.to(imgBox, {scale:1, opacity:1, duration:.3})
    })
    listBox[i].addEventListener('mousemove', (e) => {
      let imgBoxX = e.pageX + 20;
      let imgBoxY = e.pageY + 20;
      imgBox.style.left = imgBoxX + 'px';
      imgBox.style.top = imgBoxY + 'px';
    })
    listBox[i].addEventListener('mouseout',() => {
      gsap.to(imgBox, {scale:0, opacity:0, duration:.3})
    })
  }

  gsap.timeline({
    scrollTrigger: {
      trigger: '.con5',
      start: '0% 100%',
      end: '100% 0%',
      toggleClass: {targets:'.wrap', className:'on'}
    }
  })

  //08. footer 영역 애니메이션
  gsap.timeline({
    scrollTrigger: {
      trigger: 'footer',
      start: '0% 100%',
      end: '100% 0%',
      scrub: 1,
      // markers: true
    }
  })
  .to('.logoWrap', { top:'20%', ease:'none', duration:5 },0)

}
  //09. loading
  let loading = document.querySelector('.loading');
  let rotate = document.querySelectorAll('.rotate');
  let opacity = document.querySelectorAll('.opacity');

  setTimeout(() => loading.classList.add('scene1'),0),
  setTimeout(() => loading.classList.add('scene2'),1500),
  setTimeout(() => loading.classList.remove('scene1','scene2'),2500)
  setTimeout(() => rotate.forEach(rotate => {rotate.classList.add('on')}),2500),
  setTimeout(() => opacity.forEach(opacity => {opacity.classList.add('on')}),2500);

  

