define(['backbone', 'templateHelper', 'text!userTemplate'], function(Backbone, Template, UserTemplate) {

    // User list-item view
    return Backbone.View.extend({

        template: Template(UserTemplate),

        className: 'user-wrapper',

        render: function() {
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }
    });
});
