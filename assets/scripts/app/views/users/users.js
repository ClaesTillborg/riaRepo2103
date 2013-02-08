define(['backbone', 'eventHelper', 'templateHelper', 'userView' ], function(Backbone, vent, Template, UserView) {

    // The view for a user-collections
    return Backbone.View.extend({

        className: 'users',

        initialize: function() {
            vent.on( 'users', this.renderCollection, this );
            this.collection.on( 'add', this.addOne, this );
        },

        render: function() {
            this.$el.empty();
            this.collection.each( this.addOne, this );
            return this;
        },
        renderCollection: function() {
            console.log('This is a user collection');
        },
        addOne: function(model) {

            var view = new UserView({ model: model } );
            this.$el.append ( view.render().el );
        }

    });
});