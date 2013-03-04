define([
    //## Dependencies
    'backbone', 'JQ',
    // Collection & Model
    'users', 'user',
    // Views
    'userView', 'userForm', 'userShow' ],
    function( Backbone, $, Users, User, listItemView, form, show ) {

        // The view or (controller?) for a user-collection
        return Backbone.View.extend({

            resource: 'users',
            model: User,

            // Views
            listItemView: listItemView,
            showView: show,
            formView: form,

            initialize: function() {

                // Begin creating a collection and fetch stored user-models
                this.collection = new Users();
                this.collection.fetch();

                //Listen for index route
                Backbone.on( this.resource + ':index', this.index, this );

                //Listen for New route
                Backbone.on( this.resource + ':new', this.new, this );

                //Listen for New route, inject ID
                Backbone.on( this.resource + ':show', this.show, this );

                //Listen for Show route, inject ID
                Backbone.on( this.resource + ':edit', this.edit, this );

            },
            index: function() {
                this.$el.empty();
                // fetching all stored users
                this.collection.fetch();
                // Render all users in the collection
                this.collection.each( this.addOne, this );

                $( '.main' ).html( this.el );
            },

            // Set the form for creating an object
            new: function() {
                this.$el.empty();
                var view = new this.formView({ model: new this.model(), collection: this.collection });
                this.$el.html( view.render().el );

                $( '.main' ).html( this.el );
            },

            // Show one single object
            show: function( id ) {
                var fetchedModel = this.collection.get( id );
                var view = new this.showView({ model: fetchedModel, collection: this.collection });
                this.$el.html( view.render().el );
            },

            // Set the form for editing an object
            edit: function( id ) {
                console.log( 'edit', id );
                var fetchedModel = this.collection.get( id );
                var view = new this.formView({ model: fetchedModel, collection: this.collection });
                this.$el.html( view.render().el );

                $( '.main' ).html( this.el );
            },

            render: function() {
                this.$el.empty();
                this.collection.each( this.addOne, this );

                return this;
            },
            addOne: function(addedModel) {
                var view = new this.listItemView({ model: addedModel } );
                this.$el.append( view.render().el );
            },
            removeOne: function() {
                this.index();
            }
        });
    });