define(['namespace', 'backbone'], function(App, Backbone) {
    App.Models.User = Backbone.Model.extend({

        defaults: {
            name: 'Anonymous',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        urlRoots: '/users',
        validate: function(attrs) {

        }
    });

    return App.Models.User;
});