import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { createBigIntAccessor } from '../utility/dataAccessor';

export interface SegmentComparison {
  segmentStart: string;
  segmentEnd: string;
  resultOne: string;
  resultTwo: string;
  workerOne: string;
  workerTwo: string;
}

export interface ComparisonResponse {
  diff: number;
  comparisons: SegmentComparison[];
}

@Component({
  selector: 'app-computation-comparison',
  templateUrl: './computation-comparison.component.html',
  styleUrls: ['./computation-comparison.component.css']
})
export class ComputationComparisonComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }
  displayedColumns: string[] = ['segmentStart', 'segmentEnd', 'workerOne', 'workerTwo', 'resultOne'];
  source: MatTableDataSource<SegmentComparison>;
  resultOneLeftPad: string;
  resultTwoLeftPad: string;
  resultOneRightPad: string;
  resultTwoRightPad: string;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  getData(computation: string) {
    return this.http.get<ComparisonResponse>("https://inanepipun.com/api/getComputationComparison/" + computation);
  }

  ngOnInit() {
    this.getData(this.route.snapshot.paramMap.get('computation')).subscribe(data => {
      this.source = new MatTableDataSource(data.comparisons);
      this.source.sort = this.sort;
      this.source.paginator = this.paginator;
      let n: number = data.diff;
      let minusN: number = -n;
      this.source.sortingDataAccessor = createBigIntAccessor(['segmentStart', 'segmentEnd']);
      this.resultOneLeftPad = "-".repeat(Math.max(n,0));
      this.resultTwoRightPad = "-".repeat(Math.max(n, 0));
      this.resultOneRightPad = "-".repeat(Math.max(minusN, 0));
      this.resultTwoLeftPad = "-".repeat(Math.max(minusN, 0));
    });
  }

}
