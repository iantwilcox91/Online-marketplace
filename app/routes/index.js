import Ember from 'ember';

var items = [{
  id: 1,
  name: "shoes",
  description: "they have souls too",
  cost: 60,
  image: "https://images-eu.ssl-images-amazon.com/images/G/31/img15/Shoes/CatNav/h._V293117558_.jpg"
}, {
  id: 2,
  name: "shirt",
  description: "its nice",
  cost: 50,
  image: "http://gloimg.trendsgal.com/TR/2015/201506/source-img/1435607931974-P-2783448.jpg?a=1"
}, {
  id: 3,
  name: "pants",
  description: "fancy pants",
  cost: 100,
  image: "http://www.takeflightapparel.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/t/a/take-flight-classic-training-pants-gray_1.png"
}, {
  id: 4,
  name: "vape",
  description: "puff puff puff",
  cost: 200,
  image: "http://i.imgur.com/Jliqim1.png"
}];

export default Ember.Route.extend({
  model() {
    return items;
  },
});
