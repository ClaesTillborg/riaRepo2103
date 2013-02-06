define(['namespace', 'backbone', 'underscore'], function(App, Backbone, _) {
    App.Helpers.vent = _.extend({}, Backbone.Events);

    return App.Helpers.vent;
});