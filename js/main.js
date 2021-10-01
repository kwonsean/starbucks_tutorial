const searchEl = document.querySelector(".search")
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function(){
  searchInputEl.focus()
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색')
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '')
});


const badgeEl = document.querySelector("header .badges")
// 함수가 우르르 실행되는것이 아니라 0.3초 간격으로 실행되도록 함
window.addEventListener('scroll', _.throttle(function(){
  // console.log(window.scrollY)
  if(window.scrollY > 500){
    // gsap.to(요소, 지속시간(s단위), 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else{
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
},300));
// _.throttle(함수, 시간(ms단위))
