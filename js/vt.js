$(document).ready(function () {
var choosedate= "";
$("#submit").on("click", function(e){
    e.preventDefault();
    myfunction();
  })
function myfunction(){
    const inputdate = document.getElementById('date');
    choosedate= new Date(inputdate.value);
    choosedate = choosedate.getDate() + 30;
    var futureDate = chooseDate.getFullYear()+'-'+('0'+(chooseDate.getMonth()+1)).slice(-2)+'-'+('0'+(chooseDate.getDate())).slice(-2);
    document.getElementById("nextdose").innerHTML = ('your next dose is :  '+futureDate);
}
})