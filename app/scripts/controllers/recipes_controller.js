/* globals Application, Ember */

(function() {
  'use strict';

  Application.RecipesController = Ember.ArrayController.extend({
    needs: ['application'],

    recipes: function() {
      var userRecipes = this.store.all('recipes');
      console.log(userRecipes);
      console.log('yes');
      userRecipes.get('name');
    },





  });

})();
