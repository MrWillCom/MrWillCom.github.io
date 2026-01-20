ThemeCupertino.Callout=(()=>{const e=document.createElement("template");return e.innerHTML=`
    ${ThemeCupertino._calloutStyles}
    <div class="container">
      <div class="header">
        <div class="icon"><slot name="icon"></slot></div>
        <div class="title"><slot name="title"></slot></div>
      </div>
      <div class="content"><slot></slot></div>
    </div>
  `,class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(e.content.cloneNode(!0))}connectedCallback(){const o=this.shadowRoot.querySelector('slot[name="icon"]'),s=this.shadowRoot.querySelector('slot[name="title"]'),i=this.shadowRoot.querySelector(".icon"),a=this.shadowRoot.querySelector(".title"),c=this.shadowRoot.querySelector(".header"),t=()=>{const n=o.assignedNodes().length>0,l=s.assignedNodes().length>0;i.classList.toggle("hidden",!n),a.classList.toggle("hidden",!l),c.classList.toggle("hidden",!n&&!l)};o.addEventListener("slotchange",t),s.addEventListener("slotchange",t),t()}}})(),customElements.define("htc-callout",ThemeCupertino.Callout);
