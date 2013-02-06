define(['backbone', 'templateHelper', 'slideShowView' ], function(Backbone, Template, SlideShowView) {

    App.Views.SlideShows = Backbone.View.extend({

        tagName: 'ul',

        className: 'slide-shows-class-name',
        id: 'slide-shows-id',

        initialize: function() {
            this.collection.on( 'add', this.addOne, this );
        },

        render: function() {
            this.$el.empty();
            this.collection.each( this.addOne, this );
            return this;
        },

        addOne: function(model) {

            var view = new SlideShowView({ model: model } );
            this.$el.append ( view.render().el );
        }
    });

    return App.Views.SlideShows;
});