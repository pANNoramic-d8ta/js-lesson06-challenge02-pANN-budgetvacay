var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function () {
    var totalBudget = Number(
        prompt("What is your total trip budget? (ex... 7000.00)")
    );
    var accommodation = Number(
        prompt("What are your accomodation costs? (ex... 1500.00)")
    );
    var numDays = Number(prompt("How many days does your trip last?(ex... 10)"));

    calculateDailyBudget(totalBudget, accommodation, numDays);
};

var calculateDailyBudget = function (totalBudget, accommodation, numDays) {
    var daily = ((totalBudget - accommodation) / numDays).toFixed(2);

    dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`;
};

tripInfoButton.addEventListener("click", tripInfo);

var calculateDailyBudget = function (totalBudget, accommodation, numDays) {
    var daily = ((totalBudget - accommodation) / numDays).toFixed(2);

    dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`;
};

tripInfoButton.addEventListener("click", tripInfo);

