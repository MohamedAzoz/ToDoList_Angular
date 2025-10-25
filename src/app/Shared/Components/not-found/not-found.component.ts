import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoutModuleModule } from '../../Modules/rout-module/rout-module.module';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RoutModuleModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
