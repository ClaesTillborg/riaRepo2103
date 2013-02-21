/* global require */


require.config({
    // Create paths for all the modules of tha application
    paths: {
        /* ================================ libs ================================ */

        // Here are the paths to the libraries in the application
        JQ: 'libs/jquery/jquery.min',
        pureUnderscore: 'libs/underscore/underscore-min',
        underscore: 'libs/underscore/underscore.module',
        pureBackbone: 'libs/backbone/backbone-min',
        backbone: 'libs/backbone/backbone.module',
        localStorage: 'libs/backbone/backbone.localStorage-min',
        localStorageAsync: 'libs/backbone/backbone.localStorage.async',
        relational: 'libs/backbone/backbone.relational',
        foundation: 'libs/foundation/javascripts/foundation.min',
        foundationApp: 'libs/foundation/javascripts/app',
        text: 'libs/requirejs/text',

        /* ================================ config ================================ */

        // Some config files
        router: 'config/router',
        seed: 'config/seed',

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

        // Add new collections to the module.
        // Define the collection module to have access to all collections
        collections: 'app/collections/collections.module',

        /* ================================ views ================================ */

        // All the views in the application separated in model-folders

        // Users
        userView: 'app/views/users/user',
        usersView: 'app/views/users/users',
        newUserView: 'app/views/users/new',

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
        newUserTemplate: 'app/templates/users/new.html',

        // SlideShow templates
        slideShowTemplate: 'app/templates/slideShows/slideShow.html'

    },
    shim: {
        JQ: {
            init: function() { return this.jQuery.noConflict(true); } // remove the global jQuery
        },
        pureBackbone: { deps: [ 'JQ', 'pureUnderscore' ] },
        localStorage: { deps: [ 'pureBackbone', 'pureUnderscore' ] },
        localStorageAsync: { deps: [ 'pureBackbone', 'pureUnderscore' ] },
        relational: { deps: [ 'pureBackbone', 'pureUnderscore'] },
        foundation: { deps: [ 'JQ' ] },
        foundationApp: { deps: [ 'foundation', 'JQ' ] }
    }
});
require( [ 'app' ] );
