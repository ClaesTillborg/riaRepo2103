define(['backbone', 'element'],function(Backbone, Element) {
    return Backbone.Collection.extend({
        model: Element
    });
});