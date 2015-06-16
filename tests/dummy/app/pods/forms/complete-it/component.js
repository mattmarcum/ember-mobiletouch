import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['btn', 'btn-default'],
  type: 'submit',
  attributeBindings: ['type'],
});
