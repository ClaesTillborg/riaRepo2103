define(['backbone', 'templateHelper', 'userView' ], function(Backbone, Template, UserView) {

    // The view for a user-collections
    return Backbone.View.extend({

        className: 'users',

        initialize: function() {
            this.collection.on( 'add', this.addOne, this );
        },

        render: function() {
            this.$el.empty();
            this.collection.each( this.addOne, this );
            return this;
        },

        addOne: function(model) {

            var view = new UserView({ model: model } );
            this.$el.append ( view.render().el );
        }
    });
});