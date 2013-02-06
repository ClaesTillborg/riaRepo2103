define(['namespace', 'backbone', 'slide'],function(App, Backbone, Slide) {
    App.Collections.Slides = Backbone.Collection.extend({
        model: Slide,
        url: '/slides'
    });

    return App.Collections.Slides;
});