define(['backbone', 'eventHelper', 'templateHelper', 'user', 'text!newUserTemplate'], function(Backbone, vent, Template, User, newUserTemplate) {
    // UserView
    return Backbone.View.extend({

        template: Template(newUserTemplate),

        className: 'user-form-wrapper',

        initialize: function() {
            vent.on( 'usersNew', this.renderForm, this );
        },
        events: {
           'submit #new-user-form': 'createUser'
        },
        render: function() {
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        },

        renderForm: function() {
            console.log("rendering form");
            $('.main').html(this.render().el);
        },

        createUser: function(e) {
            var userName = $(e.currentTarget).find('input[type=text]').val();
            var user = new User({ name: userName });
            console.log(user.toJSON());

        }
    });
});