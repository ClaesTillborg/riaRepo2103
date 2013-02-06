define([
    'backbone',
    'underscore',
    'jquery',
    'resources',
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

    /**
     * Creates a collection of models
     *
     * @type {myCollection}
     */
    var collection = new Users([
        new User(),
        new User({ name: 'Jane Doe' }),
        new User({ name: 'Claes Tillborg' }),
        new User({ name: 'Tord Bob' })
    ]);

    /**
     * Creates the view for the collection
     *
     * @type {myCollectionView}
     */
    var view = new TestCollectionView({ collection: collection });
    $('.main').append(view.render().el);


});