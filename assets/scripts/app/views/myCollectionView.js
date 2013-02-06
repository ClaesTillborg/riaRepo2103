define([ 'backbone', 'templateHelper', 'myView' ], function( Backbone, Template, myView) {


    App.Views.myCollectionView = Backbone.View.extend({

        tagName: 'ul',

        className: 'myCollectionViewClassName',
        id: 'myCollectionViewId',

        initialize: function() {
            this.collection.on( 'add', this.addOne, this );
        },

        render: function() {
            this.$el.empty();
            this.collection.each( this.addOne, this );
            return this;
        },

        addOne: function(model) {

            var view = new myView({ model: model } );
            this.$el.append ( view.render().el );
        }
    });

    return App.Views.myCollectionView;
});