define(['backbone', 'usersResources', 'slideShowsResources'], function(Backbone, UsersResources, SlideShowsResources) {

    new UsersResources;
    new SlideShowsResources

    // Model resources with including functions

    App.Routes.Routes = Backbone.Router.extend({
        routes: {
            '': 'root',
            'download/*filename': 'download'
        },
        // Root function
        root: function() {
          console.log('this is the root');
        },

        // download function
        download: function(filename) {
            console.log(filename);
        }
    });
    return App.Routes.Routes;
});