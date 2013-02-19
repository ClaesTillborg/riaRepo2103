define( [ 'pureBackbone', 'localStorage', 'relational' ], function( BackboneModule ) {
    Backbone.noConflict(); // remove the global Backbone
    return BackboneModule;
});