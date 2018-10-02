define([
  "jquery"
], 
function($) {
  "use strict";

  // Here your custom code...
	console.log("load event detected!");
	if($( document ).width() <=767) {
		$(".page-header .panel.wrapper .header.panel .block-search").remove();
		//$(".page-header .panel.wrapper .header.panel .minicart-wrapper").remove();		//Move minicart-wrapper		// var cart = $(".minicart-wrapper");		// $(".minicart-wrapper").detach();		// cart.insertAfter(".header.content a.logo");		// if($(".minicart-wrapper"))			// console.log("yahoo");		// else			// console.log("yahoo");
	}
	$( document ).resize(function() {
		if($( document ).width() <=767)
			$(".page-header .panel.wrapper .header.panel .block-search").remove();
		console.log("Window resized");
	});
});