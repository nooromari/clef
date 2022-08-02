import { ADD_SONG, SET_TOKEN, REMOVE_SONG } from "./actionTypes";

export const songReducer = (
  state: SongState = { songs: [] },
  action: SongAction
): SongState => {
  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        songs: [...state.songs, action.song],
      };
    case REMOVE_SONG:
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== action.song.id),
      };
    default:
      return state;
  }
};

export const authReducer = (
  state: AuthState = {
    token: localStorage.getItem("token"),
  },
  action: TokenAction
): AuthState => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

