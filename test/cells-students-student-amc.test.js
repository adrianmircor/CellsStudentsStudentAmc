import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../cells-students-student-amc.js';

suite('CellsStudentsStudentAmc', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<cells-students-student-amc></cells-students-student-amc>`);
    await el.updateComplete;
  });

  test('instantiating the element with default properties works', () => {
    const element = el.shadowRoot.querySelector('p');
    assert.equal(element.innerText, 'Welcome to Cells');
  });

});
