// -----------------------------------------------------------------------
//	koho_kokai.js
//
//					Nov/21/2011
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").text ("*** start *** koho_kokai.js ***");

	var file_text = "koho_kokai.txt";

	jQuery.get (file_text,function (data_received)
		{
		jQuery("#contents").html (data_received);
		});

	jQuery("#outarea_hh").text ("*** end *** koho_kokai.js ***");
});

// -----------------------------------------------------------------------
