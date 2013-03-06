define([
    //## Dependencies
    'backbone', 'JQ',
    // Collection & Model
    'slideShows', 'slideShow',
    // Related Collections
    'slides',
    // Views
    'slideShowView', 'slideShowForm', 'slideShowShow'  ], function( Backbone, $, Slides, SlideShows, SlideShow, listItemView, form, show  ) {

    // The view for a SlideShow-collection
    return Backbone.View.extend({

        className: 'slideshows',

        resource: 'slideshows',
        model: SlideShow,

        // Views
        listItemView: listItemView,
        showView: show,
        formView: form,

        initialize: function() {

            // Begin creating a collection
            this.collection = new SlideShows();

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

            console.log(this.collection);
            // Render all users in the collection
            this.collection.each( this.addOne, this );

            $( '.main' ).html( this.el );
        },

        // Set the form for creating an object
        new: function() {
            this.$el.empty();
            console.log( 'new' );
            var model = new this.model({  });
            var view = new this.formView({ model: model, collection: this.collection });
            this.$el.html( view.render().el );

            $( '.main' ).html( this.el );
        },

        // Show one single object
        show: function( id ) {
            console.log( 'show', id );
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