import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordStrength]',
  standalone: true,
  exportAs: 'strengthValue'
})
export class PasswordStrengthDirective {
  constructor() { }

  strengthValue!: string;

  @HostListener('input', ['$event'])
  output(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    this.strengthValue = this.passwordStrength(input.value);
  }

  passwordStrength(pw: string): string {
    if (!pw) return "";
    else if (pw.length < 6) return "strength-1";
    else if (pw.length < 8) return "strength-2";
    else return "strength-3";
  }
}
