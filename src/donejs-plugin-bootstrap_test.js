import QUnit from 'steal-qunit';
import { ViewModel } from './donejs-plugin-bootstrap';

// ViewModel unit tests
QUnit.module('donejs-plugin-bootstrap');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the donejs-plugin-bootstrap component');
});
