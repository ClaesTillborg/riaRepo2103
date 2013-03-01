define(['backbone', 'templateHelper', 'text!userShowTemplate'], function(Backbone, Template, showTemplate) {
    // UserView
    return Backbone.View.extend({

        template: Template(showTemplate),

        className: 'user-info-wrapper',

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
