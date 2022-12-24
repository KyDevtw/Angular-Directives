import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
  // 加入 [] 使用時以 attr 形式使用
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}