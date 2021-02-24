import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | todos-ember', function (hooks) {
  setupApplicationTest(hooks);
  test('visiting /', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    assert.dom('.todos .todos-new .todos-new-title').hasText('New thing to do');
    assert.dom('.todos .todos-list .todos-list-title').hasText('List of things to do');
  });
});