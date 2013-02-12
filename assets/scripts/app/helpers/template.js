define([ 'underscore' ], function( _ ) {
    return function( templateName ) {
        return _.template( templateName );
    };
});