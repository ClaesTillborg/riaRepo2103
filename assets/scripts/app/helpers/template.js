define([ 'backbone', '_' ], function( Backbone, _ ) {
    return function( templateName ) {
        return _.template( templateName );
    };
});