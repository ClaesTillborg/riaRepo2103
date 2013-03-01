define([ 'backbone', 'JQ', 'templateHelper', 'text!userFormTemplate' ], function( Backbone, $, Template, formTemplate ) {
    // UserView
    return Backbone.View.extend({

        template: Template(formTemplate),

        className: 'user-form-wrapper',

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
            this.model.set('name', this.$( '#user-name' ).val() );

            // If model has an id then update else create
            this.model.id ? this.collection.update( this.model ) : this.collection.add( this.model );
        }
    });
});