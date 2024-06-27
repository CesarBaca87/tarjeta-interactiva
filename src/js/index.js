// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const nameElement = document.getElementById('name');
const cardNumberElement = document.getElementById('card-number');
const numberMontYearElement = document.getElementById('number-mont-year');
const numberYearYearElement = document.getElementById('number-year-year');
const cvcNumberElement = document.getElementById('cvc-number');

const nameDefaultElement = document.getElementById('name-default');
const cardNumberDefaultElement = document.getElementById('card-number-default');
const expDateDefaultElement = document.getElementById('exp-date-default');
const cvcNumberDefaultElement = document.getElementById('cvc-number-default');

const changeNameElement = event => {
  console.log(event.target.value);
  nameDefaultElement.textContent = event.target.value;
};

nameElement.addEventListener('input', changeNameElement);

const changeCardNumberElement = event => {
  console.log(event.tar.value);
  cardNumberElement.textContent = event.target.value;
};
cardNumberElement.addEventListener('input', changeCardNumberElement);
