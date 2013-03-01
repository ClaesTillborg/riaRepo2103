define([ 'backbone', 'router', 'users', 'usersView' ], function( Backbone, router, Users, UsersView ) {

    //instantiate a new UsersCollection and inject the collection of users into its UsersView
    new UsersView({ collection: new Users() });

    /**
     * Starts Backbone router
     */
    new router;
});