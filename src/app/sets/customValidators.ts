import { NgControl } from '@angular/forms';

export interface ValidationResult {
  [key: string]: boolean;
}

export class CustomValidators {

  static priceWithDescription(group: { controls: { price: any; description: any; }; markAsTouched: () => void; }) {

    let price = group.controls.price;
    let description = group.controls.description;


    group.markAsTouched();

    if (price.value > 100 && description.value == "") {
      return { "descriptionRequiredFromPrice": true }
    }

    return null;
  }

  static startsWithNumber(control: NgControl): ValidationResult {
    if (control.value != "" && !isNaN(control.value.charAt(0))) {
      return { "startsWithNumber": true };
    }
    return null;
  }

  static productNameValidator(control: { value: string; }): ValidationResult {

    if (control.value == "") {
      return null;
    }
    if (control.value.match(/^[A-Za-z0-9 ]{3,50}$/)) {
      return null;
    } else {
      return { 'invalidProductName': true };
    }
  }

  static creditCardValidator(control: { value: string; }): ValidationResult {

    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
      return null;
    } else {
      return { 'invalidCreditCard': true };
    }
  }

  static emailValidator(control: { value: string; }): ValidationResult {

    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  static passwordValidator(control: { value: string; }): ValidationResult {

    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }

  static zipValidator(control: { value: string; }) {
    var valid = /^\d{5}$/.test(control.value);
    if (valid) {
      return null;
    }
    return { "invalidZip": true };
  }

}