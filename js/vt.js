const inputdate = document.getElementById('date')
var onemonth = 30;
var nextdose = inputdate.setDate(inputdate.getDate() + onemonth);
messages.push('The next date to your next vaccination dose is:' + nextdose);