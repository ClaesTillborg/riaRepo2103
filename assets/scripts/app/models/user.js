define(['backbone'], function(Backbone) {

    return Backbone.Model.extend({
        defaults: {
            name: 'Anonymous',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        validate: function(attrs) {

        }
    });
});