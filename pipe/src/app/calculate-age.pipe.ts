import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAge',
  standalone: true
})
export class CalculateAgePipe implements PipeTransform {
  transform(date: string, ...args: unknown[]): number {
    return new Date().getFullYear() - new Date(date).getFullYear();
  }
}
