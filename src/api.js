//Base URL
const base_url = 'https://api.rawg.io/api/';

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10 ){
        return `0${month}`;
    } else{
        return month;
    }
}

//Getting current day

const getCurrentDay = () => {
    const day = new Date().getDay();
    if (day < 10 ){
        return `0${day}`;
    } else{
        return day;
    }
}

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

//Last year
const lastYear = `${currentYear - 1} - ${currentMonth} - ${currentDay}`; 

//Next year
const nextYear = `${currentYear + 1} - ${currentMonth} - ${currentDay}`;

//Popular games
 const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

 export const popularGamesURL = () => `${base_url}${popular_games}`