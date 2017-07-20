$(document).ready(function(){
	$("#submitCity").click(function(){
      return getWeather();
      });

});

function getWeather(){
  var city = $("#city").val();

  if (city!= ''){

  	$.ajax({
  	 url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=9ed0fc963b349c516694ce5465a14985",
  	 type: "GET",
  	 dataType: "jsonp",	
  	 .done(function(data){
  	 
  	 var widget = showResults(data)

       $("#showWeather").html(widget);

       $("#city").val('');

  	 }
  	
  	});

  }else{
  	$("error").html("<div>Please submit city</div>");
  }

}

function showResults(data){
	return '<h3>Current weather for '+data.name+'+data.sys.country+</h3>'+
    "<p>Weather: "+data.weather[0].main+ "&deg;F</p>"+
	"<p>Temperature: "+data.main.temp+ " &deg;F</p>"+
	"<p>Pressure: "+data.main.Pressure+" hpa</p>"+
	"<p>Humidity: "+data.main.Humidity+"%</p>"+
	"<p>Min Temperature: "+data.main.temp_min+"&deg;F</p>"+
	"<p>Max Temperature: "+data.main.temp_max+"&deg;F</p>"+
	"<p>Wind Speed: "+data.wind.speed+"</p>"+
	"<p>Description: "+data.weather[0].description+" &deg;F</p>"+
};
