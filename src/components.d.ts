/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface FwInput {
    'required': boolean;
    'suggestiontext': string;
    'title': string;
  }
}

declare global {


  interface HTMLFwInputElement extends Components.FwInput, HTMLStencilElement {}
  var HTMLFwInputElement: {
    prototype: HTMLFwInputElement;
    new (): HTMLFwInputElement;
  };
  interface HTMLElementTagNameMap {
    'fw-input': HTMLFwInputElement;
  }
}

declare namespace LocalJSX {
  interface FwInput {
    'required'?: boolean;
    'suggestiontext'?: string;
    'title'?: string;
  }

  interface IntrinsicElements {
    'fw-input': FwInput;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'fw-input': LocalJSX.FwInput & JSXBase.HTMLAttributes<HTMLFwInputElement>;
    }
  }
}


