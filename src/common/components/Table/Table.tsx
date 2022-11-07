import { Fragment, useEffect, useState } from 'react';
import { gameApi } from '../../../api/Api';
import {
  TableData,
  TrackProps,
  Game,
  Race,
  Start,
} from '../../../types/table/TableInfo';
import {
  RaceContainer,
  RaceHorse,
  RaceInformation,
  RaceName,
  Tab,
  Track,
  TrackName,
} from './Table.styles';

const CustomTable = ({ data }: TableData): JSX.Element => {
  const trackStartTime = new Date(data.startTime).toLocaleTimeString();
  const openTab = (tabName: string) => {
    if (activeTab === tabName) {
      setActiveTab('');
    } else {
      setActiveTab(tabName);
    }
  };

  const [game, setGame] = useState<Game>();
  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`${gameApi}/${data.id}`, {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((response) => setGame(response))
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('request was cancelled');
        } else {
          console.log(error.message);
        }
      });
    return () => abortController.abort();
  }, [data]);

  return (
    <Fragment>
      <Track>
        <TrackName>
          {data.tracks.map((track: TrackProps, i) => {
            return (
              <p role="paragraph" key={i}>
                {track.name}
              </p>
            );
          })}
          <p>- {trackStartTime}</p>
        </TrackName>
        {game?.races.map((race: Race, i) => {
          const raceStartTime = new Date(race.startTime).toLocaleTimeString();
          const raceName = race.name ? race.name : 'Namn saknas';
          return (
            <RaceContainer key={i}>
              <RaceName>
                {race.number + ' - "' + raceName + '" - ' + raceStartTime}
              </RaceName>
              {race.starts.map((start: Start, i) => {
                return (
                  <RaceInformation key={i}>
                    <RaceHorse
                      role="button"
                      onClick={(e) => {
                        openTab(race.id + '_' + i.toString());
                      }}
                    >
                      {start.number +
                        ' ' +
                        start.horse.name +
                        ' - ' +
                        start.driver.firstName +
                        ' ' +
                        start.driver.lastName}
                    </RaceHorse>
                    <Tab
                      //className="tab"
                      isActive={activeTab === race.id + '_' + i.toString()}
                      role="contentinfo"
                      id={race.id + '_' + i.toString()}
                      onClick={(e) => {
                        openTab(race.id + '_' + i.toString());
                      }}
                    >
                      <p>
                        Tränare:{' '}
                        {start.horse.trainer.firstName +
                          ' ' +
                          start.horse.trainer.lastName}
                      </p>
                      <p>Far: {start.horse.pedigree.father.name}</p>
                    </Tab>
                  </RaceInformation>
                );
              })}
            </RaceContainer>
          );
        })}
      </Track>
    </Fragment>
  );
};

export default CustomTable;
