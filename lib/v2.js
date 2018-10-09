exports.main = function(){

  return (req, res) => {
    console.log('received ==>')
    console.log(JSON.stringify(req.body, null, 4))
    const response = getResponse(req.body)
    console.log('response ==> ')
    console.log(JSON.stringify(response, null, 4))
    
    res.send(response)
  }
}

const req = {};

function getResponse(request) {
  if (request.header.namespace==='Rokid.Discovery') {
    return req.discoverResponse
  } else {
    return req.controlResponse
  }
}

req.discoverResponse = {
  "header": {
    "messageId": "5f8a426e-01e4-4cc9-8b79-65f8bd0fd8a4",
    "namespace": "Rokid",
    "name": "DiscoveryResponse",
    "payloadVersion": "v1"
  },
  "payload": {
    "endpoints": [
      {
        "endpointId": "device:an-id-unique-to-user",
        "displayName": "大米台灯",
        "modelId": "GROSS-REIS-LAMPE-ALPHA",
        "displayType": "light",
        "recommendRoomName": "厨房",
        "additionalInfo": {
          "key1": "value"
        },
        "capabilities": [
          {
            "interface": "Switch",
            "supportedOperations": [ "On", "Off" ],
            "proactivelyReported": true,
            "retrievable": true
          },
          {
            "interface": "Color",
            "supportedOperations": [ "Set" ],
            "proactivelyReported": true,
            "retrievable": true
          }
        ],
        "states": [
          {
            "interface": "Switch",
            "value": "On",
            "timeOfSample": "2018-03-15T18:00:00.000Z"
          },
          {
            "interface": "Color",
            "value": 12345,
            "timeOfSample": "2018-03-15T18:00:00.000Z"
          }
        ]
      }
    ],
  }
};

req.controlResponse = {
  "header": {
    "messageId": "5f8a426e-01e4-4cc9-8b79-65f8bd0fd8a4",
    "namespace": "Rokid",
    "name": "Response",
    "payloadVersion": "v1"
  },
  "endpoint": {
    "endpointId": "device:an-id-unique-to-user",
    "states": [
      {
        "interface": "Color",
        "value": 12344
      }
    ]
  },
  "payload": {}
}