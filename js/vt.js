const inputdate = document.getElementById('date')
var onemonth = 30;
var nextdose = inputdate.setDate(inputdate.getDate() + onemonth);
messages.push(nextdose);