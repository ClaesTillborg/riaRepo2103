define([ 'backbone', 'JQ', 'templateHelper', 'text!slideShowFormTemplate' ], function( Backbone, $, Template, formTemplate ) {
    // UserView
    return Backbone.View.extend({

        template: Template(formTemplate),

        className: 'slideShow-form-wrapper',

        events: {
            'submit': 'alter'
        },
        render: function() {

            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        },
        alter: function( e ) {
            e.preventDefault();

            // Attempts to
            this.model.set('name', this.$( '#slide-show-name' ).val() );

            // If model has an id then update else create
            this.model.id ? this.collection.update( this.model ) : this.collection.add( this.model );
        }
    });
});