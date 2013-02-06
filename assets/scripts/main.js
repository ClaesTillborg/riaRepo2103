/* global require */

// Create paths for all the modules of tha application
require.config({
    paths: {
        /* ================================ libs ================================ */

        // Here are the paths to the libraries in the application
        'jquery': 'libs/jquery/jquery.min',
        'underscore': 'libs/underscore-amd/underscore-min',
        'backbone': 'libs/backbone-amd/backbone-min',
        'foundation': 'libs/foundation',

        /* ================================ config ================================ */

        // Some config files
        'routes': 'config/routes',
        'namespace': 'config/namespace',

        /* ================================ helpers ================================ */

        // Some helpers on the way
        'templateHelper': 'app/helpers/template',
        'eventHelper': 'app/helpers/event',

        /* ================================ templates ================================ */

        // All the templates in the application
        //'userTemplate': 'text!app/templates/users/user',

        /* ================================ resources ================================ */

        // Every models resorce-routes
        'userRoutes': 'app/resources/user',

        /* ================================ models ================================ */

        // All the models in the application
        'user': 'app/models/user',
        'slideShow': 'app/models/slideShow',
        'slide': 'app/models/slide',
        'element': 'app/models/element',
        'elementType': 'app/models/elementType',

        /* ================================ collections ================================ */

        // All the collections in the application
        'users': 'app/collections/users',
        'slideShows': 'app/collections/slideShows',
        'slides': 'app/collections/slides',
        'elements': 'app/collections/elements',
        'elementTypes': 'app/collections/elementTypes',

        /* ================================ views ================================ */

        // All the views in the application separated in model-folders

        // users
        'userView': 'app/views/users/user',
        'usersView': 'app/views/users/users',

        // slideShows
        'slideShowView': 'app/views/slideShows/slideShow',
        'slideShowsView': 'app/views/slideShows/slideShows',

        // slides
        'slideView': 'app/views/slides/slide',
        'slidesView': 'app/views/slides/slides',

        // elements
        'elementView': 'app/views/elements/element',
        'elementsView': 'app/views/elements/elements',

        // elementTypes
        'elementTypeView': 'app/views/elementTypes/elementType',
        'elementsTypeView': 'app/views/elementTypes/elementTypes'
    }
});
require(['setup']);