import { Routes } from '@angular/router';
import { MainComponent } from './Shared/Components/main/main.component';
import { NotFoundComponent } from './Shared/Components/not-found/not-found.component';
import { TasksComponent } from './Pages/Tasks/Components/tasks/tasks.component';
import { ContactComponent } from './Shared/Components/contact/contact.component';

export const routes: Routes = [
    {path:'',redirectTo:'main',pathMatch:'full'},
    {title:'Main',path:'main',component:MainComponent,children:[
        {path:'',redirectTo:'tasks',pathMatch:'full'},
        {title:'Tasks',path:'tasks',component:TasksComponent},
        {title:'Task Details',path:'task/:Id',loadComponent:()=>import("./Pages/Tasks/Components/task/task.component").then((c)=>c.TaskComponent)},
        {title:'Create Task',path:'addTask',loadComponent:()=>import("./Pages/Tasks/Components/add-task/add-task.component").then((c)=>c.AddTaskComponent)},
        {title:'Update Task',path:'updateTask/:Id',loadComponent:()=>import("./Pages/Tasks/Components/update-task/update-task.component").then((c)=>c.UpdateTaskComponent)},
    ]},
    {title:'Contact Support',path:'contact',component:ContactComponent},
    {title:'Not Found',path:'**',component:NotFoundComponent}
];
