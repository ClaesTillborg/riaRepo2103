define(['backbone', 'elementType'],function(Backbone, ElementType) {
    App.Collections.ElementTypes = Backbone.Collection.extend({
        model: ElementType
    });

    return App.Collections.ElementTypes;
});