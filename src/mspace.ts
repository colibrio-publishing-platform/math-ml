import { MathMLElement, html, TemplateResult, element, property } from './mathml-element.js';

@element('m-space')
export class MathSpaceElement extends MathMLElement {
  @property({ type: String }) width = '0em';
  @property({ type: String }) height = '0ex';
  @property({ type: String }) depth = '0ex';

  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
        vertical-align: top;
      }
    </style>
    `;
  }

  updated() {
    this.style.width = this.width;
    this.style.height = this.height;
    this.style.marginBottom = this.depth;
  }
}