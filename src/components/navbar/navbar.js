import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './navbar.less';
import template from './navbar.stache';

import $ from "jquery";
import "~/css/nav.css";
import "~/css/navbar.css";
import "~/css/animation.css";
import "bootstrap/dist/js/umd/collapse";

export const ViewModel = DefineMap.extend({
  _list: {
    type: "*",
    value: []
  },
  list: {
    type: "*",
    value: []
  },
  initList(items) {
    this._list = items; // this.attr('list')
    console.log(this._list);
  }
});

export default Component.extend({
  tag: 'bootstrap-navbar',
  ViewModel: ViewModel,
  template,
  events: {
    inserted(el, ev) {
      console.log(el);
      this.viewModel.initList(getItems($(el).find('a')));
    }
  }
});

export function getItems(nodeList) {
  console.log(nodeList);
  return makeArr(nodeList)
    .filter(node => node.nodeName === "A")
    .map(a => getItemFromA(a));
}

export function getItemFromA(el) {
  var $el = $(el);
  return {
    link: $el.attr('href'),
    text: $el.text(),
    active: $el.is(':active')
  };
}

/**
 * Makes array from array-like structure and returns it.
 * @param arrayLike
 * @returns {Array.<T>}
 */
export function makeArr(arrayLike) {
  return [].slice.call(arrayLike);
}
