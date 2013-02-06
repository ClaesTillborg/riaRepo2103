define(['backbone', 'user'], function(Backbone, User) {
    App.Collections.Users = Backbone.Collection.extend({
        model: User
    });
    return App.Collections.Users;
});