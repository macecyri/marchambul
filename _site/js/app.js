$('.stats').tooltip();

var mapOptions = {
                zoom: 13,
                scrollwheel: false,
                disableDefaultUI: true,
                center: new google.maps.LatLng(48.8588589, 2.3470599)
            };


  var content1 = '<div style="height: 180px;" id="content">'+
      '<h3 style="display: inline-block;" id="firstHeading" class="firstHeading">Roger </h3>' +
      '<h4 style="display: inline-block;"> (triporteur 1)</h4>'+
      '<div id="bodyContent"  style="margin-bottom: 20px;">'+
      '<p>Aujourd hui je transporte:' +
      '<ul>' +
      '<li>des pommes du verger de Paul: <a>site web</a></li>' +
      '<li>des tomates de la production de Françoise: <a>site web</a></li>' +
      '<li>des patates du champs de Roger: <a>site web</a></li>' +
      '</ul>' +
      '</p>'+
      '</div>'+
      '<a style="margin-right: 10px; background-color: #eee;color: #333; border: 1px solid #ccc;padding: 4px 6px">Voir l\'itinéraire</a>'+
      '<a style="background-color: #eee;color: #333; border: 1px solid #ccc;padding: 4px 6px">Appeler le triporteur dans votre quartier</a>'+
      '</div>';

  var content2 = '<div style="height: 200px;" id="content">'+
      '<h3 style="display: inline-block;" id="firstHeading" class="firstHeading">Francis </h3>' +
      '<h4 style="display: inline-block;"> (triporteur 2)</h4>'+
      '<div id="bodyContent"  style="margin-bottom: 20px;">'+
      '<p>Aujourd hui je transporte:' +
      '<ul>' +
      '<li>des betteraves de la production de Francis: <a>site web</a></li>' +
      '<li>des navets du champs de Michelle: <a>site web</a></li>' +
      '<li>des carottes de la terre entretenue par Claude: <a>site web</a></li>' +
      '</ul>' +
      '</p>'+
      '</div>'+
      '<a style="margin-right: 10px; background-color: #eee;color: #333; border: 1px solid #ccc;padding: 4px 6px">Voir l\'itinéraire</a>'+
      '<a style="background-color: #eee;color: #333; border: 1px solid #ccc;padding: 4px 6px">Appeler le triporteur dans votre quartier</a>'+
      '</div>';

  var content3 = '<div style="height: 200px;" id="content">'+
      '<h3 style="display: inline-block;" id="firstHeading" class="firstHeading">Claudette </h3>' +
      '<h4 style="display: inline-block;"> (triporteur 3)</h4>'+
      '<div id="bodyContent"  style="margin-bottom: 20px;">'+
      '<p>Aujourd hui je transporte:' +
      '<ul>' +
      '<li>des radis de la production de Jacques: <a>site web</a></li>' +
      '<li>des pommes du verger de Bernard: <a>site web</a></li>' +
      '<li>des oignons blancs de la récolte de Nicole: <a>site web</a></li>' +
      '</ul>' +
      '</p>'+
      '</div>'+
      '<a style="margin-right: 10px; background-color: #eee;color: #333; border: 1px solid #ccc;padding: 4px 6px">Voir l\'itinéraire</a>'+
      '<a style="background-color: #eee;color: #333; border: 1px solid #ccc;padding: 4px 6px">Appeler le triporteur dans votre quartier</a>'+
      '</div>';



var triporteur1Positions =
[
  [48.8588589, 2.3470599],
  [48.8588589, 2.3520599],
  [48.8588589, 2.3570599],
  [48.8588589, 2.3620599],
  [48.8588589, 2.3670599],

  [48.8558589, 2.3670599],
  [48.8538589, 2.3670599],
  [48.8518589, 2.3670599],
  [48.8488589, 2.3670599],
  [48.8458589, 2.3670599],

  [48.8458589, 2.3620599],
  [48.8458589, 2.3570599],
  [48.8458589, 2.3520599],
  [48.8458589, 2.3470599],

  [48.8488589, 2.3470599],
  [48.8518589, 2.3470599],
  [48.8538589, 2.3470599],
  [48.8558589, 2.3470599]
]


var triporteur2Positions =
[
  [48.8588589, 2.3470599],
  [48.8608589, 2.3470599],
  [48.8628589, 2.3470599],
  [48.8658589, 2.3470599],
  [48.8688589, 2.3470599],

  [48.8688589, 2.3520599],
  [48.8688589, 2.3570599],
  [48.8688589, 2.3620599],
  [48.8688589, 2.3670599],
  [48.8688589, 2.3700599],

  [48.8688589, 2.3700599],
  [48.8658589, 2.3700599],
  [48.8628589, 2.3700599],
  [48.8608589, 2.3700599],

  [48.8588589, 2.3670599],
  [48.8588589, 2.3620599],
  [48.8588589, 2.3570599],
  [48.8588589, 2.3520599]
]


var triporteur3Positions =
[
  [48.8588589, 2.3470599],
  [48.8588589, 2.3420599],
  [48.8588589, 2.3370599],

  [48.8608589, 2.3370599],
  [48.8628589, 2.3370599],
  [48.8648589, 2.3370599],

  [48.8648589, 2.3320599],
  [48.8648589, 2.3270599],
  [48.8648589, 2.3220599],

  [48.8648589, 2.3170599],
  [48.8628589, 2.3170599],
  [48.8608589, 2.3170599],
  [48.8588589, 2.3170599],

  [48.8588589, 2.3220599],
  [48.8588589, 2.3270599],
  [48.8588589, 2.3320599],
  [48.8588589, 2.3370599],
  [48.8588589, 2.3420599]
]


var i = 0;
var j = 0;
var k = 0;

var moveMarker = function(){
    // marker1.setPosition( new google.maps.LatLng( triporteur1Positions[i][0], triporteur1Positions[i][1] ) );
    marker2.setPosition( new google.maps.LatLng( triporteur2Positions[j][0], triporteur2Positions[j][1] ) );
    marker3.setPosition( new google.maps.LatLng( triporteur3Positions[k][0], triporteur3Positions[k][1] ) );
    i++;
    j++;
    k++;
    if(i == 18){i = 0};
    if(j == 18){j = 0};
    if(k == 18){k = 0};

    setTimeout( function(){
      moveMarker()
    }, 1000 );
  }


var createMarker = function(contentString, openInfoWindows){
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(48.8588589, 2.3470599),
      map: map,
      title: 'Je suis un triporteur',
      icon: "../img/marchambul-icon.png"
  });

  var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map,marker);
  });

  google.maps.event.addListener(marker, 'click', function() {
    var newState = !marker.get('focusInfoWindow');
    marker.set('focusInfoWindow', newState);
  });

  google.maps.event.addListener(marker, 'mouseout', function() {
    if (!marker.get('focusInfoWindow')){
      infowindow.close(map,marker);
    }

  });
  if (openInfoWindows){
    infowindow.open(map,marker);
  }

  return marker
}

//We create the maps that will hold our contact markers
var map = new google.maps.Map(document.getElementById("google-map"),
    mapOptions);




var marker1 = createMarker(content1, true);
marker1.setPosition( new google.maps.LatLng( 48.8358589, 2.2970599 ) );
var marker2 = createMarker(content2);
var marker3 = createMarker(content3);

moveMarker()



$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 50
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
