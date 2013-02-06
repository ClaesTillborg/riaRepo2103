define(['backbone', 'slideShow'],function(Backbone, SlideShow) {
    App.Collections.SlideShows = Backbone.Collection.extend({
        model: SlideShow,
        url: '/slide-shows'
    });

    return App.Collections.SlideShows;
});