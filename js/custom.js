'use strict';

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Сколько вам лет?', '');
answers[2] = prompt('Вы мужчина?', '');

console.log(answers);

const category = 'toys';

console.log(`https://www.someurl.com/${category}/5`);

const user = 'Оля';

alert(`Привет, ${user}`);