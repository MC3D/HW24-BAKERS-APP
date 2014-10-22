/*globals Application, DS */

(function() {
  'use strict';

  Application.Recipe = DS.Model.extend({
    userRef: DS.attr('string'),
    name: DS.attr('string'),
    author: DS.attr('string'),
    public: DS.attr('boolean', {
      defaultValue: false
    }),
    type: DS.attr('string'),
    prepTime: DS.attr('string'),
    cookTime: DS.attr('string'),
    cookTemp: DS.attr('string'),
    cookScale: DS.attr('string'),
    yield: DS.attr('string'),
    yieldLabel: DS.attr('string'),
    steps: DS.hasMany('step', {
      embedded: true
    }),
    notes: DS.attr('string')

  });

  Application.Step = DS.Model.extend({  
    step: DS.attr('number'),
    ingredients: DS.hasMany('ingredient', {
      embedded: true
    }),
    directions: DS.attr('string'),
    // amount: DS.attr('string'),
    // unit: DS.attr('string'),
    // ingredient: DS.attr('string'),

  });

  Application.Ingredient = DS.Model.extend({
    amount: DS.attr('string'),
    unit: DS.attr('string'),
    ingredient: DS.attr('string'),
  });

  Application.StepSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
      ingredients: {
        embedded: 'always'
      }
    }
  });

  Application.RecipeSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
      steps: {
        embedded: 'always'
      }
    }
  });



})();
