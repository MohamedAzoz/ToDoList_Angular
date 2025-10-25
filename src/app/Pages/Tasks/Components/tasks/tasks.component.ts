import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { ITask } from '../../../../Core/Models/itask';
import { TaskModuleModule } from '../../../task-module/task-module.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskModuleModule,CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  ImgUrl:string="../../../../../assets/trash-can-10416.svg"
  ImgUrlShow:string="../../../../../assets/eye-view-6451.svg"
  Tasks!: ITask[];
  constructor(private _api: APIService) {}
  Delete(id: number) {
    this._api.Delete(id).subscribe({
      next: () => window.location.reload(),
      error: (error) => alert(error),
    });
  }
  ngOnInit(): void {
    this._api.getAllTask().subscribe((data) => {
      this.Tasks = data;
      console.log(this.Tasks);
    });
  }

}
