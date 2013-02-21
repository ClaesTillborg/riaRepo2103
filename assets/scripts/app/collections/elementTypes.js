define([ 'backbone', 'elementType' ], function( Backbone, ElementType ) {

    // The collection of ElementType-models is backed by *localStorage*
    return Backbone.Collection.extend({
        model: ElementType,
        localStorage: new Backbone.LocalStorage( 'ElementTypes' )
    });
});