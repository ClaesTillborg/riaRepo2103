define([ 'backbone', 'user' ], function( Backbone, User ) {

    // The collection of Users is backed by *localStorage* instead of a remote
    return Backbone.Collection.extend({
        model: User,
        localStorage: new Backbone.LocalStorage( 'Users' )
    });
});