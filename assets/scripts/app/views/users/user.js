define(['backbone', 'templateHelper', 'text!userTemplate'], function(Backbone, Template, UserTemplate) {
    // UserView
    return Backbone.View.extend({

        template: Template(UserTemplate),

        className: 'user',

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
});
