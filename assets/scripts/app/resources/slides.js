define(['backbone'], function(Backbone) {

    // Model resources with including functions

    App.Resourses.Slides = Backbone.Router.extend({
        routes: {
            'slides': 'index',
            'slides/new': 'new',
            'slides/create': 'create',
            'slides/:id': 'show',
            'slides/:id/edit': 'edit',
            'slides/:id/update': 'update',
            'slides/:id/destroy': 'destroy'
        },
        /**
         * GET /:collection
         *
         * @return object-list
         */
        index: function() {

            console.log('This is a slides collection');
        },

        /**
         * GET #new
         *
         * Set the form for creating an object
         */
        new: function() {
            console.log('new slide');
        },

        /**
         * POST #create
         *
         * Receives data from #new and creates object
         */
        create: function() {
            console.log('create slide');
        },

        /**
         * GET #show/:id
         *
         * Show one single object
         *
         * @param id
         */
        show: function(id) {
            console.log('Show slide with id: ' + id);
        },

        /**
         * GET #edit
         *
         * Set the form for editing an object
         *
         * @param id
         */
        edit: function(id) {
            console.log('Edit slide with id: ' + id);
        },

        /**
         * PUT #update
         *
         * Receives the date from #edit and updates the object
         *
         * @param id
         */
        update: function(id) {
            console.log('Update slide with id: ' + id);
        },

        /**
         * DELETE #destroy
         *
         * Removes an object
         *
         * @param id
         */
        destroy: function(id) {
            console.log('Remove slide with id: ' + id);
        }
    });
    return App.Resourses.Slides;
});