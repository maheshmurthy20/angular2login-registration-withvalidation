// import { Directive, forwardRef, Attribute } from '@angular/core';
// import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';

// @Directive({
//     selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
//     providers: [
//         { provide: NG_VALIDATORS, useExisting: forwardRef(() => NotEqualValidator), multi: true }
//     ]
// })
// export class NotEqualValidator implements Validator {
//     constructor( @Attribute('validateEqual') public validateEqual: string) {}

//     validate(c: AbstractControl): { [key: string]: any } {
//         // self value (e.g. retype password)
//         let v = c.value;

//         // control value (e.g. password)
//         let e = c.root.get(this.validateEqual);

//         // value not equal
//         if (e && v == e.value) return {
//             validateEqual: true
//         }
//         return null;
//     }
// }