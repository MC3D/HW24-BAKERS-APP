/* globals Application, Ember */

(function () {
  'use strict';

  Application.Router.map(function() {

      this.route('login', {path: '/'});
      this.route('newUser', {path: '/newUser'});


      // this.route('logout', {path: '/'});
      // this.route('newUser', {path: '/'});
      //
      // this.route('editUser', {path: '/'});
      // this.route('addRecipe', {path: '/'});
      // this.route('modifyRecipe', {path: '/'});
      //
      // this.route('settings');
      // this.route('pantry');

    });



    Application.LogInRoute = Ember.Route.extend({
      model: function() {
        return this.store.find('user');
      }
    });


})();
