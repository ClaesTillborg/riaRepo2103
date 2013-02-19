define([
    'backbone',
    'user',
    'users',
    'slideShow',
    'slideShows'
], function(
    Backbone, User, Users, SlideShow, SlideShows) {

    return {

        initialize: function() {
            
            // Creates a collection of users to save in LocalStorage
            var users = new Users([
                new User({ name: 'Claes Tillborg' }),
                new User({ name: 'John Doe' }),
                new User({ name: 'Jane Doe' }),
                new User({ name: 'Tord Bob' })
            ]);

            Backbone.save(users);

        }
    }


});