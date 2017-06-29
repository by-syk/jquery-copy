/*!
 * jQuery Copy Plugin v1.0.0
 * https://github.com/by-syk/jquery-copy
 *
 * Copyright 2017 By_syk
 */

(function($) {
  $.extend({
    copy: function(obj) {
      if (!obj) {
        return false;
      }
      var text;
      if (typeof(obj) == 'string') {
        text = obj;
      } else {
        text = obj.text();
        if (!text) { // Maybe <textarea />
          text = obj.val();
        }
      }
      //var $temp = $('<input>'); // Line feed is not supported
      var $temp = $('<textarea>');
      $('body').append($temp);
      $temp.val(text).select();
      var res = document.execCommand('copy');
      $temp.remove();
      return res;
    }
  });
} (jQuery));