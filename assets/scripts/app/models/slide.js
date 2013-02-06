define(['backbone'], function(Backbone) {

    App.Models.Slide = Backbone.Model.extend({

        defaults: {
            slideShow: {}, // SlideShow object
            elements: [], // Element Collection
            createdAt: new Date(),
            updatedAt: new Date()
        },
        urlRoots: '/slides',
        validate: function(attrs) {
        }
    });

    return App.Models.Slide;
});
