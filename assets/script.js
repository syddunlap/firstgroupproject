$(document).ready(function () {

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

  var database = firebase.database();

  // Arrays for weather IDs
  var thunderstorm = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];
  var drizzle = [300, 301, 302, 310, 311, 312, 313, 314, 321];
  var rain = [500, 501, 502, 503, 504, 511, 520, 521, 522, 531];
  var snow = [600, 601, 602, 611, 612, 615, 616, 620, 621, 622];
  var atmosphere = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
  var clear = [800];
  var cloud = [801, 802, 803, 804];

  // Arrays for albums
  var albumID = [];
  var thunderstormMusic = [27221515, 29621868, 14214183, 26627286, 28343751, 30161803, 20923198, 20523014, 14298911, 13954561, 19626917, 22993501, 20918069, 26682020, 10280400, 11302331, 11326966, 29365764, 10974137, 19607831, 11335735];
  var drizzleMusic = [10288735, 11000158, 23681127, 10289120, 10716402, 23704555, 15430719, 10279693, 30561118, 13864308, 10605599, 10265958, 10533719, 10283878, 15443312, 21574329, 22370091, 10395661, 10276432, 10284726];
  var rainMusic = [10277961, 10471939, 14080398, 16607969, 10628237, 17625563, 10853548, 10774845, 10278080, 10333061, 21898179, 17625597, 16086513, 10970205, 17195770, 17130270, 15717664, 10282245, 10420524, 21431001];
  var snowMusic = [13185575, 10813148, 20145030, 10284233, 16971212, 10307401, 10403476, 10299112, 10774845, 10266184, 10309833, 10276826, 10288693];
  var atmosphereMusic = [28708799, 22012241, 16637257, 20568155, 28582508, 11309799, 11314052, 10426863, 28689059, 29809240, 29550454, 10277909, 15576062, 10351407, 10287464, 14283082, 15545998, 13908538, 24559057, 23989672, 15564339];
  var clearMusic = [11008559, 28578970, 22694840, 21348868, 11343497, 1131171, 29709466, 20882255, 20757738, 29647720, 20805457, 28857029, 29862631, 11330563, 23335871, 25865374, 21809511, 26096185];
  var cloudMusic = [15799416, 15402133, 10615448, 11316988, 10814625, 18766926, 16047398, 17216196, 10279891, 18973650, 11065863, 10284678, 10279346, 17664370, 11065711];

  // Hide music table until form is submitted
  $(".userMusic").hide();

  // Click event for submit button
  $("#submit").on("click", function (event) {
    event.preventDefault();
    var name = $("#name").val().trim();
    var city = $("#city").val().trim();
    var country = $("#country").val().trim();

    if (name === "" || city === "" || country === "") {
      $("#name").val("");
      $("#city").val("");
      $("#country").val("");
    }

    else {
      $(".open-page").hide();
      // Weather App API Key
      var APIKey = "13783c874e54ca4e2de546d0430362f0";
      var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=imperial&appid=" + APIKey;

      // Get Weather
      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function (response) {
          // console.log(queryURL);
          // console.log(response);

          // Store the info we want in variables
          var weatherDescription = response.weather[0].description;
          var locationCity = response.name;
          var mood = response.weather[0].id;
          var iconID = response.weather[0].icon;
          // var iconURL = $("<img>");
          // iconURL.attr("src", icon);
          var iconURL = "http://openweathermap.org/img/w/" + iconID + ".png";
          // console.log(weatherDescription);
          // console.log(locationCity);
          // console.log(mood);

          // Add to html
          $(".personalgreeting").append(
            $("<h4>").text("Hello, " + name + "!"),
            $("<h4>").text("Here's an album perfect for the " + weatherDescription + " you're experiencing in " + locationCity + ", right now.")
          );

          // Connecting the weather ID to the mood
          if (thunderstorm.includes(mood) === true) {
            albumID = thunderstormMusic[Math.floor(Math.random() * thunderstormMusic.length)];
          } else if (drizzle.includes(mood) === true) {
            albumID = drizzleMusic[Math.floor(Math.random() * drizzleMusic.length)];
          } else if (rain.includes(mood) === true) {
            albumID = rainMusic[Math.floor(Math.random() * rainMusic.length)];
          } else if (snow.includes(mood) === true) {
            albumID = snowMusic[Math.floor(Math.random() * snowMusic.length)];
          } else if (atmosphere.includes(mood) === true) {
            albumID = atmosphereMusic[Math.floor(Math.random() * atmosphereMusic.length)];
          } else if (clear.includes(mood) === true) {
            albumID = clearMusic[Math.floor(Math.random() * clearMusic.length)];
          } else if (cloud.includes(mood) === true) {
            albumID = cloudMusic[Math.floor(Math.random() * cloudMusic.length)];
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

            // Get album info from Music API
          }).then(function (response2) {
            console.log(response2);
            var trackList = response2.message.body.track_list;
            var album = trackList[0].track.album_name;
            var artist = trackList[0].track.artist_name;
            $("#albumName").html(album);
            $("#artistName").html("by " + artist)

            // Creating Firebase Object
            var recentUser = {
              "name": name,
              "city": city,
              "artist": artist
            };
            console.log(recentUser);

            // Push to Firebase
            database.ref().push(recentUser);

            // Loop through Track list to print to HTML
            for (i = 0; i < response2.message.body.track_list.length; i++) {
              var songTitle = trackList[i].track.track_name;
              var songInfo = trackList[i].track.track_share_url;
              // console.log(songTitle);
              // console.log(album);
              // console.log(artist);

              var songRow = $("<tr>").append(
                $("<td>").text(songTitle),
                $("<td>").html("<a class='songInfo' href=" + songInfo + ">Song Info</a>")
              );

              // Print Track List to HTML
              $(".table > tbody").append(songRow);
            }

            // Call to Music API to grab Related Artists
            var APIKey2 = "8189f287014498b50483839cf645fcef";
            var queryURL3 = "https://api.musixmatch.com/ws/1.1/artist.related.get?artist_id=" + trackList[0].track.artist_id + "&page_size=2&page=1&apikey=" + APIKey2;
            var proxy = "https://cors-anywhere.herokuapp.com/";
            var finishedurl2 = proxy + queryURL3;

            $.ajax({
              url: finishedurl2,
              method: "GET",
              crossDomain: true,
              dataType: "json",
              contentType: "application/json"

            }).then(function (response3) {
              // console.log(queryURL3);
              for (i = 0; i < response3.message.body.artist_list.length; i++) {
                var relatedArtists = response3.message.body.artist_list[i].artist.artist_name;
                // console.log(relatedArtists);

                // Print related artists to HTML
                $("#relatedArtists").append(
                  $("<ul>"),
                  $("<li>").text(relatedArtists)
                );
              }
            });

            // Show playlist
            $(".userMusic").show();
          });
        })

      // Clear the userInput values
      $("#name").val("");
      $("#city").val("");
      $("#country").val("");
    }
  })

  // Grab most recent users from Firebase
  database.ref().limitToLast(4).on("child_added", function (snapshot) {
    var recentUserName = snapshot.val().name;
    var recentUserCity = snapshot.val().city;
    var recentUserArtist = snapshot.val().artist;

    // Add 3 most recent users to HTML
    $("#recentUsers").prepend(
      $("<ul>"),
      $("<li>").text(recentUserName + " from " + recentUserCity + " was rockin' out to " + recentUserArtist)
    );
  })

  // THIS NEEDS WORK.. 
  // Need to figure out resetting the userMusic page so that it only prints current and doesn't just keep adding albums on top of each other
  $("#restart").on("click", function (event) {
    event.preventDefault();
    $(".userMusic").hide();
    $("tbody").empty();
    $(".personalgreeting").empty();
    $(".album-header").empty();
    $("#relatedArtists").empty();
    $(".open-page").show();
  })
})
