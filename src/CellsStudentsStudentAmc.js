import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsStudentsStudentAmc-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-students-student-amc></cells-students-student-amc>
```

##styling-doc

@customElement cells-students-student-amc
*/
export class CellsStudentsStudentAmc extends LitElement {
  static get is() {
    return 'cells-students-student-amc';
  }

  // Declare properties
  static get properties() {
    return {
      id: { type: String, },
      name: { type: String, },
      courses: { type: Array, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.courses = [];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-students-student-amc-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <slot></slot>
      <div class="card">
        <div class="container">
          <h4> Código: <b>${this.id}</b></b></h4>
          <h4> Nombre: <b>${this.name}</b></h4>
          <h4 class="courses"> Cursos: </h4>
          <ul>
            ${this.courses.map(
              (i) => html`
                <li><b>${i}</b></li>
              `
            )}
          </ul>
        </div>
      </div>
    `;
  }
}
