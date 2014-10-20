/* globals Application, Ember */

(function() {
  'use strict';

  Application.WelcomeController = Ember.ArrayController.extend({
    needs: ['application'],
    // name: this.get('controllers.application.currentUser.username'),

    actions: {

      logIn: function() {
        var self = this;
        Application.ref.authWithPassword({

          email: this.get('controllers.application.currentUser.email'),
          password: this.get('controllers.application.currentUser.password')
        }, function(error, authData) {
          if (error === null) {
            self.transitionToRoute('addRecipe');
             // user authenticated with Firebase
            console.log('User ID: ' + authData.uid + ', Provider: ' + authData.provider);
          } else {
            console.log('Error authenticating user:', error);
          }
        });
      }
    }
  });

})();
