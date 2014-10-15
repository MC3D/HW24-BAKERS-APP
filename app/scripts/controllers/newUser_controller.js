/* globals Application, Ember */

(function() {
  'use strict';

  Application.NewUserController = Ember.ArrayController.extend({
    needs: ['application'],

    actions: {
      createNewUser: function() {
        var users = this.store.createRecord('user', {
          username: this.get('newUser'),
          password: this.get('setPassword'),
        });
        users.save();
        this.set('newUser', '');
        this.set('setPassword','');
      }
    }
  });

})();
