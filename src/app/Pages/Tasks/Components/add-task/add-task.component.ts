import { Component } from '@angular/core';
import { APIService } from '../../services/api.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ITask } from '../../../../Core/Models/itask';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  constructor(private _api: APIService, private formBuilder: FormBuilder) {}
  TaskData: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    start: ['', [Validators.required]],
    end: ['', [Validators.required]],
  });
  AddTask() {
    if (this.TaskData.invalid) {
        console.error('Form is invalid. Cannot submit.');
        return;
    }
    const Task:ITask=this.TaskData.value as ITask; 
    let value = false;

    this._api.CreateTask(Task).subscribe({
      next(data) {
        value = true;
        window.location.assign('/main');
        
        console.log(data);
      },
      error(err) {
        // alert(err);
        console.log(err);

        value = false;
      },
      // complete(){value=true}
    });
  }

  public get name() {
    return this.TaskData.get('name');
  }
  public get start() {
    return this.TaskData.get('start');
  }
  public get end() {
    return this.TaskData.get('end');
  }
}
