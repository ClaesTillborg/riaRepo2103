define(['namespace', 'backbone', 'underscore', 'jquery' ], function(App, Backbone, _, $) {
    App.Helpers.Template = function(id) {
        return _.template( $('#' + id).html() );
    };

    return App.Helpers.Template;
});