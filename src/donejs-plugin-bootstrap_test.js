import QUnit from 'steal-qunit';
import plugin from './donejs-plugin-bootstrap';

QUnit.module('donejs-plugin-bootstrap');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the donejs-plugin-bootstrap plugin');
});
