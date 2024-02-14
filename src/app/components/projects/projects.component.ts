import { Component, OnInit } from '@angular/core';
import { ProjctService } from '../../services/projct.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  dados: any = {};
  showContent: boolean = false;

  constructor(private projctService: ProjctService) { }
  ngOnInit(): void {
  }

  showData(id: string) {
    this.dados = this.projctService.getDados(id);
    this.showContent = !this.showContent;
  }

}
