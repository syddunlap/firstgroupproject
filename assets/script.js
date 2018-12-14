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

  // Arrays for weather IDs
  var thunderstorm = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];
  var drizzle = [300, 301, 302, 310, 311, 312, 313, 314, 321];
  var rain = [500, 501, 502, 503, 504, 511, 520, 521, 522, 531];
  var snow = [600, 601, 602, 611, 612, 615, 616, 620, 621, 622];
  var atmosphere = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
  var clear = [800];
  var cloud = [801, 802, 803, 804];

  // Arrays for albums
  var thunderstormMusic = [33491453];
  var drizzleMusic = [33491453];
  var rainMusic = [33491453];
  var snowMusic = [33491453];
  var atmosphereMusic = [33491453];
  var clearMusic = [33491453];
  var cloudMusic = [33491453];

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
          $("<h4>").text("Here's an album perfect for the " + weatherDescription + " you're experiencing in " + locationCity + ", right now.")
        );

        // Connecting the weather ID to the mood
        if (thunderstorm.includes(mood) === true) {

        } else if (drizzle.includes(mood) === true) {

        } else if (rain.includes(mood) === true) {

        } else if (snow.includes(mood) === true) {

        } else if (atmosphere.includes(mood) === true) {

        } else if (clear.includes(mood) === true) {

        } else if (cloud.includes(mood) === true) {
          
        };

        // Music App API Key
        var APIKey2 = "8189f287014498b50483839cf645fcef";
        var queryURL2 = "https://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=" + albumID + "&page=1&page_size=20&apikey=" + APIKey2;
        var proxy = "https://cors-anywhere.herokuapp.com/";
        var finishedurl = proxy + queryURL2;

        $.ajax({
          url: finishedurl,
          method: "GET",
          crossDomain: true,
          dataType: "json",
          contentType: "application/json"

        }).then(function (response2) {
          console.log(response2);
        });

        // Show playlist
        $(".userMusic").show();


      })



    $("#name").val("");
    $("#location").val("");
  })

})
