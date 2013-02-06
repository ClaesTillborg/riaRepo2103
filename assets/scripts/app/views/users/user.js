define(['backbone', 'templateHelper'], function(Backbone, Template) {
    // UserView
    App.Views.User = Backbone.View.extend({

        tagName: 'li',

        template: Template('user'),

        className: 'user-class-name',

        events: {
            'click': 'clickEvent'
        },
        initialize: function() {
            this.model.on( 'destroy', this.remove, this );
        },

        clickEvent: function() {
            alert('This is a click event!');
        },
        render: function() {
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }
    });

    return App.Views.User;
});
