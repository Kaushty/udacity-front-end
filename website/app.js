
// Decalaring Global variables
const apiKey = 'f03f12c35d45eb2847b0aefb96e76aa9';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Add event listener for Submit button
document.getElementById('generate').addEventListener('click', getWeatherData);

function getWeatherData(){
    // Get the Date of Click
    const d = new Date();
    const month = d.getMonth();
    const date = d.getDate();
    const year = d.getFullYear();

    // Get other required data
    const dateStr = `${date}/${month}/${year}`;
    let zipCode = document.getElementById('zip').value;
    let contCode = document.getElementById('contCode').value;
    let feel = document.getElementById('feelings').value;

    // Fetching the data from the endpoint    
    getData(baseURL, zipCode, contCode, apiKey)
    .then(function(weatherData){
        // Check if data is available for that zipcode.
        if(weatherData.cod === 200){
            postData('/post', weatherData, dateStr, feel);   
            updateUI('/alldata');
        }
        else{
            console.log(weatherData.message);
            resetAll();
        }
    })
}
// Function to get the data from API
const getData = async(baseURL, zipCode, contCode, apiKey) =>{
    const response = await fetch(baseURL + zipCode + ',' + contCode + '&appid=' + apiKey + '&units=metric');
    try{
        const weatherData = await response.json();
        console.log(weatherData);
        return weatherData;
    }  
    catch(error){
        console.log('City not Found');
    }
}    
// function to post data over to the server
async function postData(route, weatherData, dateStr, feel){
    const areaName = weatherData.name;
    const degTemp = weatherData.main.temp;
    const weatherIcon = weatherData.weather[0].icon;
    const weatherDesc = weatherData.weather[0].main;
    console.log(degTemp, areaName, weatherDesc, weatherIcon, dateStr, feel);
    const finData = {
        date: dateStr,
        place: areaName,
        temp: degTemp,
        desc: weatherDesc,
        feelings: feel, 
        icon: weatherIcon,
    }
    const response = await fetch(route, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',            
        },
        body: JSON.stringify(finData),
    });

    try{
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

// Update the UI 
async function updateUI(route){
    const request = await fetch(route);
    try{    
        const finData = await request.json();
        const weatherIcon = `http://openweathermap.org/img/wn/${finData.icon}@2x.png`;
        document.getElementById('container').classList.add('holder');
        document.getElementById('place').textContent = `${finData.place}`;
        document.getElementById('date').textContent = `${finData.date}`;
        document.getElementById('temp').textContent = `${finData.temperature}°C`;
        document.getElementById('desc').textContent = `${finData.description}`;
        document.getElementById('icon').innerHTML = `<img src = "${weatherIcon}" alt="weather-icon"></img>`;
        document.getElementById('content').textContent = `${finData.feelings}`;
        resetAll();
    }
    catch(error){
        console.log('Oops!! Something went wrong.',error);
    };
}

// Helper functions
function resetAll(){
    document.getElementById('zip').value = "";
    document.getElementById('contCode').value = "";
    document.getElementById('feelings').value = "";
}