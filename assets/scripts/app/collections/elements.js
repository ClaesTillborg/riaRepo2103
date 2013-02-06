define(['namespace', 'backbone', 'element'],function(App, Backbone, Element) {
    App.Collections.Elements = Backbone.Collection.extend({
        model: Element,
        url: '/elements'
    });

    return App.Collections.Elements;
});