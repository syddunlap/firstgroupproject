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
    $(".userMusic").show();
    var name = $("#name").val().trim();
    var location = $("#location").val().trim();
    console.log(name);
    console.log(location);

    // Weather App API Key
    var APIKey = "13783c874e54ca4e2de546d0430362f0";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + location + "&units=imperial&appid=" + APIKey;

    // Get Weather
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      .then(function (response) {
        console.log(queryURL);
        console.log(response);

        var weatherDescription = response.weather[0].description;
        var locationCity = response.name;
        console.log(weatherDescription);
        console.log(locationCity);
      })

    $("#name").val("");
    $("#location").val("");
  })

})
