import { Component } from '@angular/core';
import { RouterOutletComponentsModule } from '../../Modules/router-outlet-components/router-outlet-components.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutletComponentsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
