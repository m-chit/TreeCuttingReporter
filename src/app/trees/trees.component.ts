import {Component, OnInit, ViewChild} from '@angular/core';
import {TreesService} from '../../services/trees.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.scss']
})
export class TreesComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  treesCut: any = [];
  resp: any = {};
  error: any = {};
  constructor(private treesService: TreesService) { }

  ngOnInit() {
    this.treesService.getTrees().subscribe(
      response => {
        const resp = response.json();
        this.treesCut = resp.content;
        this.treesCut = [...this.treesCut, ...this.treesService.getMockTrees()];
      }
    );
  }

  onSubmit() {
    const report = {
      'parcelNumber': this.form.value.parcelNumber,
      'street': this.form.value.street,
      'name': this.form.value.name,
      'email': this.form.value.email,
      'trees': this.form.value.trees,
      'locationDesc': this.form.value.locationDesc,
      'longitude': this.form.value.longitude,
      'lastName': this.form.value.lastName,
      'precinct': this.form.value.precinct,
      'latitude':  this.form.value.latitude
    };
    this.treesService.putReport(report).subscribe(response => {
      this.resp = response;
      this.treesCut = [...this.treesCut, response];
      },
      error => this.error = error);
  }
}
