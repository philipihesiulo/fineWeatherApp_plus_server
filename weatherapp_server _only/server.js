
var http = require("http");



  function weather(location, fn){
    var useData = {};

    //HTTP request of weather API
    http.get("http://api.apixu.com/v1/current.json?key=759ece0bc69f4d9c946191832162704&q="+location, function(response){
      
      var weatherInfo = "";
      
      
      // Gather data chunk from api
      response.on("data", function(data){
        weatherInfo += data.toString();
      });
      
      // 
      response.on("end", function(){

        var weather = JSON.parse(weatherInfo);
        
        //CONVERT TIME
        function tConvert (time) {
          time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

          if (time.length > 1) { 
            time = time.slice (1);  
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; 
            time[0] = +time[0] % 12 || 12;
          }
          return time.join ('');
        }
          
        //Manipulate weather api into an object 
        if (weather.error){
          fn(weather);
        }else{
          var weatherData = {
            city : weather.location.name,
            country : weather.location.country,
            time : tConvert(weather.location.localtime.slice(11)),
            temperature : weather.current.temp_c,
            condition : weather.current.condition.text,
            pressure : weather.current.pressure_in,
            latitude : weather.location.lat,
            longitude : weather.location.lon
          };

        for (var key in weatherData){
          useData[key] = weatherData[key];

        }

        fn(useData);
        
        }
        
      });
      
      response.on("error", function(err){

        fn({message: `${location} not available`});
      });


    }).on("error", function(err){
      fn({message: "Sorry, our server encounterd an error!"})
      console.log(err.message);
    });
    
        
  }

module.exports.weather = weather;