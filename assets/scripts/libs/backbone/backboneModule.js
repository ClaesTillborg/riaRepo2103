// Combine backbone and its pluggins into a module
define(['pureBackbone','localStorage','relational'],function(BB) {
    console.log(".....serving up backbone");
    Backbone.noConflict(); // remove the global backbone left by purebackbone, just to be nice :)
    return BB; //.noConflict();
});