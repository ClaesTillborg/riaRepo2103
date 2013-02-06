define(['namespace', 'backbone', 'user', 'slides'], function(App, Backbone, User, Slides) {

    App.Models.SlideShow = Backbone.Model.extend({

        defaults: {
            owner: new User, // User object
            name: 'Hello world slideshow!',
            slides: Slides({ slideShow: this }) , // Slide Collection
            createdAt: new Date(),
            updatedAt: new Date()
        },
        urlRoots: 'slide-shows',
        validate: function(attrs) {
        }
    });

    return App.Models.SlideShow;
});