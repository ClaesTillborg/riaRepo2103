// ## Require configuration
require.config({

    // Create paths for all the documents in the application
    paths: {
        // ###/libs
        // Here are the paths to the libraries in the application
        JQ: 'libs/jquery/jquery.min',
        pureUnderscore: 'libs/underscore/underscore',
        underscore: 'libs/underscore/underscore.module',
        pureBackbone: 'libs/backbone/backbone',
        backbone: 'libs/backbone/backbone.module',
        localStorage: 'libs/backbone/backbone.localStorage-min',
        localStorageAsync: 'libs/backbone/backbone.localStorage.async',
        relational: 'libs/backbone/backbone.relational',
        foundation: 'libs/foundation/javascripts/foundation.min',
        foundationApp: 'libs/foundation/javascripts/app',
        text: 'libs/requirejs/text',

        // ###/config
        // Some config files
        router: 'config/router',
        db: 'config/db',

        // ###/helpers
        // Some helpers on the way
        templateHelper: 'app/helpers/template',

        // ###/models
        // All the models in the application
        user: 'app/models/user',
        slideShow: 'app/models/slideShow',
        slide: 'app/models/slide',
        element: 'app/models/element',
        elementType: 'app/models/elementType',

        // ###/collections
        // All the collections in the application
        users: 'app/collections/users',
        slideShows: 'app/collections/slideShows',
        slides: 'app/collections/slides',
        elements: 'app/collections/elements',
        elementTypes: 'app/collections/elementTypes',

        // Define the collection module to have access to all collections.
        // Add new collections to the module.
        collections: 'app/collections/collections.module',

        // ###/views
        // All the views in the application separated in model-folders.
        // Every view has a matching template.

        // ####/users
        userView: 'app/views/users/user',
        usersView: 'app/views/users/users',
        userForm: 'app/views/users/form',
        userShow: 'app/views/users/show',

        // ####/slideShows
        slideShowView: 'app/views/slideShows/slideShow',
        slideShowsView: 'app/views/slideShows/slideShows',
        slideShowForm: 'app/views/slideShows/form',
        slideShowShow: 'app/views/slideShows/show',

        // ####/slides
        slideView: 'app/views/slides/slide',
        slidesView: 'app/views/slides/slides',

        // ####/elements
        elementView: 'app/views/elements/element',
        elementsView: 'app/views/elements/elements',

        // ####/elementTypes
        elementTypeView: 'app/views/elementTypes/elementType',
        elementsTypeView: 'app/views/elementTypes/elementTypes',

        // Define the models module to have access to all models.
        // Add new models to the module.
        views: 'app/views/shared/views.module',

        // ###/templates
        // All the templates in the application.
        // Every template belongs to the view with the same name.

        // ####User templates
        userTemplate: 'app/templates/users/user.html',
        userFormTemplate: 'app/templates/users/form.html',
        userShowTemplate: 'app/templates/users/show.html',

        // ####SlideShow templates
        slideShowTemplate: 'app/templates/slideShows/slideShow.html',
        slideShowFormTemplate: 'app/templates/users/form.html',
        slideShowShowTemplate: 'app/templates/users/show.html'
    },
    shim: {
        pureUnderscore: { exports: '_' },
        JQ: {
            // remove the global jQuery
            init: function() {
                return this.jQuery.noConflict(true);
            }
        },
        pureBackbone: { deps: [ 'JQ', 'underscore' ] },
        localStorage: { deps: [ 'pureBackbone', 'underscore' ] },
        localStorageAsync: { deps: [ 'pureBackbone', 'underscore' ] },
        relational: { deps: [ 'pureBackbone', 'underscore' ] },
        foundation: { deps: [ 'JQ' ] },
        foundationApp: { deps: [ 'foundation', 'JQ' ] }
    }
});
require( [ 'db', 'app', 'foundation', 'foundationApp' ] );
