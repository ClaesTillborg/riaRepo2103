define([ 'backbone', 'slide' ], function( Backbone, Slide ) {

    // The collection of Slide-models is backed by *localStorage*
    return Backbone.Collection.extend({
        model: Slide,
        localStorage: new Backbone.LocalStorage( 'Slides' )
    });
});