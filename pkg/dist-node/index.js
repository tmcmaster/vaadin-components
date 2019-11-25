'use strict';

var litElement = require('lit-element');
require('@vaadin/vaadin-grid');

class VaadinGrid extends litElement.LitElement {
  // noinspection JSUnusedGlobalSymbols
  static get properties() {
    return {
      heading: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.heading = 'Hello World!';
  }

  static get styles() {
    // language=CSS
    return litElement.css`
            :host {
              display: inline-block;
            }
            h2 {
                color: gray;
            }
        `;
  } // noinspection JSUnusedGlobalSymbols


  render() {
    return litElement.html`
          <h2>${this.heading}</h2>
        `;
  }

}

window.customElements.define('vaadin-grid', VaadinGrid);
//# sourceMappingURL=index.js.map
