define([ 'backbone', 'collections', 'userView', 'usersView', 'newUserView' ], function( Backbone, Collections, userView, usersView, newUserView ) {

    // Resources
    var resources = [

    ]
    var USER = 'users';
    // Root resources with including functions
    return Backbone.Router.extend({

        initialize: function() {

            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();

        },

        routes: {
            '': 'root',
            'download/*filename': 'download',
            'search/:query': 'search',
            ':resources': 'index',
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

            new newUserView({ model: user });
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
        index: function(resources) {
            if ( this.exists(resources) ){
                var myCollection = this.fechCollection(resources);

                Backbone.trigger(resources);
            } else {
                this.default(resources);
            }

        },

        // GET :model/new
        // Set the form for creating an object
        new: function(model) {
            if ( this.exists(model) ){
                console.log('trigger: '+ model + 'New');
                Backbone.trigger(model + 'New');
            } else {
                this.default(model);
            }
        },

        // POST :model/create
        // Receives data from #new and creates object
        create: function(model) {
            if ( this.exists(model) ){
                console.log('trigger: '+ model + 'Create');
            } else {
                this.default(model);
            }
        },

        // GET :model/:id
        // Show one single object
        show: function(model, id) {
            if ( this.exists(model) ) {
                console.log('Show '+ model +' object with id: ' + id);
            } else {
                this.default(model);
            }
        },

        // GET :model/:id/edit
        // Set the form for editing an object
        edit: function(model, id) {
            if ( this.exists(model) ){
                console.log('Edit '+ model +' object with id: ' + id);
            } else {
                this.default(model);
            }
        },

        // PUT :model/:id/update
        // Receives the date from #edit and updates the object
        update: function(model, id) {
            if ( this.exists(model) ){
                console.log('Update '+ model +' with id: ' + id);
            } else {
                this.default(model);
            }
        },

        // DELETE :model/:id/destroy
        // Removes an object
        destroy: function(model, id) {
            if ( this.exists(model) ){
                console.log('Remove '+ model +' with id: ' + id);
            } else {
                this.default(model);
            }

        },
        // Default function
        default: function(other) {
            alert('404: "' + other + '" does not match any of the routes in this application.');
        },
        exists: function(model) {
            return !!(model === 'users' ||
                model === 'slideshows' ||
                model === 'slides' ||
                model === 'elements');
        },
        fetchCollection: function(collection) {
            if(collection === 'users') {
                return new Collections.Users();
            }
            else if(collection === 'slideshows') {
                return new Collections.SlideShows();
            }
            else if(collection === 'slides') {
                return new Collections.Slides();
            }
            else if(collection === 'elements') {
                return new Collections.Elements();
            }
            return null;
        }
    });
});