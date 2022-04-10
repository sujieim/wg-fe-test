import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.page';
import { HomePageRoutingModule } from './home-page-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomePageComponent],
  imports: [RouterModule, CommonModule, HomePageRoutingModule],
})
export class HomePageModule {}
