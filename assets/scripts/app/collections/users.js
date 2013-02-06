define(['namespace', 'backbone', 'user'],function(App, Backbone, User) {
    App.Collections.Users = Backbone.Collection.extend({
        model: User,
        url: '/users'
    });

    return App.Collections.User;
});