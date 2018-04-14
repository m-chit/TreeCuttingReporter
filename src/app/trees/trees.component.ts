import { Component, OnInit } from '@angular/core';
import {TreesService} from '../../services/trees.service';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.scss']
})
export class TreesComponent implements OnInit {
  trees: any = [];
  constructor(private treesService: TreesService) { }

  ngOnInit() {
    this.treesService.getTrees().subscribe(
      response => {
        const resp = response.json();
        this.trees = resp.content;
        this.trees = [...this.trees, ...this.treesService.getMockTrees()];
      }
    );

  }
}
