interface Team {
    name: string,
    color: string
}

interface gameSetup {
    categories: string[],
    context: string,
    teams: Team[]
}

export type {gameSetup};
