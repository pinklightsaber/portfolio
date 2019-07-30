$('.m').on('change', function() {
    $('.m').not(this).prop('checked', false);  
});
 
 n =  new Date();
  y = n.getFullYear();
  m = n.getMonth();
  d = n.getDate();
 var fecha= new Date(y,m,d);
 var month= fecha.toLocaleDateString('es-ES', {month: 'long'});
 var day = fecha.toLocaleDateString('es-ES', {weekday: 'long'});
 var date= fecha.toLocaleDateString('es-ES',  {day: 'numeric'});
 document.getElementById('day').innerHTML = day;
 document.getElementById('date').innerHTML=date;
 document.getElementById('month').innerHTML=month;


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
    $('#iw i').attr('class', 'wi-forecast-io-'+ data.currently.icon );
    $('#t').append( +data.currently.temperature +'°C');
    $('.del').html( data.currently.summary)

    	}); 
       },

function(){

});

};

$('progress').each(function() {
    var max = $(this).val();
    $(this).val().animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
  });

function createParticle (x, y) {
  var size = Math.random() * 50 + 10;
  
  x -= (size / 2);
  y -= (size / 2);
  
  var particle = document.createElement('div');
  
  particle.className = 'div';
  document.body.appendChild(particle);
  
  TweenMax.set(particle, {
    x: x, 
    y: y,
    width: size,
    height: size,
    background: function () {
      return `hsl(${Math.random() *90+200}, 50%, 50%)`
    }
  });
  TweenMax.to(particle, Math.random() * 2 + 1, {
    x: x + (Math.random() - 0.5) * 200,
    y: y + (Math.random() - 0.5) * 200,
    opacity: 0,
    scale:0,
    ease: Power2.easeOut,
    onComplete: function () {
      document.body.removeChild(particle);
    }
  })
}

window.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  createParticle(x, y);
});
document.body.addEventListener('touchmove', function (e) {
  var x = e.touches[0].clientX;
  var y = e.touches[0].clientY;
  e.preventDefault();
  createParticle(x, y);
});

