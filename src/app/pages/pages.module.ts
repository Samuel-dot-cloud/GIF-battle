import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleComponent } from './battle/battle.component';
import { CreateComponent } from './create/create.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BattleComponent, CreateComponent, LeaderboardComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagesModule { }