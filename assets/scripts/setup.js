define([
    'backbone',
    'underscore',
    'jquery',
    'router',
    'user',
    'users',
    'usersView',
    'slideShow',
    'slideShows',
    'slideShowsView'
], function(
    Backbone, _, $, router, User, Users, UsersView, SlideShow, SlideShows, SlideShowsView) {

    /**
     * Starts Backbone router
     */
    new router;
    Backbone.history.start();

    var user = new User({ name: 'Claes Tillborg' });
    var slideShow = new SlideShow({ owner: user })

    var slideShows = new SlideShows([
        slideShow
    ]);

    // Creates a collection of models
    var users = new Users([
        new User(),
        new User({ name: 'John Doe' }),
        new User({ name: 'Jane Doe' }),
        new User({ name: 'Claes Tillborg' }),
        new User({ name: 'Tord Bob' })
    ]);

    // Create a usersView
    var usersView = new UsersView({ collection: users });
    var slideShowsView = new SlideShowsView({ collection: slideShows });

    //$('.main').append(usersView.render().el);
    //$('.main').append(slideShowsView.render().el);


});