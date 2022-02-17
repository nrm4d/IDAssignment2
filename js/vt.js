$(document).ready(function () {
var choosedate= "";
$("#nextdate").on("click", function(e){
    e.preventDefault();
    myfunction();
  })
function myfunction(){
    choosedate= new Date(document.getElementById('date').value);
    choosedate.setDate(choosedate.getDate() + 30);
    console.log(choosedate);
    document.getElementById("nextdose").innerHTML = ('your next dose is :  '+ choosedate);
}
})