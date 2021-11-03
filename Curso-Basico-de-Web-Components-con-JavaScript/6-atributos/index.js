// Atributos
class myELement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.titulo = this.getAttribute('titulo');
    this.parrafo = this.getAttribute('parrafo');
    this.img = this.getAttribute('img');
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
        <section>
          <h2>${this.titulo}</h2>
          <div>
          <p>${this.parrafo}</p>
          <img src=${this.img} alt="Una imagen"/>
          </div>
        </section>
        ${this.getStyles()}
      `;
    return template;
  }

  getStyles() {
    return `    
        <style>
          h2 {
            color: red;
          }
        </style>
      `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('my-element', myELement);