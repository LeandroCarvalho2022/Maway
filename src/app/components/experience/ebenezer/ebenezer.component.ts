import { Component } from '@angular/core';

@Component({
  selector: 'app-ebenezer',
  standalone: true,
  imports: [],
  templateUrl: './ebenezer.component.html',
  styleUrl: './ebenezer.component.css'
})
export class EbenezerComponent {
  isHidden: boolean = true;
  isHidden2: boolean = true;
  toggleHidden() {
    this.isHidden = !this.isHidden;
  }

  toggleHidden2() {
    this.isHidden2 = !this.isHidden2;
  }


}
