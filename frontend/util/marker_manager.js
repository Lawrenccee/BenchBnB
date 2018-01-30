export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    console.log('update benches');
    

    benches.forEach((bench) => {
      if (!this.markers[bench.id]) {
        this.createMarkerFromBench(bench);
      }
    });
  }

  createMarkerFromBench(bench) {
    this.markers[bench.id] = new google.maps.Marker({
        position: { lat: bench.lat, lng: bench.lng },
        title: bench.description
    });

    this.markers[bench.id].setMap(this.map);
  }
}