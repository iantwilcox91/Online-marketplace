import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteItem(item) {
      if (confirm('Are you sure you want to delete this item?')) {
        this.sendAction('destroyItem', item);
      }
    }
  }
});
