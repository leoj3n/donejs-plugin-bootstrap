import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './donejs-plugin-bootstrap.less';
import template from './donejs-plugin-bootstrap.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the donejs-plugin-bootstrap component'
  }
});

export default Component.extend({
  tag: 'donejs-plugin-bootstrap',
  ViewModel: ViewModel,
  template
});
