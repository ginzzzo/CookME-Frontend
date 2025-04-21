import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
})
export class LayoutModule { }
