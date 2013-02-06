define(['backbone', 'templateHelper', 'userView' ], function(Backbone, Template, UserView) {

    App.Views.Users = Backbone.View.extend({

        tagName: 'ul',

        className: 'users-class-name',
        id: 'users-id',

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

    return App.Views.Users;
});