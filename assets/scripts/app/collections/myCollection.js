define(['backbone', 'myModel'],function(Backbone, Model) {
    App.Collections.myCollection = Backbone.Collection.extend({
        model: Model,
        url: '/myModels'
    });

    return App.Collections.myCollection;
});