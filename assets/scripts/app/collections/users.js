define([ 'backbone', 'user' ], function( Backbone, User ) {

    // The collection of User-models is backed by *localStorage*
    return Backbone.Collection.extend({
        model: User,
        localStorage: new Backbone.LocalStorage( 'Users' ),

        initialize: function() {
            this.bind('add', this.save, this );
            this.bind('change', this.save, this );
        },
        save: function(model) {
            model.save();
        }
    });
});