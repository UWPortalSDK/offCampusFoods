function getAccessToken() {
    $http.post("/Develop/PostProxy", {
        values: {
            grant_type: "client_credentials",
            client_id: "Vs2lV4a-azmKUvZ1JyGcpw",
            client_secret: "71uaDsGUxFP7zn7ksGqO86w5e9FX31tQEZaY7uVsMUVXjDP7JPcUfL6CJyLE137I"
        }
        url: "https://api.yelp.com/oauth2/token"
    }).success(data => privateDataService.Put('API Key', data.access_token);
}

function getData() {
    // This is Mock Data
    // TODO: implement data access
    var data = {
        "total": 8228,
        "businesses": [{
                "rating": 4,
                "price": "$",
                "phone": "+14152520800",
                "id": "four-barrel-coffee-san-francisco",
                "is_closed": false,
                "categories": [{
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                }],
                "review_count": 1738,
                "name": "Four Barrel Coffee",
                "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
                "coordinates": {
                    "latitude": 37.7670169511878,
                    "longitude": -122.42184275
                },
                "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
                "location": {
                    "city": "San Francisco",
                    "country": "US",
                    "address2": "",
                    "address3": "",
                    "state": "CA",
                    "address1": "375 Valencia St",
                    "zip_code": "94103"
                },
                "distance": 1604.23,
                "transactions": ["pickup", "delivery"]
            },
            // ...
        ],
        "region": {
            "center": {
                "latitude": 37.767413217936834,
                "longitude": -122.42820739746094
            }
        }
    };
    return JSON.stringify(data);
}