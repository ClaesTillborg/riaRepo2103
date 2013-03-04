define([ 'backbone', 'JQ', 'templateHelper', 'text!userFormTemplate' ], function( Backbone, $, Template, formTemplate ) {
    // UserView
    return Backbone.View.extend({

        template: Template(formTemplate),

        className: 'user-form-wrapper',
        initialize: function() {
            $('#user-form').on('submit', this.preventSubmit, this);
        },
        events: {
            'click .submit': 'alter'
        },
        render: function() {

            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        },
        preventSubmit: function( e ) {
            console.log('preventing default');
            e.preventDefault();
            this.alter();
        },
        alter: function() {

            // Attempts to
            this.model.set('name', this.$( '#user-name' ).val() );
            console.log( this.model.toJSON() );
            // If model has an id then update else create
            this.model.id ? this.collection.update( this.model ) : this.collection.add( this.model );

            var loggedIn = this.collection.get( this.model );
            localStorage.setItem( "loggedIn", loggedIn.get("id") );
        }
    });
});