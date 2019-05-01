/**
 * frontend_localisation tabs init
 */
(function ($, undefined) {
	'use strict';

	$(document).ready(function () {

		// wherever this is called
		$(this).find('.field-multilingual').symphonyMultilingualTabs();

		// for duplicator. Useful for fields that use Multilingual Tabs on /blueprints/sections/edit
		$(this).on('constructshow.duplicator', function () {
			$(this).find('.field-multilingual').symphonyMultilingualTabs();
		});

	});

}(this.jQuery));
