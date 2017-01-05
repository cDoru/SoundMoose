import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Player } from '../../../models/player.model';
import { AppStore } from '../../../models/appstore.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'track-progress',
  styleUrls: [ '../player.component.css' ],
  templateUrl: './track-progress.component.html'
})
export class TrackProgressComponent {
  player$: Observable<Player>;
  duration: number;
  durationMinutesSeconds: string;
  progressMinutesSeconds: string;

  constructor (private store$: Store<AppStore>) {
    this.player$ = this.store$.select('player');
    this.player$.subscribe((item) => {
      this.durationMinutesSeconds = this.millisToMinutesSeconds(+item.currentTrack.duration);
      this.progressMinutesSeconds = this.millisToMinutesSeconds(+item.currentTime * 1000);
    });
  }

  private millisToMinutesSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = +((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }



}