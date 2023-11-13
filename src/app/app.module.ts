import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/counter.effect';
import { AsyncPipe } from '@angular/common';


@NgModule({
    declarations: [
      AppComponent,
      CounterOutputComponent,
      CounterControlsComponent,
    ],
    imports: [
      BrowserModule,
      StoreModule.forRoot({
        counter: counterReducer,
        // auth: authReducer
      }),
      EffectsModule.forRoot([CounterEffects]),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
    ],
    providers: [AsyncPipe],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
  