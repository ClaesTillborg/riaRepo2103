define([ 'backbone', 'router', 'usersView', 'slideShowsView' ], function( Backbone, Router, Users, slideShows ) {

    // Create my collectionViews
    new Users();
    new slideShows();

    /**
     * Starts Backbone router
     */
    new Router;

    // Tells Backbone to start watching for has change events
    Backbone.history.start();

});