define( [ 'backbone' ], function( Backbone ) {

    return Backbone.Model.extend({
        defaults: {
            name: '',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        validate: function( attrs ) {
            if(attrs.name == '') {
                attrs.name = 'Anonymous';
            }
        }
    });
});