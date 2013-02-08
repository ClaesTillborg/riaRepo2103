define(['backbone', 'templateHelper'], function(Backbone, Template) {

    // The view for a SlideShow-object
    return Backbone.View.extend({

        template: Template('slide-show'),

        className: 'slideshow',

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
