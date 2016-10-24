var map = (function () {
  var createMap = function(){

    var mapBlock = document.getElementById('interactiveMap');

    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 16,

      // disable scroll
      scrollwheel:  false,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(51.752607, 55.094532), // Orenburg

      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      styles: [
        {"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},
          {"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},
          {"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry",
          "stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels",
          "stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry",
          "stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all",
          "stylers":[{"color":"#61dac9"}]}]
    };

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapBlock, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(51.752607, 55.094532),
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      title: 'Hi, i live here!',
      icon: '/assets/img/map_marker.png'
    });

    marker.addListener('click', toggleBounce);
  };

  var toggleBounce = function () {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  };

  var init = function () {
    return createMap;
  };

  return {
    init : init
  };
})();