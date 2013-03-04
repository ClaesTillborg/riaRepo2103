define(['backbone', 'templateHelper', 'text!userShowTemplate'], function(Backbone, Template, showTemplate) {
    // UserView
    return Backbone.View.extend({

        template: Template(showTemplate),

        className: 'user-info-wrapper',

        events: {
            'click #delete-button': 'deleteModel',
            'click #loggin-button': 'loggIn'
        },
        deleteModel: function() {
            this.model.destroy();
        },
        loggIn: function(){
            localStorage.setItem( "loggedIn", this.model.get("id") );
        },
        render: function() {
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }
    });
});
