module.exports = {
    languages: [
        {
            "createdAt": "2017-09-28 14:34:20.0",
            "updatedAt": "2017-09-28 14:34:20.0",
            "value": "Ukrainian",
            "id": "cj84k95il3yj301708hzb9m0z"
        },
        {
            "createdAt": "2017-09-28 14:34:45.0",
            "updatedAt": "2017-09-28 14:34:45.0",
            "value": "English",
            "id": "cj84k9oxk3wzb0178nkgp530d"
        }
    ],
    countries: [
        {
            "id": "cj84k5y023uym0138fu076me1",
            "city_id": ["cj84fzsbp2tpq01741891u9bn", "cj84jqoaf3cc70181rdn4t3iv"],
            "region_id": ["cj84fx90938a701779sv72cnl", "cj84jqi7w35wt0125p9xkjtgp"],
            "venue_id": ["cj84lcehg5ovh0181ov9ygygr"],
            "name": "Ukraine",
            "updatedAt": "2017-09-28 14:31:50.0",
            "createdAt": "2017-09-28 14:31:50.0",
        }
    ],
    cities: [
        {
            "id": "cj84fzsbp2tpq01741891u9bn",
            "country_id": "cj84k5y023uym0138fu076me1",
            "venue_id": ["cj84lcehg5ovh0181ov9ygygr"],
            "name": "Dnipro",
            "updatedAt": "2017-09-28 12:35:05.0",
            "createdAt": "2017-09-28 12:35:05.0",
        },
        {
            "id": "cj84jqoaf3cc70181rdn4t3iv",
            "country_id": ["cj84k5y023uym0138fu076me1"],
            "venue_id": [],
            "name": "Kiev",
            "updatedAt": "2017-09-28 14:19:58.0",
            "createdAt": "2017-09-28 14:19:58.0",
        }
    ],
    regions: [
        {
            "id": "cj84fx90938a701779sv72cnl",
            "venue_id": ["cj84lcehg5ovh0181ov9ygygr"],
            "name": "DniproRegion",
            "updatedAt": "2017-09-28 12:34:24.0",
            "country_id": ["cj84k5y023uym0138fu076me1"],
            "createdAt": "2017-09-28 12:33:06.0",
        },
        {
            "id": "cj84jqi7w35wt0125p9xkjtgp",
            "country_id": ["cj84k5y023uym0138fu076me1"],
            "venue_id": [],
            "name": "KievRegion",
            "updatedAt": "2017-09-28 14:19:50.0",
            "createdAt": "2017-09-28 14:19:50.0",
        }],
    venues: [{
        "id": "cj84lcehg5ovh0181ov9ygygr",
        "country_id": "cj84k5y023uym0138fu076me1",
        "city_id": "cj84fzsbp2tpq01741891u9bn",
        "region_id": "cj84fx90938a701779sv72cnl",
        "shortCode": 'Some trash',
        "name": "someName",
        "updatedAt": "2017-09-28 15:04:51.0",
        "system": "WTF",
        "latitude": 1,
        "url": "https://google.com",
        "venueCode": "Cool Code",
        "description": "Cool venue",
        "adress": "SomeAdress",
        "postalCode": "777",
        "createdAt": "2017-09-28 15:04:51.0",
        "longtitude": 2,
        "publishEventsOnWeb": 'blah-blah'
    }, {
        "id": "cj84ld1235hxg01786y6xa3po",
        "country_id": "cj84k5y023uym0138fu076me1",
        "city_id": "cj84fzsbp2tpq01741891u9bn",
        "region_id": "cj84fx90938a701779sv72cnl",
        "shortCode": 'Some trash',
        "name": "someName 2",
        "updatedAt": "2017-09-28 15:05:21.0",
        "system": "WTF",
        "latitude": 111,
        "url": "https://google.com",
        "venueCode": "Cool Code 2",
        "description": "Not so cool venue",
        "adress": "SomeAdress 2",
        "postalCode": "777",
        "createdAt": "2017-09-28 15:05:21.0",
        "longtitude": 222,
        "publishEventsOnWeb": 'blah-blah'
    }]
}
