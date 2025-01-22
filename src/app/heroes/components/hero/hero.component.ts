import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDesctiption(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(value: string): void {
    this.name = value;
  }

  changeAge(value: number): void {
    this.age = value;
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
