import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacter } from './components/addCharacter/add-character.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacter,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MainPageComponent]
})
export class DbzModule { }
