import { Component } from '@angular/core';
import { IRouterLink } from '../../../Core/Models/irouter-link';
import { RoutModuleModule } from '../../Modules/rout-module/rout-module.module';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RoutModuleModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  ImgToDoList:string="../../../../assets/to-do-list-13182 (1).svg"
 
  RouterLinks: IRouterLink[] = [
    {Title:'Tasks',path:'tasks'},
   {Title:'Create Task',path:'addTask'},
   {Title:'Contact Support',path:'/contact'},
  //  {Title:'',path:''},
  //  {Title:'',path:''},
  ];
}
