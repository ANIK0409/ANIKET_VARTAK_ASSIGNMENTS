import { Component, OnInit } from '@angular/core';
import { RestchainService } from './restchain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _localrestchain : RestchainService) { }

  title = 'ASSIGNMENT1';
}
