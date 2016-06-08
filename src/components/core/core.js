import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './core.less';
import template from './core.stache';

export const ViewModel = DefineMap.extend({});

export default Component.extend({
  tag: 'bootstrap-core',
  ViewModel: ViewModel,
  template
});
