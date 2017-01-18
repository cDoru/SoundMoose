import { Component, Input } from '@angular/core';

import { AppStore } from '../../../models/appstore.model';
import { PlaylistActions } from '../../../actions/playlist.actions';
import { Store } from '@ngrx/store';
import { Track } from '../../../models/track.model';

@Component({
  selector: 'playlist-track-details',
  styleUrls: [ './playlist-track-details.component.css' ],
  templateUrl: './playlist-track-details.component.html',
})

export class PlaylistTrackDetailsComponent {

  // Track info that is being passed in from the parent component.
  @Input() track: Track;

  constructor(private store: Store<AppStore>, private playlistActions: PlaylistActions) {}

  // Convert time in milliseconds to M:SS format.
  millisToMinutesSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = +((millis % 60000) / 1000).toFixed(0);

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  removeMe() {
    this.store.dispatch(this.playlistActions.removeTrack(this.track.trackId, this.track.platform));
  }

}