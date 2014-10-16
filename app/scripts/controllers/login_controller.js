/* globals Application, Ember */

(function() {
  'use strict';

  Application.LoginController = Ember.ArrayController.extend({
    needs: ['application'],
    currentUser:'',

    actions: {

      logIn: function() {
        this.set('controllers.application.currentUser', {
          currentUser: this.get('currentUser')
        });

        this.transitionToRoute('addRecipe');
      },

      createNewUser: function() {
        var users = this.store.createRecord('user', {
          username: this.get('setUser'),
          email: this.get('setEmail'),
          password: this.get('setPassword'),
        });
        users.save();

        this.set('controllers.application.currentUser', {
          currentUser: this.get('setEmail')
        });

        this.transitionToRoute('addRecipe');
      }




    }





  });

})();
