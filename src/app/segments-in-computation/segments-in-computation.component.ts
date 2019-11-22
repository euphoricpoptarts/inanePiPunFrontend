import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { createBigIntAccessor } from '../utility/dataAccessor';

export interface Segment {
  uuid: string;
  completedDate: Date;
  time: number;
  result: string;
  segmentStart: string;
  segmentEnd: string;
}

@Component({
  selector: 'app-segments-in-computation',
  templateUrl: './segments-in-computation.component.html',
  styleUrls: ['./segments-in-computation.component.css']
})
export class SegmentsInComputationComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }
  displayedColumns: string[] = ['completedDate', 'segmentStart', 'segmentEnd', 'uuid', 'result', 'time'];
  source: MatTableDataSource<Segment>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  getData(computation : string) {
    return this.http.get<Segment[]>("https://inanepipun.com/api/getSegmentsForComputation/" + computation);
  }

  ngOnInit() {
    this.getData(this.route.snapshot.paramMap.get('computation')).subscribe(data => {
      this.source = new MatTableDataSource(data);
      this.source.sort = this.sort;
      this.source.paginator = this.paginator;
      this.source.sortingDataAccessor = createBigIntAccessor(['segmentStart', 'segmentEnd']);
    });
  }

}
