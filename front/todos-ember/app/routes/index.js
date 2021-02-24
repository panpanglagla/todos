import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/todos.json');
    let { data } = await response.json();
    let mapped = data.map((model) => {
      let { id, attributes } = model;
      return { id, ...attributes };
    });
    return mapped;
  }
}