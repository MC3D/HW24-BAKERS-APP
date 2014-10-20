/* globals Application, Ember */

(function () {
  'use strict';

  Application.Router.map(function() {

      this.route('login', {path: '/'});
      this.route('welcome',{path:'/welcome'});
      this.route('recipes', {path:'/recipes'});
      this.route('addRecipe', {path:'/recipes/add'});

      // this.route('logout', {path: '/'});

      // this.route('editUser', {path: '/'});
      // this.route('modifyRecipe', {path: '/'});
      //
      // this.route('settings');
      // this.route('pantry');

    });



  //   Application.Welcome = Ember.Route.extend({
  //     setupController: function(controller, model) {
  //       controller.set('welcome', model);
  // }
  //   });


})();
