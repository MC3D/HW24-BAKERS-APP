/* globals Ember, Application, DS, Firebase */

(function () {
  'use strict';

  window.Application = Ember.Application.create({
    LOG_TRANSITIONS: true
  });

  Application.ApplicationAdapter = DS.FirebaseAdapter.extend({
    firebase: new Firebase('https://mybatchmaker.firebaseio.com/')
  });

})();
