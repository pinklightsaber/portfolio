
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});


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
       



});
     };



$('progress').each(function() {
    var max = $(this).val();
    $(this).val().animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
  });
