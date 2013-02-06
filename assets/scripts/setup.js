/* Namespace */
(function(){
    window.App = {
        Models: {},
        Views: {},
        Collections: {},
        Helpers: {},
        Routes: {},
        Templates: {}
    };

})();


define([
    'backbone',
    'underscore',
    'jquery',
    'resources',
    'myModel',
    'myCollection',
    'myCollectionView'
], function(
    Backbone, _, $, routes, TestModel, TestCollection, TestCollectionView) {

    /**
     * Starts Backbone router
     */
    new routes;
    Backbone.history.start();

    /**
     * Creates a collection of models
     *
     * @type {myCollection}
     */
    var collection = new TestCollection([
        { title: 'manual object1' },
        { title: 'manual object2' },
        new TestModel({ title: 'myModel1' }),
        new TestModel({ title: 'myModel2' }),
        new TestModel({ title: 'myModel3' }),
        new TestModel({ title: 'myModel4' })
    ]);

    /**
     * Creates the view for the collection
     *
     * @type {myCollectionView}
     */
    var view = new TestCollectionView({ collection: collection });
    $('.main').append(view.render().el);


});