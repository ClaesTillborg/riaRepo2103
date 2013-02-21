define([ 'backbone', 'JQ','templateHelper', 'slideShowView' ], function( Backbone, $, Template, SlideShowView ) {

    // The view for a SlideShow-collection
    return Backbone.View.extend({

        className: 'slideshows',

        initialize: function() {
            Backbone.on( 'slideshows', this.renderCollection, this );
            this.collection.on( 'add', this.addOne, this );
        },

        render: function() {
            this.$el.empty();
            this.collection.each( this.addOne, this );
            return this;
        },
        renderCollection: function() {
            $('.main').html(this.render().el);
        },
        addOne: function( model ) {

            var view = new SlideShowView({ model: model } );
            this.$el.append ( view.render().el );
        }
    });
});