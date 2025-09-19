var APP_DATA = {
  "scenes": [
    {
      "id": "0-head-counter",
      "name": "HEAD COUNTER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.6497995061271169,
        "pitch": 0.03896061275195528,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.5021870769159342,
          "pitch": 0.006610823219503459,
          "rotation": 0,
          "target": "1-display-counter"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.0981492780507587,
          "pitch": -0.11683608771762088,
          "title": "MIRROR",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-display-counter",
      "name": "DISPLAY COUNTER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4133353725029547,
          "pitch": 0.03232517587478512,
          "rotation": 0,
          "target": "0-head-counter"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5441283507677479,
          "pitch": -0.17590740089304724,
          "title": "Title",
          "text": "DISPLAY&nbsp;"
        },
        {
          "yaw": -1.2889129953748562,
          "pitch": -0.1156682881918698,
          "title": "CROCKERY UNIT",
          "text": "Text"
        },
        {
          "yaw": -1.88842826989673,
          "pitch": 0.047561721009349966,
          "title": "DOOR",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
