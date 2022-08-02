interface SongCardProps {
  id?: string;
  cover: string;
  artist: string;
  api_track: string;
  track: string;
  isFavorite?: boolean; 
}

interface Store {
    token: string;
    playlist: SongCardProps[];
}

type SongState = {
    songs: SongCardProps[];
};

type AuthState = {
    token: string;
};

type SongAction = {
  type: string;
  song: SongCardProps;
};

type TokenAction = {
  type: string;
  token: string;
};

type DispatchSong = (args: SongAction) => SongAction;
type GetStateSong = () => SongState;

type DispatchToken = (args: TokenAction) => TokenAction;
type GetStateToken = () => string;
