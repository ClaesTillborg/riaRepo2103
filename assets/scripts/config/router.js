define(['backbone', 'eventHelper', 'users', 'userView', 'usersView', 'newUserView'], function(Backbone, vent, Users, userView, usersView, newUserView) {

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
            ':model': 'index',
            ':model/new': 'new',
            ':model/create': 'create',
            ':model/:id': 'show',
            ':model/:id/edit': 'edit',
            ':model/:id/update': 'update',
            ':model/:id/destroy': 'destroy',
            '*other': 'default'
        },

        // Root function
        root: function() {

            new newUserView({ collection: new Users() });
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
        index: function(model) {
            if ( this.exists(model) ){
                vent.trigger(model);
            } else {
                this.default(model);
            }

        },

        // GET :model/new
        // Set the form for creating an object
        new: function(model) {
            if ( this.exists(model) ){
                console.log('trigger: '+ model + 'New');
                vent.trigger(model + 'New');
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
        }
    });
});