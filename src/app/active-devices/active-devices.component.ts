import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort, MatTableDataSource } from '@angular/material';

export interface ActiveDevice {
  uuid: string;
  lastActive: Date;
}

@Component({
  selector: 'app-active-devices',
  templateUrl: './active-devices.component.html',
  styleUrls: ['./active-devices.component.css']
})
export class ActiveDevicesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  displayedColumns: string[] = ['uuid', 'lastActive'];
  source: MatTableDataSource<ActiveDevice>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  getData() {
    return this.http.get<ActiveDevice[]>("https://inanepipun.com/api/getActiveDevices");
  }

  ngOnInit() {
    this.getData().subscribe(data => {
      this.source = new MatTableDataSource(data);
      this.source.sort = this.sort;
    });
  }

}
