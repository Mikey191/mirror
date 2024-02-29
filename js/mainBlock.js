const DATA = [
  {
    img: "./img/works/1.jpg",
    title: "Лендинг",
    text: "Презентация и предложение вашего уникального продукта на одной странице с раскрытием преимуществ, необходимости продукта, установки доверия между компанией, ее продуктом и посетителем",
  },
  {
    img: "./img/works/2.jpg",
    title: "Интернет-магазин",
    text: "Онлайн-магазин с карточками товаров или услуг. Управление ценами, скидками прямо на сайте, онлайн-оплата с возможностью интеграции более 10 платежных систем или эквайринга",
  },
  {
    img: "./img/works/3.jpg",
    title: "Корпоративный сайт",
    text: "Корпоративные сайты — крупные многостраничные ресурсы. Это имиджевый инструмент работы фирмы через интернет. На них размещают описание услуг, преимущества, продукцию, полную информацию для представительства в интернете",
  },
  {
    img: "./img/works/4.jpg",
    title: "Сайт-визитка",
    text: "Главная информация об организации и услугах с минимальными вложениями. Позволяет быстро предоставить описание компании, контактную информацию, услуги. Небольшой веб ресурс, как правило до 5 страниц",
  },
  {
    img: "./img/works/5.jpg",
    title: "Сайт-каталог",
    text: "Экономичный, быстрый, продающий инструмент для вашего бизнеса. Наполнение карточками товаров подробным описанием и ценами. Простая демонстрация продукции, возможность оставить заявку на заказ",
  },
];

console.log(DATA);

const mainBlock = document.querySelector(".main");

for (let index = 0; index < DATA.length; index++) {
  console.log(document.documentElement.clientWidth);
  if (document.documentElement.clientWidth > 1200) {
    if (index % 2 === 0) {
      mainBlock.insertAdjacentHTML(
        "beforeend",
        `
            <div class="block block__left landing">
            <div class="container">
              <div class="block__inner">
                <img class="inner__img" src=${DATA[index].img} alt="" />
                <div class="inner__content">
                  <h2 class="content__title">${DATA[index].title}</h2>
                  <p class="content__text">
                  ${DATA[index].text}
                  </p>
                </div>
              </div>
            </div>
          </div>
  `
      );
    } else {
      mainBlock.insertAdjacentHTML(
        "beforeend",
        `
            <div class="block block__right online_store">
            <div class="container">
              <div class="block__inner">
                <div class="inner__content">
                  <h2 class="content__title">${DATA[index].title}</h2>
                  <p class="content__text">
                  ${DATA[index].text}
                  </p>
                </div>
                <img class="inner__img" src=${DATA[index].img} alt="" />
              </div>
            </div>
          </div>
  `
      );
    }
  } else {
    mainBlock.insertAdjacentHTML(
      "beforeend",
      `
            <div class="block block__left landing">
            <div class="container">
              <div class="block__inner">
                <img class="inner__img" src=${DATA[index].img} alt="" />
                <div class="inner__content">
                  <h2 class="content__title">${DATA[index].title}</h2>
                  <p class="content__text">
                  ${DATA[index].text}
                  </p>
                </div>
              </div>
            </div>
          </div>
  `
    );
  }
}
