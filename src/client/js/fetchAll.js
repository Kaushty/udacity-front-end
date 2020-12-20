/* 
Function to fetch information from API's 
1. Fetch Geo Location 
2. Fetch Weather Data
3. Fetch Image
*/

const fetchData = async (place_name, date) => {
    console.log(":: Fetching Geo Location ::");
  
    // Validate the input
    if (checkInput(place_name, date)){
        // Hide the error message if visible
        document.getElementById('invalid-message').className = "invisible"
        document.getElementById('fetch-failed').className = "invisible"

        await fetchLocationName(place_name);
        const finData = await getData('/travel');
        if (finData.statusCode == 200){
            console.log("Data received successfully");
        }
        updateUI(finData, place_name);
    }
    else{
        updateError(1001);
    }
};

const checkInput = function(place_name, date) {
    if (place_name != "" && date != ""){
        return true;
    }
    else{
        return false;
    }
}

const fetchLocationName = async function(place_name){
    // Function to send a post request to the server and fetch the Details for the travel
    console.log(':: Firing Fetch query ::');
    const response = await fetch('/fetchData', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',            
        },
        body: JSON.stringify({
            textInput: place_name          
        })
    })
    .then((res) => {
        return res.json();
    })
    .then((jsonData) => {
        console.log(":: Received Data from server ::");
        if(jsonData.statusCode == 500){
            console.log("Something went wrong");
        }
        else{
            console.log("Data Stored in server successfully")
        }
        return jsonData;
    })
};

const getData = async (route) => {
    try{
        const response = await fetch(route)
        const final_data = await response.json();
        return final_data;
    }
    catch(err){
        updateError(4001)
        return err;
    }
}

const updateUI = function(data, place_name){

    document.getElementById('location-picture').setAttribute('src', data.pictureData.pictureURL);
    document.querySelector('#country-name').textContent = data.geoData.countryName;
    document.querySelector('#place-entered').textContent = place_name.toUpperCase();

    // Object containing the weather data for the days to be displayed
    const start_date = document.getElementById('start-date').value;
    let weathers = data.weatherData;
    const difference = calcDateDiff(start_date)

    document.getElementById('difference').innerHTML = difference;
    
    if( difference < 11 ){
        weathers = weathers.slice(difference,difference+6);              
    }
    else{
       weathers = weathers.slice(10,weathers.length);            
    }
    document.getElementById('temp').innerHTML = `<span> ${weathers[0].temp}°C </span>`;
    document.getElementById('weather-info').innerHTML = weathers[0].weather.description;

    for(let i = 1; i <= weathers.length; i++){
        document.getElementById('date' + i).textContent = weathers[i-1].datetime;
        document.getElementById('degree' + i).innerHTML = `<span> ${weathers[i-1].temp}°C </span>`;
        // document.getElementById('weather1').innerHTML = weathers[1].weather.description;
    }
    document.querySelector('.container').classList.remove('invisible');
}

const updateError = function(code){
    if(code == 1001){
        // Update UI to show error
        document.getElementById('invalid-message').className = ""
    }
    else if(code == 4001){
        document.getElementById('fetch-failed').className = ""
    }
}

// Helper Functions
const calcDateDiff = function(start_date){
    // Function to calculate the difference between two dates
    const today = new Date();
    const d1 = today.getDate();
    const m1 = today.getMonth()+1;
    const y1 = today.getFullYear();

    const dot = start_date.split('-');
    const d2 = dot[2];
    const m2 = dot[1];
    const y2 = dot[0];

    const num_days1 = Number(y1 * 365) + Number(d1) + Number(calDaysinMonth(m1)) + Number(calcLeapYears(m1, y1));
    const num_days2 = Number(y2 * 365) + Number(d2) + Number(calDaysinMonth(m2)) + Number(calcLeapYears(m2, y2));

    const difference = num_days2 - num_days1;
    return difference;
}

const calDaysinMonth = function(month){
    const month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let days = 0
    for(let i = 0; i < month-1; i++){
        days += month_days[i];
    }
    return days;
}

function calcLeapYears(month, years){
    if(month <=2 ){
        years -= 1;
    }
    const leap_years = Math.floor(years/4) - Math.floor(years/100) + Math.floor(years/400);
    return leap_years;
}

export{
    fetchData,
    calcDateDiff,
    checkInput
}