define([ 'backbone', 'templateHelper' ], function( Backbone, Template) {


    App.Views.myView = Backbone.View.extend({

        tagName: 'li',

        template: Template('myTemplate'),

        className: 'myViewClassName',
        id: 'myViewId',

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

    return App.Views.myView;
});
