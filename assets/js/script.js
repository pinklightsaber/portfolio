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
// $(document).on('click', '.btn0', function(){
//   $('.bg0').fadeOut();
//   $('.bg, .ia-container').fadeIn();
// });
// $(document).on('click','.btn2', function(){
//   $('.bg0').fadeIn();
//   $('.bg, .ia-container').fadeOut();
// })

// setTimeout(function () {
//                 $('.bg0').fadeOut();
//             }, 7000);
// setTimeout(function () {
//                 $('.bg, .ia-container').fadeIn();
//             }, 7000);



$('progress').each(function() {
    var max = $(this).val();
    $(this).val().animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
  });

  function copyT(element) {
 var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

