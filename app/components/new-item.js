import Ember from 'ember';

export default Ember.Component.extend({
  addNewItemBool: false,
  actions: {
    addNewItemAction(){
      this.set('addNewItemBool',true);
    },
    saveItem(){
     var params = {
       name: this.get("name"),
       description: this.get("description"),
       cost: this.get("cost"),
       image: this.get("image")
     };
     this.set('addNewItemBool',false);
     this.sendAction("saveItem", params);
    }
  }
});
