define(['backbone'], function(Backbone) {

    // Model resources with including functions

    App.Resourses.Elements = Backbone.Router.extend({
        routes: {
            'elements': 'index',
            'elements/new': 'new',
            'elements/create': 'create',
            'elements/:id': 'show',
            'elements/:id/edit': 'edit',
            'elements/:id/update': 'update',
            'elements/:id/destroy': 'destroy'
        },
        /**
         * GET /:collection
         *
         * @return object-list
         */
        index: function() {

            console.log('This is a elements collection');
        },

        /**
         * GET #new
         *
         * Set the form for creating an object
         */
        new: function() {
            console.log('new element');
        },

        /**
         * POST #create
         *
         * Receives data from #new and creates object
         */
        create: function() {
            console.log('create element');
        },

        /**
         * GET #show/:id
         *
         * Show one single object
         *
         * @param id
         */
        show: function(id) {
            console.log('Show element with id: ' + id);
        },

        /**
         * GET #edit
         *
         * Set the form for editing an object
         *
         * @param id
         */
        edit: function(id) {
            console.log('Edit element with id: ' + id);
        },

        /**
         * PUT #update
         *
         * Receives the date from #edit and updates the object
         *
         * @param id
         */
        update: function(id) {
            console.log('Update element with id: ' + id);
        },

        /**
         * DELETE #destroy
         *
         * Removes an object
         *
         * @param id
         */
        destroy: function(id) {
            console.log('Remove element with id: ' + id);
        }
    });
    return App.Resourses.Elements;
});