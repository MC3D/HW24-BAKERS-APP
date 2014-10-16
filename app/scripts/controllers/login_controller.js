/* globals Application, Ember */

(function() {
  'use strict';

  Application.LoginController = Ember.ArrayController.extend({
    needs: ['application'],

    actions: {
      logIn: function() {
      this.transitionToRoute('recipes');
    },

      createNewUser: function() {
        var users = this.store.createRecord('user', {
          username: this.get('setUser'),
          email: this.get('setEmail'),
          password: this.get('setPassword'),
        });
        users.save();
        this.transitionToRoute('recipes');
      }




    }





  });

})();
