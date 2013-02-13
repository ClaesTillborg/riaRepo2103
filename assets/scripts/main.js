/* global require */

// Create paths for all the modules of tha application
require.config({
    shim: {
      'libs/foundation/javascripts/app': {
          deps: 'libs/foundation/javascripts/jquery'
      }
    },
    paths: {
        /* ================================ libs ================================ */

        // Here are the paths to the libraries in the application
        jquery: 'libs/jquery/jquery.min',
        underscore: 'libs/underscore-amd/underscore-min',
        backbone: 'libs/backbone-amd/backbone-min',
        localStorage: 'libs/backbone.localStorage/backbone.localStorage-min',
        foundation: 'libs/foundation/javascripts/foundation.min',
        foundationApp: 'libs/foundation/javascripts/app',
        text: 'libs/requirejs/text',

        /* ================================ config ================================ */

        // Some config files
        router: 'config/router',

        /* ================================ helpers ================================ */

        // Some helpers on the way
        templateHelper: 'app/helpers/template',
        eventHelper: 'app/helpers/event',

        /* ================================ models ================================ */

        // All the models in the application
        user: 'app/models/user',
        slideShow: 'app/models/slideShow',
        slide: 'app/models/slide',
        element: 'app/models/element',
        elementType: 'app/models/elementType',

        /* ================================ collections ================================ */

        // All the collections in the application
        users: 'app/collections/users',
        slideShows: 'app/collections/slideShows',
        slides: 'app/collections/slides',
        elements: 'app/collections/elements',
        elementTypes: 'app/collections/elementTypes',

        /* ================================ views ================================ */

        // All the views in the application separated in model-folders

        // Users
        userView: 'app/views/users/user',
        usersView: 'app/views/users/users',

        // SlideShows
        slideShowView: 'app/views/slideShows/slideShow',
        slideShowsView: 'app/views/slideShows/slideShows',

        // Slides
        slideView: 'app/views/slides/slide',
        slidesView: 'app/views/slides/slides',

        // Elements
        elementView: 'app/views/elements/element',
        elementsView: 'app/views/elements/elements',

        // ElementTypes
        elementTypeView: 'app/views/elementTypes/elementType',
        elementsTypeView: 'app/views/elementTypes/elementTypes',

        /* ================================ templates ================================ */

        // All the templates in the application

        // User templates
        userTemplate: 'app/templates/users/user.html',

        // SlideShow templates
        slideShowTemplate: 'app/templates/slideShows/slideShow.html'

    }
});
require(['setup', 'foundation' ]);
