import QUnit from 'steal-qunit';
import { ViewModel } from './core';

// ViewModel unit tests
QUnit.module('donejs-plugin-bootstrap/components/core');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the bootstrap-core component');
});
