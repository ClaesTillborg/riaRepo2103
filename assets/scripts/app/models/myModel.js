define(['backbone'], function(Backbone) {

    App.Models.myModel = Backbone.Model.extend({

        defaults: {
            createdAt: new Date(),
            updatedAt: new Date()
        },
        urlRoots: 'myModels',
        method: function() {
            return "this is myModel's method! and it was created" + this.get("createdAt");
        },
        validate: function(attrs) {
            if( attrs.createdAt < (Date.now())) {
                return "The validation will set in if create date is before now!";
            }
        }
    });

    return App.Models.myModel;
});