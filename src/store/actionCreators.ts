import { SET_TOKEN, ADD_SONG, REMOVE_SONG  } from "./actionTypes";


export const setAuthToken = (token: string) => ({
    type: SET_TOKEN,
    token
} as const);

export const addSong = (song: SongCardProps) => ({
    type: ADD_SONG,
    song
} as const);

export const removeSong = (song: SongCardProps) => ({
    type: REMOVE_SONG,
    song
} as const);

// export const setPlaylist = (playlist: SongCardProps[]) => ({
//     type: SET_PLAYLIST,
//     playlist
// } as const);
