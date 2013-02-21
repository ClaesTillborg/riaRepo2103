define([ 'backbone' ], function( Backbone ) {

    return Backbone.RelationalModel.extend({
        defaults: {
            type: 'h1'
        }
    });
});