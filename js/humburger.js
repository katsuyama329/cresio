$( function( ) {
    $( ".p-humburger" ).on( "click", function() {
        $( this ).toggleClass( "is-open" );
        $( ".p-gnav" ).toggleClass( "is-open" );
        $( "body" ).toggleClass( "is-open" );
    });
});