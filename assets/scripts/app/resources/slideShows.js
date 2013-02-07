define(['backbone'], function(Backbone) {

    // Model resources with including functions

    App.Resourses.SlideShows = Backbone.Router.extend({
        routes: {
            'slideshows': 'index',
            'slideshows/new': 'new',
            'slideshows/create': 'create',
            'slideshows/:id': 'show',
            'slideshows/:id/edit': 'edit',
            'slideshows/:id/update': 'update',
            'slideshows/:id/destroy': 'destroy'
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

            console.log('This is a slideShow collection');
        },

        /**
         * GET #new
         *
         * Set the form for creating an object
         */
        new: function() {
            console.log('new slideShow');
        },

        /**
         * POST #create
         *
         * Receives data from #new and creates object
         */
        create: function() {
            console.log('create slideShow');
        },

        /**
         * GET #show/:id
         *
         * Show one single object
         *
         * @param id
         */
        show: function(id) {
            console.log('Show slideShow with id: ' + id);
        },

        /**
         * GET #edit
         *
         * Set the form for editing an object
         *
         * @param id
         */
        edit: function(id) {
            console.log('Edit slideShow with id: ' + id);
        },

        /**
         * PUT #update
         *
         * Receives the date from #edit and updates the object
         *
         * @param id
         */
        update: function(id) {
            console.log('Update slideShow with id: ' + id);
        },

        /**
         * DELETE #destroy
         *
         * Removes an object
         *
         * @param id
         */
        destroy: function(id) {
            console.log('Remove slideShow with id: ' + id);
        }
    });
    return App.Resourses.SlideShows;
});