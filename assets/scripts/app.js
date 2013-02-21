define([
    'backbone',
    'JQ',
    'router',
    'user',
    'users',
    'newUserView',
    'usersView',
    'slideShow',
    'slideShows',
    'slideShowsView'
], function(
    Backbone, $, router, User, Users, newUserView, UsersView, SlideShow, SlideShows, SlideShowsView) {

    /**
     * Starts Backbone router
     */
    new router;

    var user = new User();
    var userForm = new newUserView({ model: user });

    $('.main').append(userForm.render().el);

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


    //$('.main').append(slideShowsView.render().el);


});