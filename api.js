import {MY_API_KEY} from 'config.js';

async function getLatestCOVID19Data()
{
    await fetch("https://covid-193.p.rapidapi.com/statistics", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": MY_API_KEY
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log("COVID 19 API object:");
        console.log(response);
        console.log("\n");

        // add all countries to select element
        response.response.forEach(c => {
            const option = document.createElement('option');
            option.innerHTML = c.country;
            document.getElementById('countries').appendChild(option);
        })

        // save covid data to global variable
        covid19data = response.response;
    })
    .catch(err => {
        console.log(err);
    });
}