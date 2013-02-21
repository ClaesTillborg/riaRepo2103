define([ 'backbone', 'slideShow' ], function( Backbone, SlideShow ) {

    // The collection of SlideShow-models is backed by *localStorage*
    return Backbone.Collection.extend({
        model: SlideShow,
        localStorage: new Backbone.LocalStorage( 'SlideShows' )
    });
});