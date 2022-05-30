 (function ($) {
 	Drupal.behaviors.recipient_management = {
 		attach: function (context, settings) {
 			$('#edit-recipient-details').bind('click', function(e) {
 				$('.recipient-form-data, .recipient-form-submit').show();
 				var $details = $('.recipient-form-value, #edit-recipient-details');
 				$details.hide();
 				$details.closest('.recipient-details-field').find('label').addClass('recipient-details-label')
 			});
 		}
 	}
 })(jQuery);
