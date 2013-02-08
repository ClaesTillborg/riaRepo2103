define(['backbone', 'usersResources', 'slideShowsResources', 'slidesResources', 'elementsResources'], function(Backbone, UsersResources, SlideShowsResources, SlidesResources, ElementsResources) {

    // Model resources with including functions
    new UsersResources;
    new SlideShowsResources
    new SlidesResources
    new ElementsResources

    // Root resources with including functions
    return Backbone.Router.extend({
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
            console.log('Download ' + filename);
        }
    });
});