$( function( ) {
    $( '.p-humburger' ).on( 'click', function() {
        $( this ).toggleClass( 'is-open' );
        $( '.p-gnav' ).toggleClass( 'is-open' );
        $( 'body' ).toggleClass( 'is-open' );
    });
});

$( function( ){
     $('.click').on('click',function(){
        $('.p-gnav').removeClass('is-open');
        $('body').removeClass('is-open')
        $('buttom').removeClass('is-open');
        $('buttom').click();
    });
});