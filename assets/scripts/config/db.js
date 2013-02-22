define([ 'backbone', 'collections', 'models' ], function( Backbone, Collections, Models ) {

    // Stores the collections in LocalStorage
    var Users = new Collections.Users.collection();
    Users.fetch()
    console.log(Users.toJSON());
    console.log(Users.localStorage.save);

    var SlideShows = new Collections.SlideShows.collection
    SlideShows.fetch();
    SlideShows.add(new Models.SlideShow());
    console.log(SlideShows.toJSON());
    console.log(SlideShows.localStorage.save);


    Users.add( new Models.User( {slideShows: SlideShows } ) );
    console.log(Users.toJSON());
    Users.localStorage.save


});