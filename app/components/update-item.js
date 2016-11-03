import Ember from 'ember';

export default Ember.Component.extend({
  updateItem: false,
  actions: {
    updateItemForm() {
      this.set('updateItem', true);
    },
    update(item) {
      var params = {
        name: this.get("name"),
        description: this.get("description"),
        cost: this.get("cost"),
        image: this.get("image")
      };
      this.set('updateItem', false);
      this.sendAction('update', item, params);
    }
  }
});
