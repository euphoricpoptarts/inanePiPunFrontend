import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort, MatTableDataSource } from '@angular/material';
import { createBigIntAccessor } from '../utility/dataAccessor';

export interface InProgressComputation {
  created: string;
  startDate: Date;
  digit: string;
  completed: number;
  inProgress: number;
  progress: number;
  id: number;
  hasOffset: boolean;
}

@Component({
  selector: 'app-all-in-progress',
  templateUrl: './all-in-progress.component.html',
  styleUrls: ['./all-in-progress.component.css']
})
export class AllInProgressComponent implements OnInit {

  constructor(private http: HttpClient) { }
  displayedColumns: string[] = ['startDate', 'digit', 'completed', 'inProgress', 'progress'];
  source: MatTableDataSource<InProgressComputation>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  getData() {
    return this.http.get<InProgressComputation[]>("https://inanepipun.com/api/dumpInProgress");
  }

  ngOnInit() {
    this.getData().subscribe(data => {
      for (let i of data) {
        if (i.created === "None") {
          i.created = "Jan 1 1970";
        }
        i.startDate = new Date(i.created);
        i.progress = 100*i.completed / (i.completed + i.inProgress);
      }
      this.source = new MatTableDataSource(data);
      this.source.sort = this.sort;
      this.source.sortingDataAccessor = createBigIntAccessor(['digit']);
    });
  }

}
