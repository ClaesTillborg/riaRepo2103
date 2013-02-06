(function(){
    window.App = {
        Models: {},
        Views: {},
        Collections: {},
        Helpers: {},
        Routes: {},
        Templates: {}
    };

})();

define([
    'backbone',
    'underscore',
    'jquery',
    'routes',
    'user',
    'users',
    'usersView'
], function(
    Backbone, _, $, routes, User, Users, UsersView) {

    /**
     * Starts Backbone router
     */
    new routes;
    Backbone.history.start();

    
    // Creates a collection of models
    var users = new Users([
        new User(),
        new User({ name: 'John Doe' }),
        new User({ name: 'Jane Doe' }),
        new User({ name: 'Claes Tillborg' }),
        new User({ name: 'Tord Bob' })
    ]);

    // Create a usersView
    var view = new UsersView({ collection: users });

    $('.main').append(view.render().el);


});