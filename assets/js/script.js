$('h1').fadeOut(6000);
if(navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(function(pos) {
     
      lat = pos.coords.latitude;
      lon = pos.coords.longitude;

  var cors = 'https://cors-anywhere.herokuapp.com/';
  var api_key = 'cfc3cbbf50d657838c62bfc7017c91fb';
  var params = ['exclude=[minutely,hourly,daily,alerts,flags]', 'lang=es', 'units=auto']

  $.ajax({
    url: cors + 'https://api.darksky.net/forecast/'+ api_key +'/' + lat + ',' + lon + '?' + params[0] + '&' + params[1] + '&' + params[2],
    method: 'GET'
  }).done(function(data) {
    console.log(data);
  $('#info').append('Ahora mismo hay ' + data.currently.temperature + '° de temperatura, además de ' + data.currently.summary + '. ');
  $('#info i').attr('class', 'wi-forecast-io-'+ data.currently.icon)
    	}); 
       },

    function(){
  $('#info').append('Si recargas la página y permites la localización te puedo dar una información del clima importante');
});

};