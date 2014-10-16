/* globals Application, Ember */

(function() {
  'use strict';

  Application.AddRecipeController = Ember.Controller.extend({
    needs: ['application'],
    recipeType: ['Breakfast', 'Lunch', 'Dinner', 'Dessert'],
    tempScale: ['°F', 'ºC'],

    actions: {
      addRecipe: function() {
        var recipes = this.store.createRecord('recipe', {
          user: this.get('controllers.application.currentUser'),
          name: this.get('setName'),
          author: this.get('setAuthor'),
          public: this.get('isPublic'),
          type: this.get('selectedRecipeType'),
          prepTime: this.get('setPrepTime'),
          cookTime: this.get('setCookTime'),
          cookTemp: this.get('setCookTmep'),
          cookScale: this.get('selectedTempScale'),
          yield: this.get('setYield'),
          yieldLabel: this.get('setYieldLabel'),
          notes: this.get('setNotes'),
        });
        recipes.save();
        // this.transitionToRoute('recipes');
      }
    }

  });

  // Application.RecipeController = Ember.ObjectController.extend({
  //
  // });

})();
