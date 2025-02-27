import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlightProduct]',
})
export class HighlightProductDirective implements OnChanges {
  @Input() stock!: boolean;

  constructor(private elRef: ElementRef, private rederer: Renderer2) {}
  ngOnChanges(): void {
    if (this.stock) {
      this.setHighlight('green');
    } else {
      this.setHighlight('red');
    }
  }

  private setHighlight(color: string) {
    this.rederer.setStyle(this.elRef.nativeElement, 'backgroundColor', color);
  }
}
