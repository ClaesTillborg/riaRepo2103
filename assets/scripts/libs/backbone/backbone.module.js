// Combine the elements for the Backbone module
define( [ 'pureBackbone', 'localStorage', 'relational' ], function( Backbone ) {

    // remove the global Backbone
    return Backbone.noConflict();
});