import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(private readonly router: Router) {
  }


  ngOnInit(): void {
  }

  public isActive(route: string): boolean {
    return this.router.url.includes(route);
  }



}
