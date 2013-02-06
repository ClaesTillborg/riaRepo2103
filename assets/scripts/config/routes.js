define(['backbone'], function(Backbone) {

    /**
     * Model resources with including functions
     */
    App.Routes.Routes = Backbone.Router.extend({
        routes: {
            '': 'root',
            ':model': 'index',
            ':model/new': 'new',
            ':model/create': 'create',
            ':model/:id': 'show',
            ':model/:id/edit': 'edit',
            ':model/:id/update': 'update',
            ':model/:id/destroy': 'destroy',
            'download/*filename': 'download'
        },

        root: function() {
          console.log('this is the root');
        },
        /**
         * GET /:collection
         *
         * @return object-list
         */
        index: function(model) {

            console.log('This is a ' + model + ' collection');
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
         * @param modelName, id
         */
        show: function(modelName, id) {
            console.log('Show ' + modelName + ' with id: ' + id);
        },

        /**
         * GET #edit
         *
         * Set the form for editing an object
         *
         * @param modelName, id
         */
        edit: function(modelName, id) {
            console.log('Edit ' + modelName + ' with id: ' + id);
        },

        /**
         * PUT #update
         *
         * Receives the date from #edit and updates the object
         *
         * @param modelName, id
         */
        update: function(modelName, id) {
            console.log('Update ' + modelName + ' with id: ' + id);
        },

        /**
         * DELETE #destroy
         *
         * Removes an object
         *
         * @param modelName, id
         */
        destroy: function(modelName, id) {
            console.log('Rempve ' + modelName + ' with id: ' + id);
        },

        /**
         * GET #download/*filename
         *
         * Makes it easy to set a url for a downloadable file
         *
         * @param filename
         */
        download: function(filename) {
            console.log(filename);
        }
    });

    return App.Routes.Routes;
});