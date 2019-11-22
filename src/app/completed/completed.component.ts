import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort, MatTableDataSource } from '@angular/material';
import { createBigIntAccessor } from '../utility/dataAccessor';

export interface Computation {
  start: string;
  completedAt: string;
  startDate: Date;
  completedDate: Date;
  digitPos: string;
  result: string;
  time: string;
  computation: number;
  realTimeDuration: number;
  id: number;
  hasOffset: boolean;
}

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor(private http: HttpClient) { }
  displayedColumns: string[] = ['startDate', 'completedDate', 'digitPos', 'result', 'time', 'realTimeDuration'];
  source: MatTableDataSource<Computation>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  getData() {
    return this.http.get<Computation[]>("https://inanepipun.com/api/dumpCompleted");
  }

  ngOnInit() {
    this.getData().subscribe(data => {
      for (let i of data) {
        if (i.start === "None") {
          i.start = "Jan 1 1970";
        }
        if (i.completedAt === "None") {
          i.completedAt = "Jan 1 1970";
        }
        i.startDate = new Date(i.start);
        i.completedDate = new Date(i.completedAt);
      }
      this.source = new MatTableDataSource(data);
      this.source.sort = this.sort;
      this.source.sortingDataAccessor = createBigIntAccessor(['digitPos']);
    });
  }

}
