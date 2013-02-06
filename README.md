RIA-projektet 2013 - JavaScript med backbone, underscore, jquery och require
===========

## Slide-verktyg i javascript ##

Appen skapad som en del av kursen [RIA-utveckling med JavaScript, LNU Vintern/Våren 2013](https://coursepress.lnu.se/kurs/ria-utveckling-med-javascript/) är ett simpelt verktyg för att skapa egna slideshows.

## Applikationens Relationer ##

>Användaren kan skapa ett eller flera slideshows

>Varje slideshow har en eller flera slides

>Varje slide kommer ha ett eller flera element(ex titel, subtitel, lista, text)

>Varje element kommer ha en speciel typ(ex. h1, h2, li, p)

## Applikationens objekt/modeller ##

```javascript

// User Model
User = {
	id: '1',								// Int
	name: 'John Doe',								// String
	slideShows: [
	// Collection of SlideShow objects								// Related object collection
	],
	createdAt: new Date(),								// DateTime as Timestamp
	updatedAt: new Date()								// DateTime as Timestamp	
}

/* ========================================================================= */

// SlideShow Model
SlideShow = {
	id: '1',								// Int
	owner: { // User object },								// Related object
	name: 'My awesome slideshow',								// String
	slides: [
	//Collection of slide objects								// Related object collection
	],
	createdAt: new Date(),								// DateTime as Timestamp
	updatedAt: new Date()								// DateTime as Timestamp
}

/* ========================================================================= */

// Slide Model
Slide = {
	id: '1',								// Int
	slideshow: { // SlideShow object },								// Related object
	elements: [
	// Collection of Element objects								// Related object collection
	],
	createdAt: new Date(),								// DateTime as Timestamp
	updatedAt: new Date()								// DateTime as Timestamp														
}

/* ========================================================================= */

// Element Model
Element = {
	id: '1',								// Int
	slide:  { // Slide object },								// Related object
	type: { // ElementType object },								// Related object
	name: 'title',								// String
	content: 'This is a title',								// String
}

/* ========================================================================= */

// ElementType Model
ElementType = {
	id: '1',								// Int
	type: 'h1'								// String
}


```