fetch("https://covid-19-data.p.rapidapi.com/country?name=italy", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "3621becfedmsh51a35fc00389fa5p163fbcjsna0e34515b714"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});