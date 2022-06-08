export type TeamRestObject = {
  allStarStatus?: string;
  id?: number;
  name?: string;
  link?: string;
  season?: number;
  venue?: {
    id?: number;
    name?: string;
    link?: string;
  };
  teamCode?: string;
  fileCode?: string;
  abbreviation?: string;
  teamName?: string;
  locationName?: string;
  firstYearOfPlay?: string;
  league?: {
    id?: number;
    name?: string;
    link?: string;
  };
  division?: {
    id?: number;
    name?: string;
    link?: string;
  };
  sport?: {
    id?: number;
    link?: string;
    name?: string;
  };
  shortName?: string;
  parentOrgName?: string;
  parentOrgId?: number;
  franchiseName?: string;
  clubName?: string;
  active?: true;
};
