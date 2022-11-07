export type TableData = {
    data: {
      id: string;
      startTime: string;
      tracks: TrackProps[];
    };
  };
  
  export type TrackProps = {
    id: number;
    name: string;
  };
  
  export type Game = {
    id: string;
    races: Race[];
  };
  
  export type Race = {
    id: string;
    name: string;
    number: number;
    startTime: string;
    starts: Start[];
  };
  
  export type Start = {
    driver: Driver;
    horse: Horse;
    number: number;
    result: {};
  };
  
  export type Horse = {
    name: string;
    trainer: Trainer;
    pedigree: Pedigree;
  };
  
  export type Driver = {
    firstName: string;
    lastName: string;
  };
  
  export type Trainer = {
    firstName: string;
    lastName: string;
  };
  
  export type Pedigree = {
    father: Father;
  };
  
  export type Father = {
    name: string;
  };