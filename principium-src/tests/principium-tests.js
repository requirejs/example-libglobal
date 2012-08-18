/*global require, define, test, expect, strictEqual */

require.config({
    baseUrl: '../lib',
    paths: {
        //Path relative to baseUrl
        'principium': '../principium'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define(['principium', 'jquery'], function (principium, $) {
    'use strict';

    test('version test', function () {
        expect(1);
        strictEqual(principium.version,
            '0.0.1, jQuery version is: ' + $.fn.jquery,
            'Version concatenated');
    });

    test('conversion test', function () {
        expect(1);
        strictEqual(principium.convert('Harry & Sally'),
            'Harry &amp; Sally',
            'Ampersand converted');
    });

});
