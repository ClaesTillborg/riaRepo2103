/* global require */

// path constants
var COLLECTIONSPATH = 'app/collections/';
var HELPERSPATH = 'app/helpers/';
var MODELSPATH = 'app/models/';
var VIEWSPATH = 'app/views/';
var TEMPLATESPATH = 'app/templates/';
var RESOURCEPATH = 'app/resources/';
var CONFIGPATH = 'config/';

// Create paths for all the modules of tha application
require.config({
    paths: {
    // libs
        'jquery': 'libs/jquery/jquery.min',
        'underscore': 'libs/underscore-amd/underscore-min',
        'backbone': 'libs/backbone-amd/backbone-min',
        'foundation': 'libs/foundation',

    // config
        'routes': CONFIGPATH + 'routes',

    // app
        // collections
        'myCollection': COLLECTIONSPATH + 'myCollection',

        // helpers
        'templateHelper': HELPERSPATH + 'template',
        'eventHelper': HELPERSPATH + 'event',

        // models
        'myModel': MODELSPATH + 'myModel',

        // views
        'myView': VIEWSPATH + 'myView',
        'myCollectionView': VIEWSPATH + 'myCollectionView',

        // templates
        'myTemplate': TEMPLATESPATH + 'myTemplate',

        // resources
        'myModelRoutes': RESOURCEPATH + 'myModelRoutes'
    }
});
require(['setup']);
