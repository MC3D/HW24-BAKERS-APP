/*globals Application, DS */

(function() {
  'use strict';

  Application.Recipe = DS.Model.extend({
    user: DS.attr('string'),
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
    notes: DS.attr('string')

  });

  Application.AddSteps = DS.Model.extend({  
    quantity: DS.attr('string'),
    unit: DS.attr('string'),
    ingredient: DS.attr('string'),
    directions: DS.attr('string')

  });



})();
