define(['backbone', 'slide', 'elementType'], function(Backbone, Slide, ElementType) {

    App.Models.Element = Backbone.Model.extend({

        defaults: {
            slide: new Slide, // Slide object
            type: new ElementType({ type: 'h1' }), // ElementType object
            content: 'Hello world!',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        validate: function(attrs) {
        }
    });

    return App.Models.Element;
});