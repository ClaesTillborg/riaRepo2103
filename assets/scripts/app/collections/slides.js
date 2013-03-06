define([ 'backbone', 'slide' ], function( Backbone, Slide ) {

    // The collection of Slide-models is backed by *localStorage*
    return Backbone.Collection.extend({
        model: Slide,
        localStorage: new Backbone.LocalStorage( 'Slides' ),

        initialize: function() {
            this.bind('add', this.save, this );
            this.bind('change', this.save, this );
        },
        save: function(model) {
            model.save();
        }
    });
});