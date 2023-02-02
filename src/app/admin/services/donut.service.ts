import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root'
})

export class DonutService {
  private donuts: Donut[] = [
    {
      id: '1',
      name: 'Chocolate',
      icon: 'chocolate',
      price: 119,
      promo: true,
      released: 'Limited Edition',
      description: 'For the pure chocoholic'
    },
    {
      id: '2',
      name: 'Glazed Fudge',
      icon: 'glazed-fudge',
      price: 129,
      released: 'New',
      description: 'Sticky perfection'
    },
    {
      id: '3',
      name: 'Caramel Swirl',
      icon: 'caramel-swirl',
      price: 129,
      description: 'chocolate drizzled with caramel'
    },
    {
      id: '4',
      name: 'Sprinkles Galore',
      icon: 'sprinkles-galore',
      price: 139,
      description: 'Sprinkles...More Sprinkles!'
    },
    {
      id: '5',
      name: 'Strawberry Glaze',
      icon: 'strawberry-glaze',
      price: 119,
      description: 'Plain donut glazed with strawberry'
    },
    {
      id: '6',
      name: 'Vanilla Sundae',
      icon: 'vanilla-sundae',
      price: 129,
      description: 'Vanilla donut drizzled and glazed with vanilla'
    },
    {
      id: '7',
      name: 'Zesty Lemon',
      icon: 'zesty-lemon',
      price: 119,
      description: 'plain donut glazed with lemon'
    }
  ];
  constructor() { }

  read() {
    return this.donuts;
  }
  readOne(id: string) {
    const donut = this.read().find((donut: Donut) => donut.id === id);
    if (donut) return donut;
    return {name: "", icon: "", price: 0, description: ""};
  }
  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
    console.log(this.donuts);
  }
  update(payload: Donut) {
    this.donuts = this.donuts.map((donut: Donut) => {
      if (donut.id === payload.id) {
        return payload;
      }
      return donut;
    });
    console.log(this.donuts);
  }
  delete(payload: Donut) {
    this.donuts = this.donuts.filter((donut: Donut) => donut.id !== payload.id);
    console.log(this.donuts);
  }
}
