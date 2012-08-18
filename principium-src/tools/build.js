{
    "baseUrl": "../lib",
    "paths": {
        "principium": "../principium"
    },
    "include": ["../tools/almond", "principium"],
    "exclude": ["jquery", "underscore"],
    "out": "../dist/principium.js",
    "wrap": {
        "startFile": "wrap.start",
        "endFile": "wrap.end"
    }
}
