// -----------------------------------------------------------------------
//	kanseihin.js
//
//					Nov/04/2015
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").html
		("*** zip_list *** kanseihin *** Nov/04/2015 ***");

	var url_in="list_file.py";

	var folder_in = "kanseihin_area";

	var data = {"folder_in": folder_in};

	jQuery.getJSON (url_in,data,function (data_aa)
		{
		list_file_proc (folder_in,data_aa);
		});

	jQuery("#outarea_hh").html
		("*** kanseihin *** end *** Nov/04/2015 ***");

});

// -----------------------------------------------------------------------
