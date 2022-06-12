import { BoxscoreRestObject } from "./BoxscoreRestObject";

export type GameRestObject = {
  copyright?: string,
  gamePk?: number,
  link?: string,
  metaData?: {
    wait?: number,
    timeStamp?: string,
    gameEvents?: [ ],
    logicalEvents?: [ ]
  },
  gameData?: {
    game?: {
      pk?: number,
      type?: string,
      doubleHeader?: string,
      id?: number,
      gamedayType?: string,
      tiebreaker?: string,
      gameNumber?: number,
      calendarEventID?: string,
      season?: string,
      seasonDisplay?: string
    },
    datetime?: {
      dateTime?: string,
      originalDate?: string,
      officialDate?: string,
      dayNight?: string,
      time?: string,
      ampm?: string
    },
    status?: {
      abstractGameState?: string,
      codedGameState?: string,
      detailedState?: string,
      statusCode?: string,
      startTimeTBD?: boolean,
      abstractGameCode?: string
    },
    teams?: {
      away?: GameTeamRestObject,
      home?: GameTeamRestObject,
    },
    players?: GamePlayerRestObject[],
    venue?: {
      id?: number,
      name?: string,
      link?: string,
      location?: {
        address1?: string,
        city?: string,
        state?: string,
        stateAbbrev?: string,
        postalCode?: string,
        country?: string
      },
      timeZone?: {
        id?: number,
        offset?: number,
        tz?: string
      },
      fieldInfo?: {
        capacity?: number,
        turfType?: string,
        roofType?: string,
        leftLine?: number,
        leftCenter?: number,
        center?: number,
        rightCenter?: number,
        rightLine?: number
      },
      active?: boolean
    },
    officialVenue?: {
      id?: number,
      link?: string
    },
    weather?: { },
    gameInfo?: { },
    review?: {
      hasChallenges?: boolean,
      away?: {
        used?: number,
        remaining?: number
      },
      home?: {
        used?: number,
        remaining?: number
      }
    },
    flags?: {
      noHitter?: boolean,
      perfectGame?: boolean,
      awayTeamNoHitter?: boolean,
      awayTeamPerfectGame?: boolean,
      homeTeamNoHitter?: boolean,
      homeTeamPerfectGame?: boolean
    },
    alerts?: [ ],
    probablePitchers?: { }
  },
  liveData?: {
    plays?: {
      allPlays?: [ ],
      scoringPlays?: [ ],
      playsByInning?: [ ]
    },
    linescore?: {
      scheduledInnings?: number,
      innings?: [ ],
      teams?: {
        home?: { },
        away?: { }
      },
      defense?: {
        team?: {
          id?: number,
          name?: string,
          link?: string
        }
      },
      offense?: {
        team?: {
          id?: number,
          name?: string,
          link?: string
        }
      }
    },
    boxscore?: BoxscoreRestObject
  }
};

export type GamePlayerRestObject = {
  id?: number,
  fullName?: string,
  link?: string,
  firstName?: string,
  lastName?: string,
  primaryNumber?: string,
  birthDate?: string,
  currentAge?: number,
  birthCity?: string,
  birthStateProvince?: string,
  birthCountry?: string,
  height?: string,
  weight?: number,
  active?: boolean,
  primaryPosition?: {
    code?: string,
    name?: string,
    type?: string,
    abbreviation?: string
  },
  useName?: string,
  middleName?: string,
  boxscoreName?: string,
  gender?: string,
  isPlayer?: boolean,
  isVerified?: boolean,
  draftYear?: number,
  mlbDebutDate?: string,
  batSide?: {
    code?: string,
    description?: string
  },
  pitchHand?: {
    code?: string,
    description?: string
  },
  nameFirstLast?: string,
  nameSlug?: string,
  firstLastName?: string,
  lastFirstName?: string,
  lastInitName?: string,
  initLastName?: string,
  fullFMLName?: string,
  fullLFMName?: string,
  strikeZoneTop?: number,
  strikeZoneBottom?: number,
};

export type GameTeamRestObject = {
  allStarStatus?: string,
  id?: number,
  name?: string,
  link?: string,
  season?: number,
  venue?: IdNameLinkRestObject
,
  teamCode?: string,
  fileCode?: string,
  abbreviation?: string,
  teamName?: string,
  locationName?: string,
  firstYearOfPlay?: string,
  league?: IdNameLinkRestObject
,
  division?: IdNameLinkRestObject
,
  sport?: {
    id?: number,
    link?: string,
    name?: string
  },
  shortName?: string,
  record?: {
    gamesPlayed?: number,
    wildCardGamesBack?: string,
    leagueGamesBack?: string,
    springLeagueGamesBack?: string,
    sportGamesBack?: string,
    divisionGamesBack?: string,
    conferenceGamesBack?: string,
    leagueRecord?: {
      wins?: number,
      losses?: number,
      ties?: number,
      pct?: string
    },
    records?: { },
    divisionLeader?: boolean,
    wins?: number,
    losses?: number,
    winningPercentage?: string
  },
  parentOrgName?: string,
  parentOrgId?: number,
  franchiseName?: string,
  clubName?: string,
  active?: boolean
};

export type IdNameLinkRestObject = {
  id?: number,
  name?: string,
  link?: string
};