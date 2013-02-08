define(['backbone'], function(Backbone) {

    return Backbone.Model.extend({

        defaults: {
            slideShow: {}, // SlideShow object
            elements: [], // Element Collection
            createdAt: new Date(),
            updatedAt: new Date()
        },
        validate: function(attrs) {
        }
    });
});
