define([ 'backbone' ], function() {
    return function( templateName ) {
        return _.template( templateName );
    };
});