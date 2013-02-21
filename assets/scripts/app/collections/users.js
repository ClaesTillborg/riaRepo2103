define([ 'backbone', 'user' ], function( Backbone, User ) {

    // The collection of User-models is backed by *localStorage*
    return Backbone.Collection.extend({
        model: User,
        localStorage: new Backbone.LocalStorage( 'Users' )
    });
});