/* globals Ember, Application, DS, Firebase */

(function () {
  'use strict';

  window.Application = Ember.Application.create({
    LOG_TRANSITIONS: true
  });

  Application.ref = new Firebase('https://mybatchmaker.firebaseio.com/');

  Application.ApplicationAdapter = DS.FirebaseAdapter.extend({
    firebase: Application.ref
  });

})();
