class calculadora extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <link
        rel="stylesheet"
        href="./public/vendor/bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/css/bootstrap.min.css"
      />
      <div class="card bg-dark">
        <div class="card-header">
          <input
            type="text"
            class="form-control form-lg text-center"
            autofocus
            placeholder="Resultado"
            id="txt_numero"
            disabled
          />
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <button data-value="1" class="btn btn-warning w-100">1</button>
            </div>
            <div class="col-sm-3">
              <button data-value="2" class="btn btn-warning w-100">2</button>
            </div>
            <div class="col-sm-3">
              <button data-value="3" class="btn btn-warning w-100">3</button>
            </div>
            <div class="col-sm-3">
              <boton-suma></boton-suma>
            </div>
          </div>

          <div class="row mt-1">
            <div class="col-sm-3">
              <button data-value="4" class="btn btn-warning w-100">4</button>
            </div>
            <div class="col-sm-3">
              <button data-value="5" class="btn btn-warning w-100">5</button>
            </div>
            <div class="col-sm-3">
              <button data-value="6" class="btn btn-warning w-100">6</button>
            </div>
            <div class="col-sm-3">
              <boton-resta></boton-resta>
            </div>
          </div>

          <div class="row mt-1">
            <div class="col-sm-3">
              <button data-value="7" class="btn btn-warning w-100">7</button>
            </div>
            <div class="col-sm-3">
              <button data-value="8" class="btn btn-warning w-100">8</button>
            </div>
            <div class="col-sm-3">
              <button data-value="9" class="btn btn-warning w-100">9</button>
            </div>
            <div class="col-sm-3">
              <boton-multiplica></boton-multiplica>
            </div>
          </div>

          <div class="row mt-1">
            <div class="col-sm-3">
              <button data-value="0" class="btn btn-warning w-100">0</button>
            </div>
            <div class="col-sm-3">
              <boton-divide></boton-divide>
            </div>
            <div class="col-sm-6">
              <button data-value="=" class="btn btn-success w-100">=</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const display = shadow.getElementById('txt_numero');
    const buttons = shadow.querySelectorAll('button');
    let expresion = "";

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-value');
        if (val === "=") {
          expresion = String(Function(`return ${expresion}`)());
          display.value = expresion;
        } else {
          expresion += val;
          display.value = expresion;
        }
      });
    });

    const customOps = [
      ...shadow.querySelectorAll('boton-suma'),
      ...shadow.querySelectorAll('boton-resta'),
      ...shadow.querySelectorAll('boton-multiplica'),
      ...shadow.querySelectorAll('boton-divide')
    ];

    customOps.forEach(op => {
      const btn = op.shadowRoot.querySelector('button');
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-value');
        expresion += val;
        display.value = expresion;
      });
    });
  }
}


customElements.define('calculadora-basica', calculadora);
