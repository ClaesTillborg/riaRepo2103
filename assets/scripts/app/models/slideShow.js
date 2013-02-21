define([ 'backbone' ], function( Backbone ) {

    return Backbone.Model.extend({

        defaults: {
            owner: {}, // User object
            name: 'Hello world slideshow!',
            slides: [], // Slide Collection
            createdAt: new Date(),
            updatedAt: new Date()
        },
        validate: function(attrs) {
        }
    });
});