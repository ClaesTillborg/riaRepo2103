define(['backbone', 'templateHelper', 'text!slideShowTemplate'], function(Backbone, Template, SlideShowTemplate) {

    // The view for a SlideShow-object
    return Backbone.View.extend({

        template: Template(SlideShowTemplate),

        className: 'slideshow-wrapper',

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
