import { Component, OnInit } from '@angular/core';
import { ITask } from '../../../../Core/Models/itask';
import { APIService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  id: number = 0;
  Task!: ITask;
  Tasks: ITask[] = [];
  indexid: number = 0;
  all_ids: number[] = [];
  constructor(
    private active: ActivatedRoute,
    private router: Router,
    private locat: Location,
    private _api: APIService
  ) {}

  ngOnInit(): void {
    this.active.paramMap.subscribe((i) => {
      this.id = Number(i.get('Id')) || 0;

      this._api.getById(this.id).subscribe({
        next: (data) => {
          this.Task = data;
        },
      });
    });

    this._api.getAllTask().subscribe((data) => {
      this.all_ids = data.map((pid) => Number(pid.id));
    });
  }

  prevfun() {
    this.indexid = this.all_ids.indexOf(this.id);
    this.router.navigate(['/main/task', this.all_ids[--this.indexid]]);
  }
  nextfun() {
    this.indexid = this.all_ids.indexOf(this.id);
    this.router.navigate(['/main/task', this.all_ids[++this.indexid]]);
  }

  goback() {
    this.locat.back();
  }
}
