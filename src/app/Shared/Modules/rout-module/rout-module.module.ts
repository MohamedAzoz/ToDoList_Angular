import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterLink, RouterLinkActive],
  exports: [CommonModule, RouterLink, RouterLinkActive],
})
export class RoutModuleModule {}
