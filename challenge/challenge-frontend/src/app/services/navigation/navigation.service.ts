import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {}

  navigateTo(page: string) {
    // console.log(`Going to ${page}`)
    this.router.navigate([`${page}`]);
    
  }
}
