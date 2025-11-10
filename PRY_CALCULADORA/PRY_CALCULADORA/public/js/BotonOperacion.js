
class BotonOperacion extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
     
      <button data-value="+" class="btn btn-light w-100">+</button>
    `;
  }
}
customElements.define('boton-suma', BotonSuma);


