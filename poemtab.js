var xhrObject = new XMLHttpRequest();
// to prevent CodePen cross-origin issues, API URL is prefaced with "https://crossorigin.me/"
var poetryAPI = 'https://thundercomb-poetry-db-v1.p.mashape.com/author/Emily%20Dickinson';

xhrObject.onreadystatechange = function() {
  if (xhrObject.readyState === 4) {
    if (xhrObject.status === 200 || xhrObject.status === 304) {

      // Success! Do stuff with data.
      displayData( xhrObject.responseText );

    }
  }
};

xhrObject.open(
  "GET",
  poetryAPI,
  true
);
xhrObject.setRequestHeader('X-Mashape-Key', 'fnpr5Bgl73mshrTuWk1iLFIbCj7tp12SavjjsnvR7K6tApciwb');
xhrObject.send();

function displayData( apiResponse ) {
  var data = JSON.parse( apiResponse );
  var displayDiv = document.getElementById( 'poetry-rules' );

  if ( data.length ) {
    data.forEach( function( entry ) {
      var pElement = document.createElement( 'p' );
      pElement.innerText = `Author: ${ entry.author }
                            Title: ${ entry.title }
                            ${ entry.lines }`;
      displayDiv.appendChild( pElement );
    } );


  }
  console.log(data);
}
