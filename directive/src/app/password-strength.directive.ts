import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordStrength]',
  standalone: true,
  exportAs: 'strengthValue'
})
export class PasswordStrengthDirective {
  constructor() { }

  strengthValue!: number;

  @HostListener('input', ['$event'])
  output(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    this.strengthValue = this.passwordStrength(input.value);
  }

  passwordStrength(pw: string): number {
    if (!pw) return 0;
    else if (pw.length < 6) return 1;
    else if (pw.length < 8) return 2;
    else return 3;
  }
}
