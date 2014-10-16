/* globals Application, Ember */

(function () {
  'use strict';

  Application.Router.map(function() {

      this.route('login', {path: '/'});
      this.route('recipes', {path:'/recipes'});
      this.route('addRecipe', {path:'/recipes/add'});

      // this.route('logout', {path: '/'});
            
      // this.route('editUser', {path: '/'});
      // this.route('modifyRecipe', {path: '/'});
      //
      // this.route('settings');
      // this.route('pantry');

    });



    Application.LogInRoute = Ember.Route.extend({
      // model: function() {
      //   return this.store.find('user');
      // }
    });


})();
