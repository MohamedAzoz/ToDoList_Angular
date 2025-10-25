import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../Components/footer/footer.component';
import { NavBarComponent } from '../../Components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, NavBarComponent, RouterOutlet, FooterComponent],
  exports: [CommonModule, NavBarComponent, RouterOutlet, FooterComponent],
})
export class RouterOutletComponentsModule {}
