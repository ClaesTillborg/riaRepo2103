define([ 'backbone', 'underscore' ], function( Backbone, _ ) {

    // Root resources with including functions
    return Backbone.Router.extend({

        // Set all the resourcesthat will respond to the collections.
        resources: {
            Users: 'users',
            SlideShows: 'slideshows',
            exists: function( name ) {
                return _.contains( this, name );
            }
        },
        routes: {
            '': 'root',
            'download/*filename': 'download',
            'search/:query': 'search',
            ':resource': 'index',
            ':resource/new': 'new',
            ':resource/:id': 'show',
            ':resource/:id/edit': 'edit',
            '*other': 'default'
        },

        // Root function
        root: function() {
            this.navigate(this.resources.Users, true);
        },

        // Download function
        download: function( filename ) {
            console.log( 'Download ' + filename );
        },

        // Search function
        search: function( query ) {
            console.log( 'search for: ' + query );
        },

        //GET /:collection
        index: function( resource ) {
            this.triggerView( resource, 'index' )
        },

        // GET :resource/new
        // Set the form for creating an object
        new: function( resource ) {
            this.triggerView( resource, 'new' )
        },

        // GET :resource/:id
        // Show one single object
        show: function( resource, id ) {
            this.triggerView( resource, 'show', id )
        },

        // GET :resource/:id/edit
        // Set the form for editing an object
        edit: function( resource, id ) {
            this.triggerView( resource, 'edit', id )
        },

        // Default function
        default: function( other ) {
            alert('404: "' + other + '" does not match any of the routes in this application.');
        },
        triggerView: function( resourceName, view, id ) {

            // Check if resource exists and trigger the appropriate view
            if ( this.resources.exists( resourceName ) ) {

                // Include view in event if specified
                var event = view ? resourceName + ':' + view : resourceName;
                console.log(event);

                id ? Backbone.trigger(event, [id]) : Backbone.trigger(event);
            }
            else {
                this.default( resourceName );
            }
        }
    });
});