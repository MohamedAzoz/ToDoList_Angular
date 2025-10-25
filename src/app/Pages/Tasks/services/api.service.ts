import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../../../Core/Models/itask';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private _httpClient: HttpClient) {}
  getAllTask(): Observable<ITask[]> {
    return this._httpClient.get<ITask[]>(`${environment.ApiUrl}/Task`);
  }

  getById(Id:number): Observable<ITask> {
    return this._httpClient.get<ITask>(`${environment.ApiUrl}/Task/${Id}`);
  }
  
  CreateTask(Task:ITask): Observable<any> {
    return this._httpClient.post(`${environment.ApiUrl}/Task`,Task);
  }
  
  Delete(Id:number): Observable<any> {
    return this._httpClient.delete(`${environment.ApiUrl}/Task/${Id}`);
  }
  
}
