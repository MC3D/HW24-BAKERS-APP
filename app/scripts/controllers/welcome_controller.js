/* globals Application, Ember */

(function() {
  'use strict';

  Application.WelcomeController = Ember.ArrayController.extend({
    needs: ['application'],
    currentUser: Ember.computed.alias('controllers.application.currentUser'),
    actions: {
      continue: function() {
        this.transitionToRoute('addRecipe');
      }
    }
  });


})();
