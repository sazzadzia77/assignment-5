const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let totalDate = new Date();
let monthIndex = totalDate.getMonth();
let month = months[monthIndex];
let weekIndex = totalDate.getDay();
let weekDay = week[weekIndex];
let day = totalDate.getDate();
let year = totalDate.getFullYear();

document.getElementById('week').innerText = `${weekDay} ,`;
document.getElementById('month').innerText = `${month}`;
document.getElementById('date').innerText = `${day}`;
document.getElementById('year').innerText = `${year}`;



