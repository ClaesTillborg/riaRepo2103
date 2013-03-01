define(['backbone', 'JQ', 'views' ], function(Backbone, $ ) {

    // The mainView
    return Backbone.View.extend({

        className: 'users',

        initialize: function() {
            this.collection.fetch();
            this.collection.on( 'add', this.addOne, this );
            Backbone.on( 'users', this.renderCollection, this );

        },

        render: function() {
            this.$el.empty();
            this.collection.each( this.addOne, this );
            return this;
        },
        renderCollection: function() {
            $('.main').html(this.render().el);
        },
        addOne: function(model) {
            var view = new UserView({ model: model } );
            this.$el.append ( view.render().el );
        }
    });
});