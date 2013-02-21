define([ 'backbone', 'underscore' ,'models', 'collections', 'userView', 'usersView', 'newUserView' ], function( Backbone, _, Models, Collections, userView, usersView, newUserView ) {

    // Root resources with including functions
    return Backbone.Router.extend({

        initialize: function() {

            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();

        },
        resources: _.map(Collections, function(resource) {
            console.log(resource);
            return resource.resourceName;
        }),
        routes: {
            '': 'root',
            'download/*filename': 'download',
            'search/:query': 'search',
            ':resource': 'index',
            ':resource/new': 'new',
            ':resource/create': 'create',
            ':resource/:id': 'show',
            ':resource/:id/edit': 'edit',
            ':resource/:id/update': 'update',
            ':resource/:id/destroy': 'destroy',
            '*other': 'default'
        },

        // Root function
        root: function() {

            //new newUserView({ model: user });
        },

        // Download function
        download: function(filename) {
            console.log('Download ' + filename);
        },

        // Search function
        search: function(query) {
            console.log('search for: ' + query);
        },

        //GET /:collection
        index: function( resource ) {
            if ( this.exists( resource ) ){
                var myCollection = this.fetchCollection(resource);

                Backbone.trigger(resource);
            } else {
                this.default(resource);
            }

        },

        // GET :resource/new
        // Set the form for creating an object
        new: function(resource) {
            if ( this.exists(resource) ){
                console.log('trigger: '+ resource + 'New');
                Backbone.trigger(resource + 'New');
            } else {
                this.default(resource);
            }
        },

        // POST :resource/create
        // Receives data from #new and creates object
        create: function(resource) {
            if ( this.exists(resource) ){
                console.log('trigger: '+ resource + 'Create');
            } else {
                this.default(resource);
            }
        },

        // GET :resource/:id
        // Show one single object
        show: function(resource, id) {
            if ( this.exists(resource) ) {
                console.log('Show '+ resource +' object with id: ' + id);
            } else {
                this.default(resource);
            }
        },

        // GET :resource/:id/edit
        // Set the form for editing an object
        edit: function(resource, id) {
            if ( this.exists(resource) ){
                console.log('Edit '+ resource +' object with id: ' + id);
            } else {
                this.default(resource);
            }
        },

        // PUT :resource/:id/update
        // Receives the date from #edit and updates the object
        update: function(resource, id) {
            if ( this.exists(resource) ){
                console.log('Update '+ resource +' with id: ' + id);
            } else {
                this.default(resource);
            }
        },

        // DELETE :resource/:id/destroy
        // Removes an object
        destroy: function(resource, id) {
            if ( this.exists(resource) ){
                console.log('Remove '+ resource +' with id: ' + id);
            } else {
                this.default(resource);
            }

        },
        // Default function
        default: function(other) {
            alert('404: "' + other + '" does not match any of the routes in this application.');
        },
        exists: function(resource) {
            return _.contains( this.resources, resource )
        },
        fetchCollection: function(resource) {

            // Fetch the correct collection
            var result = _.find(Collections, function(value) {
                return value.resourceName === resource;
            });

            // returns the collection if found
            return result && result.collection
        }
    });
});