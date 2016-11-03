import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model() {
    return this.store.findAll('item');
  },
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    saveItem(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      this.transitionTo('index');
    },

    update(item, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          item.set(key,params[key]);
        }
      });
      item.save();
      this.transitionTo('index');
    },
      destroyItem(item) {
        item.destroyRecord();
        this.transitionTo('index');
      }
    }
});
