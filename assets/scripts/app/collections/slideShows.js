define(['namespace', 'backbone', 'slideShow'],function(App, Backbone, SlideShow) {
    App.Collections.SlideShows = Backbone.Collection.extend({
        model: SlideShow,
        url: '/slide-shows'
    });

    return App.Collections.SlideShows;
});