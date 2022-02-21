import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[propagation]',
})
export class ClickStopPropagation {
  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    event.stopPropagation();
  }
}
