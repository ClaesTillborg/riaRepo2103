define(['backbone', 'slideShow'],function(Backbone, SlideShow) {
    return Backbone.Collection.extend({
        model: SlideShow
    });
});