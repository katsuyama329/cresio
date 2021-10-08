$( function( ) {
    //ハンバーガーメニューボタンを押した際の動作
    $( '.js-humburger' ).on( 'click', function() {
        $( this ).toggleClass( 'is-open' );
        $( '.p-gnav' ).toggleClass( 'is-open' );
        $( 'body' ).toggleClass( 'is-open' );
    });

    //リンクを押した際の動作
    $('.js-click').on('click',function(){
       $('.p-gnav').removeClass('is-open');
       $('body').removeClass('is-open')
       $('.js-humburger').removeClass('is-open');
    });
});

