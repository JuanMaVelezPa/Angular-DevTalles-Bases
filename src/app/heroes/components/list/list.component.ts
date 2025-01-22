import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  heroesName: string[] = ['Hulk', 'Spiderman', 'Ironman', 'Thor']
  deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroesName.pop();
  }

}
