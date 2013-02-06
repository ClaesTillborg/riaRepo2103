define(['backbone', 'slide'],function(Backbone, Slide) {
    App.Collections.Slides = Backbone.Collection.extend({
        model: Slide,
        url: '/slides'
    });

    return App.Collections.Slides;
});