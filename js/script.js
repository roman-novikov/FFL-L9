$(document).ready(function() {


	//=========================
	//IBG
	//=========================
	function ibg() {
		let ibg = document.querySelectorAll(".ibg");
		for (let i = 0; i < ibg.length; i++) {
				if(ibg[i].querySelector('img')) {
					ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
				}
		}
	}
	ibg();
	//=========================
	//IBG END
	//=========================


	//=========================
	//SLICK SLIDER
	//=========================
	$('.slider').slick({
		dots: true,
		adaptiveHeight: true,
	});
	//=========================
	//SLICK SLIDER END
	//=========================


	//=========================
	//BURGER-MENU
	//=========================
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('.page').toggleClass('page--lock');
	});
	//=========================
	//BURGER-MENU END
	//=========================


	//=========================
	//MAP
	//=========================
	function map(n){
		google.maps.Map.prototype.setCenterWithOffset= function(latlng, offsetX, offsetY) {
				var map = this;
				var ov = new google.maps.OverlayView(); 
				ov.onAdd = function() { 
					var proj = this.getProjection(); 
					var aPoint = proj.fromLatLngToContainerPixel(latlng);
					aPoint.x = aPoint.x+offsetX;
					aPoint.y = aPoint.y+offsetY;
					map.panTo(proj.fromContainerPixelToLatLng(aPoint));
					//=======================================================
					//map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
				}
				ov.draw = function() {};
				ov.setMap(this);
		};
		var markers = new Array();
		var infowindow = new google.maps.InfoWindow({
				//===========================================
				//pixelOffset: new google.maps.Size(-230,250)
		});
		var locations = [
				[new google.maps.LatLng(60.1098679,24.7385138)],
				[new google.maps.LatLng(59.8937806,10.6450368)],
				[new google.maps.LatLng(59.3260668,17.8419728)],
				[new google.maps.LatLng(52.5067614,13.2846511)],
		]
		var options = {
				zoom: 3,
				panControl:false,
				mapTypeControl:false,
				center: locations[0][0],
				scrollwheel:false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: [
					{
						"featureType": "landscape.natural",
						"stylers": [
								{
									"color": "#bcddff"
								}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry.fill",
						"stylers": [
								{
									"color": "#5fb3ff"
								}
						]
					},
					{
						"featureType": "road.arterial",
						"stylers": [
								{
									"color": "#ebf4ff"
								}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "geometry.fill",
						"stylers": [
								{
									"color": "#ebf4ff"
								}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "geometry.stroke",
						"stylers": [
								{
									"visibility": "on"
								},
								{
									"color": "#93c8ff"
								}
						]
					},
					{
						"featureType": "landscape.man_made",
						"elementType": "geometry",
						"stylers": [
								{
									"color": "#c7e2ff"
								}
						]
					},
					{
						"featureType": "transit.station.airport",
						"elementType": "geometry",
						"stylers": [
								{
									"saturation": 100
								},
								{
									"gamma": 0.82
								},
								{
									"hue": "#0088ff"
								}
						]
					},
					{
						"elementType": "labels.text.fill",
						"stylers": [
								{
									"color": "#1673cb"
								}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "labels.icon",
						"stylers": [
								{
									"saturation": 58
								},
								{
									"hue": "#006eff"
								}
						]
					},
					{
						"featureType": "poi",
						"elementType": "geometry",
						"stylers": [
								{
									"color": "#4797e0"
								}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "geometry",
						"stylers": [
								{
									"color": "#209ee1"
								},
								{
									"lightness": 49
								}
						]
					},
					{
						"featureType": "transit.line",
						"elementType": "geometry.fill",
						"stylers": [
								{
									"color": "#83befc"
								}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry.stroke",
						"stylers": [
								{
									"color": "#3ea3ff"
								}
						]
					},
					{
						"featureType": "administrative",
						"elementType": "geometry.stroke",
						"stylers": [
								{
									"saturation": 86
								},
								{
									"hue": "#0077ff"
								},
								{
									"weight": 0.8
								}
						]
					},
					{
						"elementType": "labels.icon",
						"stylers": [
								{
									"hue": "#0066ff"
								},
								{
									"weight": 1.9
								}
						]
					},
					{
						"featureType": "poi",
						"elementType": "geometry.fill",
						"stylers": [
								{
									"hue": "#0077ff"
								},
								{
									"saturation": -7
								},
								{
									"lightness": 24
								}
						]
					}
				],
		};
		var map = new google.maps.Map(document.getElementById('map'), options);
		var icon={
				url:'img/icons/map.svg',
				scaledSize: new google.maps.Size(24, 29),
				anchor: new google.maps.Point(12, 15)
		}
		for (var i = 0; i < locations.length; i++) {
				var marker = new google.maps.Marker({
					//===========
					icon: icon,
					position: locations[i][0],
					map: map,
				});
				markers.push(marker);
		}
	}
	if($("#map").length>0){
		map();
	}
	//=========================
	//MAP END
	//=========================


	//=========================
	//FORM INPUT
	//=========================
	//Очистка placeholder у элементов форм input при получении фокуса
	function clearPlaceholderInpit() {
		let inputAll = document.querySelectorAll('input');
		for (let i = 0; i < inputAll.length; i++) {
				inputAll[i].value = ''; //for mozilla
				inputAll[i].textHint = inputAll[i].placeholder;
				inputAll[i].borderStyle = inputAll[i].style.border;
				inputAll[i].onfocus = function() {
					inputAll[i].placeholder = '';
				}
				inputAll[i].onblur = function() {
					if (!inputAll[i].value) {
						inputAll[i].style.border = '2px solid red';
						inputAll[i].placeholder = inputAll[i].textHint;
					} else {
						inputAll[i].style.border = inputAll[i].borderStyle;
					}
				}
		}
	}
	clearPlaceholderInpit();
	//=========================
	//FORM INPUT END
	//=========================


});