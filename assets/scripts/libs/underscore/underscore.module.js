define( [ 'pureUnderscore' ], function( _ ) {

    // remove the global _
    _.noConflict();
    console.log(_.noConflict());
    return _;
});