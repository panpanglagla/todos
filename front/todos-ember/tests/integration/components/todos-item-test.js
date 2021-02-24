import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | todos-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.setProperties({
      item: {
        title: 'Titre',
        id: '1',
        due: '2021-02-24T12:00:00.000Z'
      },
    });
    await render(hbs`<TodosItem @todosItem={{this.item}}></TodosItem>`);
    assert.dom('.todos-item').exists();
    assert.dom('.todos-item .todos-item-title').hasText('Titre');
  });
});
