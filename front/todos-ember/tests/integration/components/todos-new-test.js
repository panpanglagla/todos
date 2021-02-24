import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | Todos - New item', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function (assert) {
    await render(hbs`<TodosNew>My title for component</TodosNew>`);
    assert.dom('.todos-new').exists();
    assert.dom('.todos-new .todos-new-title').hasText('My title for component');
    assert.dom('.todos-new .todos-new-container').exists();
  });
});