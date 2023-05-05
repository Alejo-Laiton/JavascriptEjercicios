
function initMap() {
    // console.log("Inicializando mapa")
    const socorro = {
        lat: 6.467778,
        lng: -73.259722
    }

    const cali = {
        lat: 3.43722,
        lng: -76.5225
    }

    const volcan = {
        lat: 10.744472,
        lng: -75.241403
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: 4, lng:-72 }
    })

    marker1 = new google.maps.Marker({
        position: socorro,
        map,
        title: "Socorro, Santander"
    })

    marker2 = new google.maps.Marker({
        position: cali,
        map,
        title: "Cali, Valle del Cauca"
    })

    marker3 = new google.maps.Marker({
        position: volcan,
        map,
        title: "Volcán del Totumo"
    })
    
}

