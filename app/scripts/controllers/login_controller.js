/* globals Application, Ember */

(function() {
  'use strict';

  Application.LoginController = Ember.ArrayController.extend({
    needs: ['application'],

    actions: {
      createNewUser: function() {
        this.transitionToRoute('newUser');
      },

      logIn: function() {
        // var user = {
        //   username: this.get('username'),
        //   password: this.get('password'),
        // };

        if (this.store.find('user','-JZKDNMZ-DDxAxscE84z')) {
          console.log('yes');
        } else {
          console.log('no');
        }

      }
    }
  });

})();
