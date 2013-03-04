define(['backbone', 'templateHelper', 'text!slideShowShowTemplate'], function(Backbone, Template, showTemplate) {
    // UserView
    return Backbone.View.extend({

        template: Template(showTemplate),

        className: 'slide-show-info-wrapper',

        events: {
            'click #delete': 'deleteModel'
        },
        deleteModel: function() {
            this.model.destroy();
        },
        render: function() {
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }
    });
});