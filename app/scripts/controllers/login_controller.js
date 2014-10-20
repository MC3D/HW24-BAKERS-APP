/* globals Application, Ember */

(function() {
  'use strict';

  Application.LoginController = Ember.ArrayController.extend({
    needs: ['application'],
    currentUser: '',

    actions: {

      logIn: function() {
        var self = this;
        // ask Jake about computed alias?

        Application.ref.authWithPassword({
          email: this.get('userEmail'),
          password: this.get('userPassword')
        }, function(error, authData) {
          if (error === null) {
            self.set('controllers.application.currentUser', {
              /// get username ///
              email: self.get('userEmail'),
            });
            self.transitionToRoute('addRecipe');
            // user authenticated with Firebase
            console.log('User ID: ' + authData.uid + ', Provider: ' + authData.provider);
          } else {
            console.log('Error authenticating user:', error);
          }
        });
      },

      createNewUser: function() {
        var self = this;

        Application.ref.createUser({
          email: this.get('setEmail'),
          password: this.get('setPassword')
        }, function(error) {
          if (error === null) {
            // set controllers.application.currentUser
            self.set('controllers.application.currentUser', {
              username: self.get('setUser'),
              email: self.get('setEmail'),
              password: self.get('setPassword')
            });
            // create user record
            var users = self.store.createRecord('user', {
              username: self.get('setUser'),
              email: self.get('setEmail')
            });
            users.save();
            console.log('User created successfully');
            self.transitionToRoute('welcome');
          } else {
            console.log('Error creating user:', error);
          }
        });
      }
    }
  });

})();
