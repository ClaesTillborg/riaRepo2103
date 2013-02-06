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
        // models
        'user': MODELSPATH + 'user',
        'slideShow': MODELSPATH + 'slideShow',
        'slide': MODELSPATH + 'slide',
        'element': MODELSPATH + 'element',
        'elementType': MODELSPATH + 'elementType',

        // collections
        'users': COLLECTIONSPATH + 'users',
        'slideShows': COLLECTIONSPATH + 'slideShows',
        'slides': COLLECTIONSPATH + 'slides',
        'elements': COLLECTIONSPATH + 'elements',
        'elementTypes': COLLECTIONSPATH + 'elementTypes',

    // views
        // user
        'userView': VIEWSPATH + 'user/single',
        'usersView': VIEWSPATH + 'user/collection',

        // slideShow
        'slideShowView': VIEWSPATH + 'slideShow/single',
        'slideShowsView': VIEWSPATH + 'slideShow/collection',

        // slide
        'slideView': VIEWSPATH + 'slide/single',
        'slidesView': VIEWSPATH + 'slide/collection',

        'elementView': VIEWSPATH + 'element/single',
        'elementsView': VIEWSPATH + 'element/collection',


        // helpers
        'templateHelper': HELPERSPATH + 'template',
        'eventHelper': HELPERSPATH + 'event',

        // templates
        'myTemplate': TEMPLATESPATH + 'myTemplate',

        // resources
        'myModelRoutes': RESOURCEPATH + 'myModelRoutes'
    }
});
require(['setup']);
