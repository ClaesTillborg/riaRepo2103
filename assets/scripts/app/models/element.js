define(['backbone'], function(Backbone) {

    return Backbone.Model.extend({

        defaults: {
            slide: {}, // Slide object
            type: 'h1', // ElementType object
            content: 'Hello world!',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        validate: function(attrs) {
        }
    });
});