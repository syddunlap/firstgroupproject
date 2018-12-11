// Initialize Firebase
var config = {
    apiKey: "AIzaSyAu6PqMN6N4QlsttiRI9U6PT3SVaGXuy6w",
    authDomain: "musicweather-fe8c7.firebaseapp.com",
    databaseURL: "https://musicweather-fe8c7.firebaseio.com",
    projectId: "musicweather-fe8c7",
    storageBucket: "musicweather-fe8c7.appspot.com",
    messagingSenderId: "589121883549"
  };
  firebase.initializeApp(config);

// Weather App API Key
var APIKey = "13783c874e54ca4e2de546d0430362f0";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
userCity + APIKey;

// Get Weather
$.ajax({
    url: queryURL,
    method: "GET"
  })
