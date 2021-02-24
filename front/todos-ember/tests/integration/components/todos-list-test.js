import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | Todos - List of items', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function (assert) {
    await render(hbs`<TodosList>My title for component</TodosList>`);
    assert.dom('.todos-list').exists();
    assert.dom('.todos-list .todos-list-title').hasText('My title for component');
    assert.dom('.todos-list .todos-list-container').exists();
  });
});