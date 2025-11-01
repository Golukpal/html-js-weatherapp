const button = document.getElementById("search-button")
const input = document.getElementById("city-input")

const cityName = document.getElementById("cityname");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityname){
   
        const promise = await fetch(``)

    return await promise.json();
    };


button.addEventListener("click", async()=> {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText =`${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText =  result.current.temp_c;
})