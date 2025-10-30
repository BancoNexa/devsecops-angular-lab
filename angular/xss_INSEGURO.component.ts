import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-xss-inseguro',
  template: `<div #container></div>`
})
export class XssInseguroComponent {
  constructor(private el: ElementRef, private route: ActivatedRoute) {
    // ❌ Inserta HTML sin sanitización desde la URL
    const username = this.route.snapshot.params['username'];
    this.el.nativeElement.querySelector('#container').innerHTML = username;
  }
}