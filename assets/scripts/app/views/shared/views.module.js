// Combine all views in one module
define([
    // UserViews
    'userView', 'usersView', 'newUserView',
    // SlideShowsViews
    'slideShowView', 'slideShowsView'
], function(
    userView, usersView, newUserView,
    SlideShowView, SlideShowsView
    ) {

    // Return an object with access to all the Backbone-views
    return {
        user: userView,
        users: usersView,
        newUser: newUserView,
        slideShow: SlideShowView,
        slideShows: SlideShowsView
    }
});