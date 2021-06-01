$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
	  $(".inline").show();
	  $(".inline1").hide();
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );

	  $(".inline").hide();
	  $(".inline1").show();
	  
	}
		
});