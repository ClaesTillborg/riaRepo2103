define(['backbone', 'elementType'],function(Backbone, ElementType) {
    return Backbone.Collection.extend({
        model: ElementType
    });
});