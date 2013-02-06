define([ 'backbone', 'underscore'], function( Backbone, _) {
    App.Helpers.vent = _.extend({}, Backbone.Events);

    return App.Helpers.vent;
});