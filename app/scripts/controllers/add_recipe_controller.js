/* globals Application, Ember */

(function() {
  'use strict';

  Application.AddRecipeController = Ember.Controller.extend({
    needs: ['application'],
    recipeType: ['Breakfast', 'Lunch', 'Dinner', 'Dessert'],
    tempScale: ['°F', 'ºC'],

    actions: {
      addRecipe: function() {
        var userRef = this.get('controllers.application.currentUser.userRef');
        var recipes = this.store.createRecord('recipe', {
          userRef: userRef,
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
          step: {
            embedded: 'always'
          },
          notes: this.get('setNotes'),
        });
        recipes.save();
        // this.transitionToRoute('recipes');
      },

      addStep: function() {
        var steps = this.store.createRecord('step', {
          amount: this.get('setAmount'),
          unit: this.get('setUnit'),
          ingredient: this.get('setIngredient'),
          directions: this.get('setDirections'),

        });
        steps.save();
      }
    }

  });

})();
