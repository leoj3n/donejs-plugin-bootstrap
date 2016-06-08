import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './navbar.less';
import template from './navbar.stache';

import "jquery";
import "donejs-plugin-bootstrap/css/nav.css";
import "donejs-plugin-bootstrap/css/navbar.css";
import "donejs-plugin-bootstrap/css/animation.css";
import "bootstrap/dist/js/umd/collapse";

export const ViewModel = DefineMap.extend({
  list: {
    type: "*"
  }
});

export default Component.extend({
  tag: 'bootstrap-navbar',
  ViewModel: ViewModel,
  template
});
