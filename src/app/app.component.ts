import { Component, OnInit } from '@angular/core';
import { init } from './store/counter.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
     this.store.dispatch(init())
    }

    constructor(private store: Store) {}
}

