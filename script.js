'use strict';
let money = + prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце", "");
let secondQuestion = prompt("Во сколько обойдется", "");

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {
        firstQuestion:secondQuestion
    },
    income: [],
    savings: false, 
};

alert(appData.budget/30);