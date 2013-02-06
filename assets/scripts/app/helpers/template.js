define([ 'backbone', 'underscore', 'jquery' ], function( Backbone, _, $) {
    App.Helpers.Template = function(id) {
        return _.template( $('#' + id).html() );
    };

    return App.Helpers.Template;
});