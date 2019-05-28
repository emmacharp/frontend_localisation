/**
 * frontend_localisation tabs init
 */
(function ($, undefined) {
	'use strict';

	$(document).ready(function () {

		// wherever this is called
		var multi = $(this).find('.field-multilingual').symphonyMultilingualTabs();

		// for duplicator. Useful for fields that use Multilingual Tabs on /blueprints/sections/edit
		$(this).on('constructshow.duplicator', function () {
			$(this).find('.field-multilingual').symphonyMultilingualTabs();
		});

		if (!!multi.length) {
			var ctn = window.Symphony.Elements.contents.find('#contents-actions');
			var btns = window.Symphony.Elements.contents.find('.field ul.tabs').first().clone();
			ctn.prepend(btns);
			btns.show();
		}

	});

}(this.jQuery));
