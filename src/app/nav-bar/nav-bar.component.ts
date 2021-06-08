import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { faCoffee, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  faCoffee = faCoffee;
  faSignInAlt = faSignInAlt;
  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
  }

}
