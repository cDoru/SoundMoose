import { TracksState } from '../reducers/tracks.reducer';
import { TrackDetailsState } from '../reducers/track-details.reducer';
import { PlayerState } from '../reducers/player.reducer';
import { SearchState } from '../reducers/search.reducer';
import { PlaylistState } from '../reducers/playlist.reducer';
import { SpinnerState } from '../reducers/spinner.reducer';
import { FavoritesState } from '../reducers/favorites.reducer';
import { SoundmooseUser } from '../models/soundmoose-user.model';
import { CommentsState } from '../reducers/comments.reducer';
import { AudioControls } from './audio-controls.model'

export interface AppStore {
  tracks: TracksState;
  player: PlayerState;
  audiocontrols: AudioControls;
  trackDetails: TrackDetailsState;
  comments: CommentsState;
  playlist: PlaylistState;
  soundmooseUser: SoundmooseUser;
  spinner: SpinnerState;
  favorites: FavoritesState;
  search: SearchState;
};
