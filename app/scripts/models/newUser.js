/*globals Application, DS */

(function () {
  'use strict';

  Application.User = DS.Model.extend({
  username: DS.attr('string'),
  password: DS.attr('string')
});

})();