define(['backbone'], function(Backbone) {

    App.Models.SlideShow = Backbone.Model.extend({

        defaults: {
            owner: {}, // User object
            name: 'Hello world slideshow!',
            slides: [],// Slides({ slideShow: this }) , // Slide Collection
            createdAt: new Date(),
            updatedAt: new Date()
        },
        urlRoots: 'slide-shows',
        validate: function(attrs) {
        }
    });

    return App.Models.SlideShow;
});