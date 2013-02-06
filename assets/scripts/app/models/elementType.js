define(['backbone'], function(Backbone) {

    App.Models.ElementType = Backbone.Model.extend({
        defaults: {
            type: 'p'
        }
    });

    return App.Models.ElementType;
});