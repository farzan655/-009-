Films =[
  {
      id: 1,
      name: "Назад в страну чудес ",
      year: 2022,
      age: 12,
      genre: "Фентези",
      rate: 5,
  },
  {
      id: 2,
      name: "Человек который нарисовал бога ",
      year: 2022,
      age: 16,
      genre: "Драма",
      rate: 6,
  },
  {
      id: 3,
      name: "Астрал реенкорнация ",
      year: 2019,
      age: 16,
      genre: "Ужасы",
      rate: 5,
  },
  {
      id: 4,
      name: "Гета Канал - все или ничего ",
      year: 2022,
      age: 16,
      genre: "Экшен",
      rate: 5,
  },
  {
      id: 5,
      name: "Жесткое действие",
      year: 2022,
      age: 16,
      genre: "Комедия",
      rate: 5,
  },
  {
      id: 6,
      name: "Проклятие.Мертвая земля ",
      year: 2022,
      age: 16,
      genre: "Ужасы",
      rate: 5,
  },
  {
      id: 7,
      name: "Время Армагеддона ",
      year: 2022,
      age: 16,
      genre: "Драма",
      rate: 7,
  },
  {
      id: 8,
      name: "Гарри Поттер и дары Смерти: Часть 2",
      year: 2011,
      age: 12,
      genre: "Фентези",
      rate: 8,
  },
  {
      id: 9,
      name: "Родные ",
      year: 2021,
      age: 16,
      genre: "Приключение",
      rate: 6,
  },
  {
      id: 10,
      name: "Аферистка ",
      year: 2022,
      age: 18,
      genre: "Экшен",
      rate: 8,
  },
  {
      id: 11,
      name: "Последний богатырь: Корень зла ",
      year: 2022,
      age: 12,
      genre: "Комедия",
      rate: 6,
  },
  {
      id: 12,
      name: "Черный Адам",
      year: 2022,
      age: 16,
      genre: "Фентези",
      rate: 7,
  }
];

const year = document.querySelector("#year");
const genre = document.querySelector("#genres");
const age = document.querySelector("#age");

let selects = [year, genre, age];

function cardtemplate() {
  let cards = [];
  Films.map((i) => {
      cards.push({
          template: `<div class="card">
      <img src="images/${i.id}.png" alt="" />
      <h2 class="title">${i.name}</h2>
        <p class="rate">${i.rate}/10</p>
        <button class="button">Cмотреть</button>
      </div>
          </div>`,
          genre: i.genre,
          age: i.age,
          year: i.year
      });
  });
  return cards;
}

function addcards(cards) {
  let cardshtml = document.querySelector(".cards");
  cardshtml.innerHTML = '';
  cards.map((i) => {
      cardshtml.innerHTML += i.template;
  });
}

addcards(cardtemplate());

function filter(year, genre, age) {
  let yearx = false;
  let genrex = false;
  let agex = false;
  let cards = cardtemplate();
  if (year !== "") {
      yearx = true;
  }
  if (genre !== "") {
      genrex = true;
  }
  if (age !== "") {
      agex = true;
  }
  if(yearx||genrex||agex){
      cards = cards.filter((i) => {
          let isshow = [];
          if (yearx) {
              if (i.year >= Number(year.split("-")[0]) && i.year <= Number(year.split("-")[1])) {
                  isshow.push(true);
              }
              else{
                  isshow.push(false);
              }
          }
          if (genrex) {
              if (i.genre === genre) {
                  isshow.push(true);
              }
              else{
                  isshow.push(false);
              }
          }
          if (agex) {
              if (i.age <= Number(age.slice(0, age.length - 1))) {
                  isshow.push(true);
              }
              else{
                  isshow.push(false);
              }
          }
          if (isshow.length > 1){
              return isshow.reduce((a,b)=> a*b);
          }
          else if(isshow.length === 1){
              return isshow[0];
          }
          else{
              return false;
          }
      });
      console.log(cards);
      addcards(cards);
  }
}

selects.map((i) => {
  i.addEventListener('click', () => {
      const year = document.querySelector("#year");
      const genre = document.querySelector("#genres");
      const age = document.querySelector("#age");
      const yearvalue = year.value;
      const genrevalue = genre.value;
      const agevalue = age.value;
      filter(yearvalue, genrevalue, agevalue);
  });
});
