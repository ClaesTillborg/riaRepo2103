define(['backbone'], function(Backbone) {

    // Model resources with including functions

    App.Resourses.User = Backbone.Router.extend({
        routes: {
            '': 'root',
            'users': 'index',
            'users/new': 'new',
            'users/create': 'create',
            'users/:id': 'show',
            'users/:id/edit': 'edit',
            'users/:id/update': 'update',
            'users/:id/destroy': 'destroy'
        },

        root: function() {
            console.log('this is the root');
        },
        /**
         * GET /:collection
         *
         * @return object-list
         */
        index: function() {

            console.log('This is a user collection');
        },

        /**
         * GET #new
         *
         * Set the form for creating an object
         */
        new: function() {
            console.log('new');
        },

        /**
         * POST #create
         *
         * Receives data from #new and creates object
         */
        create: function() {
            console.log('create');
        },

        /**
         * GET #show/:id
         *
         * Show one single object
         *
         * @param id
         */
        show: function(id) {
            console.log('Show user with id: ' + id);
        },

        /**
         * GET #edit
         *
         * Set the form for editing an object
         *
         * @param id
         */
        edit: function(id) {
            console.log('Edit user with id: ' + id);
        },

        /**
         * PUT #update
         *
         * Receives the date from #edit and updates the object
         *
         * @param id
         */
        update: function(id) {
            console.log('Update user with id: ' + id);
        },

        /**
         * DELETE #destroy
         *
         * Removes an object
         *
         * @param id
         */
        destroy: function(id) {
            console.log('Remove user with id: ' + id);
        }
    });
    return App.Resourses.User;
});