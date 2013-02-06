define(['namespace', 'backbone', 'elementType'],function(App, Backbone, ElementType) {
    App.Collections.ElementTypes = Backbone.Collection.extend({
        model: ElementType
    });

    return App.Collections.ElementTypes;
});