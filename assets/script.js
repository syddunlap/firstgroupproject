$(document).ready(function () {

  // Initialize Firebase
  // var config = {
  //     apiKey: "AIzaSyAu6PqMN6N4QlsttiRI9U6PT3SVaGXuy6w",
  //     authDomain: "musicweather-fe8c7.firebaseapp.com",
  //     databaseURL: "https://musicweather-fe8c7.firebaseio.com",
  //     projectId: "musicweather-fe8c7",
  //     storageBucket: "musicweather-fe8c7.appspot.com",
  //     messagingSenderId: "589121883549"
  //   };
  //   firebase.initializeApp(config);

  // Hide music table until form is submitted
  $(".userMusic").hide();

  // Click event for submit button
  $("#submit").on("click", function (event) {
    event.preventDefault();
    $(".open-page").hide();
    var name = $("#name").val().trim();
    var city = $("#city").val().trim();
    var country = $("#country").val().trim();
    console.log(name);
    console.log(location);
    
    // Weather App API Key
    var APIKey = "13783c874e54ca4e2de546d0430362f0";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=imperial&appid=" + APIKey;
    
    // Get Weather
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    
    .then(function (response) {
      console.log(queryURL);
      console.log(response);
      
      // Store the info we want in variables
      var weatherDescription = response.weather[0].description;
      var locationCity = response.name;
      var mood = response.weather[0].id;
      console.log(weatherDescription);
      console.log(locationCity);
      console.log(mood);
      
      // Add to html
      $(".instructions").append(
        $("<h4>").text("Hello, " + name + "!"),
        $("<h4>").text("Here's a list of songs perfect for the " + weatherDescription + " you're experiencing in " + locationCity + ", right now.")
        );

        // Show playlist
        $(".userMusic").show();

      })

    $("#name").val("");
    $("#location").val("");
  })

})
