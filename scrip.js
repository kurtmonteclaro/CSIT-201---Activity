const knowMoreBtn = document.querySelector('.ahm');

const aboutSection = document.querySelector('#about');

knowMoreBtn.addEventListener('click', () => {
  aboutSection.classList.toggle('active');
  if (aboutSection.classList.contains('active')) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
});

const nav = document.querySelector('.nav'),
  navList = nav.querySelectorAll('li'),
  totalNavList = navList.length,
  allSection = document.querySelectorAll('.section'),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a');
  a.addEventListener('click', function () {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove('back-section');
    }
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector('a').classList.contains('active')) {
        allSection[j].classList.add('back-section');
      }
      navList[j].querySelector('a').classList.remove('active');
    }
    this.classList.add('active');
    showSection(this);
    if (window.innerWidth < 1200) {
      ATRSectionTogglerBtn();
    }
  });
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('active');
  }
  const target = element.getAttribute('href').split('#')[1];
  document.querySelector('#' + target).classList.add('active');
}
document.querySelector('.hire-me').addEventListener('click', function () {
  showSection(this);
  updateNav(this);
});
const navTogglerBtn = document.querySelector('.nav-toggler'),
  ATR = document.querySelector('.ATR');
navTogglerBtn.addEventListener('click', () => {
  ATRSectionTogglerBtn();
});
function ATRSectionTogglerBtn() {
  ATR.classList.toggle('open');
  navTogglerBtn.classList.toggle('open');
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle('open');
  }
}

const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
  document.querySelector('.style-switcher').classList.toggle('open');
});
window.addEventListener('scroll', () => {
  if (document.querySelector('.style-switcher').classList.contains('open')) {
    document.querySelector('.style-switcher').classList.remove('open');
  }
});
const alternateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute('title')) {
      style.removeAttribute('disabled');
    } else {
      style.setAttribute('disabled', 'true');
    }
  });
}
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
  dayNight.querySelector('i').classList.toggle('fa-sun');
  dayNight.querySelector('i').classList.toggle('fa-moon');
  document.body.classList.toggle('dark');
});
window.addEventListener('load', () => {
  if (document.body.classList.contains('dark')) {
    dayNight.querySelector('i').classList.add('fa-sun');
  } else {
    dayNight.querySelector('i').classList.add('fa-moon');
  }
});

var typed = new Typed('.typing', {
  strings: ['', 'FullStack Developer.', 'Software Engineer.', 'Backend Developer.'],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
