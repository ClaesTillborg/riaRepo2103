define(['backbone', 'templateHelper', 'text!userTemplate'], function(Backbone, Template, UserTemplate) {
    // UserView
    return Backbone.View.extend({

        template: Template(UserTemplate),

        className: 'user-wrapper',

        events: {
            'click #delete': 'deleteUser'
        },
        deleteUser: function() {
            this.model.destroy();
        },
        render: function() {
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }
    });
});
