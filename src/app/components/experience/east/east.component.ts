import { Component } from '@angular/core';

@Component({
  selector: 'app-east',
  standalone: true,
  imports: [],
  templateUrl: './east.component.html',
  styleUrl: './east.component.css'
})
export class EastComponent {
  isHidden: boolean = true;
  isHidden2: boolean = true;
  toggleHidden() {
    this.isHidden = !this.isHidden;
  }

  toggleHidden2() {
    this.isHidden2 = !this.isHidden2;
  }

}
