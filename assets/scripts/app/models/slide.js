define(['namespace', 'backbone', 'slideShow', 'elements'], function(App, Backbone, SlideShow, Elements) {

    App.Models.Slide = Backbone.Model.extend({

        defaults: {
            slideShow: new SlideShow, // SlideShow object
            elements: new Elements({ slide: this }), // Element Collection
            createdAt: new Date(),
            updatedAt: new Date()
        },
        urlRoots: '/slides',
        validate: function(attrs) {
        }
    });

    return App.Models.Slide;
});
