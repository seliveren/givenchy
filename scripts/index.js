//consts

const header = document.querySelector('.header');
const menuButton = header.querySelector('.header__image');
const menuText = header.querySelector('.header__text');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.button_type_close');
const aboutMenuItem = document.querySelector('.popup__menu-item_about');
const looksMenuItem = document.querySelector('.popup__menu-item_looks');
const subscribeMenuItem = document.querySelector('.popup__menu-item_subscribe');
const aboutSection = document.querySelector('.about');
const looksSection = document.querySelector('.looks');
const subscribeSection = document.querySelector('.subscribe');
const subscribeButton = document.querySelector('.button_type_subscribe');
const itemsLeft = document.querySelectorAll(".fade_left");
const itemsRight = document.querySelectorAll(".fade_right");
const imageCollection = document.querySelectorAll('.looks__image');


//functions

//opening popup
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

//closing popup
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

/*smooth scroll to each section*/
function scrollToSection(el) {
  if (el === looksSection && window.innerWidth > 767) {
    scroll({
      top: el.offsetTop - 80,
      behavior: "smooth"
    });
  } else if (el === looksSection && window.innerWidth < 767) {
    scroll({
      top: el.offsetTop - 40,
      behavior: "smooth"
    });
  } else {
    scroll({
      top: el.offsetTop,
      behavior: "smooth"
    });
  }
}

/*fade in from left and right*/
function fadeInLeft() {
  for (let i = 0; i < itemsLeft.length; i++) {
    let distanceTop = itemsLeft[i].getBoundingClientRect().top;

    if (distanceTop < window.innerHeight - 250) {
      itemsLeft[i].classList.add("fade_active");
      itemsLeft[i].classList.add("fade_active_fade-left");
    } else {
      itemsLeft[i].classList.remove("fade_active_fade-left");
    }
  }
}

function fadeInRight() {
  for (let i = 0; i < itemsRight.length; i++) {
    let distanceTop = itemsRight[i].getBoundingClientRect().top;

    if (distanceTop < window.innerHeight - 250) {
      itemsRight[i].classList.add("fade_active");
      itemsRight[i].classList.add("fade_active_fade-right");
    } else {
      itemsRight[i].classList.remove("fade_active_fade-right");
    }
  }
}

/*random image change*/
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function changeImage() {
  setInterval(function () {
    for (let i = 0; i <= 1; i++) {
      shuffleArray(images)
      let randomNum = Math.floor(Math.random() * images.length);
      if (imageCollection[i].src !== images[i].src) {
        imageCollection[randomNum].src = images[i].src
      }
    }
  }, 2000);
}


//eventListeners
menuButton.addEventListener('click', function () {
  openPopup(popup);
})

menuText.addEventListener('click', function () {
  openPopup(popup);
})

closeButton.addEventListener('click', function () {
  closePopup(popup);
})

aboutMenuItem.addEventListener('click', function () {
  closePopup(popup);
  scrollToSection(aboutSection);
})

looksMenuItem.addEventListener('click', function () {
  closePopup(popup);
  scrollToSection(looksSection);
})

subscribeMenuItem.addEventListener('click', function () {
  closePopup(popup);
  scrollToSection(subscribeSection);
})

subscribeButton.addEventListener('click', function () {
  scrollToSection(subscribeSection);
})

window.addEventListener('scroll', fadeInLeft);

window.addEventListener('scroll', fadeInRight);

window.addEventListener('load', function () {
  changeImage();
});

