fetch("./data/weather.json")
.then((response) => {
    return response.json();
})
.then((formattedResponse) => {
    return console.log(formattedResponse.weather);
});
