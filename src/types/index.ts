export interface Theme {
    dark: string;
    darkAccent: string;
    primary: string;
    light: string;
    faded: string;
    lightFade: string;
    confirmation: string;
    danger: string;
    background: {
        backgroundColor: string;
        flex: number;
    }
}

export interface GameType {
    name: string;
    id: number;
    minPlayers: number | string;
    maxPlayers: number | string;
    owner: string;
    url: string;
    playtime: string;
    genres: string[];
    howToPlay: string;
}