import Ember from 'ember';

export default Ember.Component.extend({
  addNewItemBool: false,
  actions: {
    addNewItemAction(){
      this.set('addNewItemBool',true);
   },
   save(){
     this.set('addNewItemBool',false);
   }
  }
});
