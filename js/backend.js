var successFunc = function successFunc(data) {
  console.log(data);

  addLyftInfo(data.lyft);
  addPlaceData(data.place);
};

var errorFunc = function errorFunc(err) {
  console.log(err);
};


var sendData = function sendData() {

  console.log("Send");
  var data = $('form').serialize();
  console.log("form passed", data);

  $.ajax({ 
    type: "GET",
    url: 'http://blyndfoldme.herokuapp.com/api/random?' + data,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: successFunc,
    error: errorFunc
  });
};

var addLyftInfo = function addLyftInfo(data) {

  var imgEl = '<img class="lyft-img" src="' + data.img + '">';
  var nameEl = '<p class="lead">'+data.name+'</p>';

  $('.lyft-filler-text').hide();
  $('.lyft-info').hide();

  $('.lyft-info').append(imgEl);
  $('.lyft-info').append(nameEl);

  $('.lyft-info').show();
};

var addPlaceData = function addPlaceData(data) {

  var nameEl = '<h4>'+data.name+'</h4>';
  // var mapEl = ''

  $('#place-tab').append(nameEl);

};