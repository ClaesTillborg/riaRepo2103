define([ 'backbone', 'underscore' ], function( Backbone, _ ) {
    return function( templateName ) {
        return _.template( templateName );
    };
});