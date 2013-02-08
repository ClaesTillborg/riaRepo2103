define(['backbone', 'slide'],function(Backbone, Slide) {
    return Backbone.Collection.extend({
        model: Slide
    });
});