// регестрируем плагины
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

// if - это проверка для мобилок. На них скрол мы будем отключать
if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    // регулировка скорости скрола
    smoth: 0.7,
    // подключение эффектов
    effects: true,
    // регулировать скорость скрола можно с помощью data-speed="1" в html разметки
  });
}

// Кнопка для скрола
const btn = document.querySelector(".mirror__btn");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  gsap.to(window, {
    duration: 0.2,
    scrollTo: { y: "#main", offsetY: 70 },
  });
});

// Анимация для home
// использование для анимации gsap.fromTo
gsap.fromTo(
  ".home",
  { opacity: 1 },
  {
    opacity: 0,
    scrollTrigger: {
      // элемент тригера
      trigger: ".home",
      // параметры являются не обязательными
      start: "top",
      end: "bottom",
      // возвращаем предыдущее значение когда скролим обратно
      scrub: true,
    },
  }
);

// Анимация карточками сайтов и их описаний
// При скроле вниз элементы должны собиратсья с боков, становились непрозрачными.

// block__left, inner__img, inner__centent
// block__right, inner__img, inner__centent

// Блок картинок слева описания справа
// переводим в массив картинки, которые будут слева

// gsap.utils.toArray позволяет перевести элементы в массив
const itemsLeftImg = gsap.utils.toArray(".block__left .inner__img");

itemsLeftImg.forEach((item) => {
  gsap.fromTo(
    item,
    {
      x: -150,
      opacity: 0,
    },
    {
      opacity: 1,
      x: 0,
      duration: 5,
      scrollTrigger: {
        trigger: item,
        start: "-850",
        end: "-100",
        scrub: true,
      },
    }
  );
});

// переводим в массив текст, который будет справа от левой картинки
const itemsLeftContent = gsap.utils.toArray(".block__left .inner__content");

itemsLeftContent.forEach((item) => {
  gsap.fromTo(
    item,
    {
      x: 150,
      opacity: 0,
    },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: "-850",
        end: "-100",
        scrub: true,
      },
    }
  );
});

// Блок картинок справа описания слева
// переводим в массив картинки, которые будут справа
const itemsRightImg = gsap.utils.toArray(".block__right .inner__img");

itemsRightImg.forEach((item) => {
  gsap.fromTo(
    item,
    {
      x: 150,
      opacity: 0,
    },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: "-850",
        end: "-100",
        scrub: true,
      },
    }
  );
});

const itemsRightContent = gsap.utils.toArray(".block__right .inner__content");

itemsRightContent.forEach((item) => {
  gsap.fromTo(
    item,
    {
      x: -150,
      opacity: 0,
    },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: "-850",
        end: "-100",
        scrub: true,
      },
    }
  );
});
