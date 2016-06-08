import QUnit from 'steal-qunit';
import * as Navbar from './navbar';
import $ from 'jquery';
import stache from 'can-stache';
import viewModel from 'can-view-model';

var vm, template, $component;

// ViewModel unit tests
QUnit.module( 'bootstrap-navbar view model', {
  beforeEach: function() {
    vm = new Navbar.ViewModel({
      items: [
        {link: 'frst', text: 'First', active: false},
        {link: 'scnd', text: 'Second', active: false},
        {link: 'thrd', text: 'Third', active: true}
      ]
    });
  }
});

QUnit.test( 'basics', function() {
  QUnit.equal( vm.items.length, 3 );
});

// Component unit tests
QUnit.module( 'bootstrap-navbar component',{
	beforeEach: function () {
		template = stache(
      '<bootstrap-navbar>' +
        '<a href="frst">First</a>' +
        '<a href="scnd">Second</a>' +
        '<a href="thrd" active>Third</a>' +
      '</bootstrap-navbar>'
    );
		$('#qunit-fixture').append(template({}));
		$component = $('bootstrap-navbar', $('#qunit-fixture'));
		vm = viewModel($component);
	}
});

QUnit.test('renders', function () {
	equal( $component.length, 1, 'Component rendered');
	equal(
    $component.find('nav.navbar').is(':visible'),
    true,
    'navbar is visible' );
});
