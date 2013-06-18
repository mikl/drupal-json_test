/**
 * @file
 * Test JavaScript for the JSON test module.
 */

jQuery(function($) {
  "use strict";

  var placeholder = $('.json-test-placeholder');

  $.getJSON(Drupal.settings.basePath + 'json_test_data', function (response) {
    if (response && response.test) {
      placeholder.text(response.test);
    }
    else {
      placeholder.addClass('error');
      placeholder.text('Failed to load.');
    }
  });
});
