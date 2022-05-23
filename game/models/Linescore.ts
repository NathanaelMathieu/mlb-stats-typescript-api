/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Linescore = {
  copyright?: string,
  currentInning?: number,
  currentInningOrdinal?: string,
  inningState?: string,
  inningHalf?: string,
  isTopInning?: false,
  scheduledInnings?: number,
  innings?: Array<LinescoreInning>,
  teams?: {
    home?: LinescoreTeamSummary,
    away?: LinescoreTeamSummary
  },
  defense?: {
    pitcher?: LinescorePlayer,
    catcher?: LinescorePlayer,
    first?: LinescorePlayer,
    second?: LinescorePlayer,
    third?: LinescorePlayer,
    shortstop?: LinescorePlayer,
    left?: LinescorePlayer,
    center?: LinescorePlayer,
    right?: LinescorePlayer,
    batter?: LinescorePlayer,
    onDeck?: LinescorePlayer,
    inHole?: LinescorePlayer,
    battingOrder?: number,
    team?: {
      id?: number,
      name?: string,
      link?: string,
    }
  },
  offense?: {
    batter?: LinescorePlayer,
    onDeck?: LinescorePlayer,
    inHole?: LinescorePlayer,
    first?: LinescorePlayer,
    pitcher?: LinescorePlayer,
    battingOrder?: number,
    team?: {
      id?: number,
      name?: string,
      link?: string,
    }
  },
  balls?: number,
  strikes?: number,
  outs?: number,
};

export type LinescoreInning = {
  num?: number,
  ordinalNum?: string,
  home?: LinescoreTeamSummary,
  away?: LinescoreTeamSummary
};

export type LinescorePlayer = {
  id?: number,
  fullName?: string,
  link?: string,
};

export type LinescoreTeamSummary = {
  runs?: number,
  hits?: number,
  errors?: number,
  leftOnBase?: number,
}