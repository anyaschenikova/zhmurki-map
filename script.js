mapboxgl.accessToken = 'pk.eyJ1IjoiYW55YXNjaGVuIiwiYSI6ImNsM3BzMmptNTA1ZTMzam1zeXFnY3Q4engifQ.qoaw4SeOc84bbkaaOw3jMQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [43.99176175713546, 56.31561071772626]
        },
        properties: {
          title: 'Мак на ул. Горького, 2',
          description: 'videos/mak.mp4'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [44.03249989821175, 56.3229706507981]
        },
        properties: {
          title: 'Трамвайная остановка пл. Сенная',
          description: 'videos/automat.mp4'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [43.9937623497856, 56.32794503031651]
        },
        properties: {
          title: 'ул. Ильинская, 10',
          description: 'videos/fedorovskogo_1.mp4'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [43.98751104891274, 56.32643718093391]
        },
        properties: {
          title: 'Смотровая Площадка "Стрелка"',
          description: 'videos/fedorovskogo_2.mp4'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [43.9815081994644, 56.311809705171676]
        },
        properties: {
          title: 'ул. Максима Горького, 37',
          description: 'videos/gorkyu_37.mp4'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [43.98902162585523, 56.31930694048204]
        },
        properties: {
          title: 'ул. Ильинская',
          description: 'videos/ilinka.mp4'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [43.972802859821236, 56.328508252714016]
        },
        properties: {
          title: 'Канавинский мост',
          description: 'videos/kan_most.mp4'
        }
      },      
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [43.974172, 56.322055]
        },
        properties: {
          title: 'Черниговская ул., 11-9',
          description: 'videos/metromost.mp4'
        }
      },

      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [44.00148467073656, 56.325412865125486]
        },
        properties: {
          title: 'Мост на пл. Минина, Зеленский сьезд',
          description: 'videos/minina.mp4'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [43.98844047499401, 56.329584820187996]
        },
        properties: {
          title: 'Нижневолжская набережная',
          description: 'videos/nizjne-volzjskaya.mp4'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [44.01948445061372, 56.32528604128914]
        },
        properties: {
          title: 'Большая Печерская ул., 21',
          description: 'videos/pecherskaya_21.mp4'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [44.02399900081977, 56.323606217192896]
        },
        properties: {
          title: 'Провиантская ул., 8',
          description: 'videos/proviantskaya_8.mp4'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [43.98629576077544, 56.32796125977217]
        },
        properties: {
          title: 'ул. Рождественская',
          description: 'videos/rozjdestvenskaya.mp4'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [44.01271353794706, 56.32961829250658]
        },
        properties: {
          title: 'Верхневолжская набережная, 3',
          description: 'videos/verhne-vol.mp4'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [44.004403309880814, 56.31853805368133]
        },
        properties: {
          title: 'Стадион ВОДНИК',
          description: 'videos/vodnik.mp4'
        }
      }
    ]
  };

    // add markers to map
    for (const feature of geojson.features) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';
    
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);

         new mapboxgl.Marker(el)
  .setLngLat(feature.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(
        `<h3>${feature.properties.title}</h3><video controls><source src="${feature.properties.description}" type="video/mp4"></video>`
      )
  )
  .addTo(map);
    }

   
}