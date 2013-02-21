define([ 'backbone', 'element' ], function( Backbone, Element ) {

    // The collection of Element-models is backed by *localStorage*
    return Backbone.Collection.extend({
        model: Element,
        localStorage: new Backbone.LocalStorage( 'Elements' )
    });
});