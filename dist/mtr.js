var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, element } from './mathml-element.js';
import { MathTableBaseElement } from './mtable-base.js';
let MathTRElement = class MathTRElement extends MathTableBaseElement {
    render() {
        return html `
    <style>
      :host {
        display: table-row;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        word-spacing: inherit;
        letter-spacing: inherit;
        text-rendering: inherit;
        direction: inherit;
        unicode-bidi: inherit;
        font-style: inherit;
      }
      slot::slotted(m-td:last-child) {
        --math-table-column-border: none;
      }
    </style>
    <slot></slot>
    `;
    }
    updated() {
        this.updateAlignment();
    }
};
MathTRElement = __decorate([
    element('m-tr')
], MathTRElement);
export { MathTRElement };
