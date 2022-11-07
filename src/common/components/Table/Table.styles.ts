import styled from 'styled-components';

type Props = {
    isActive: boolean;
  };

export const Track = styled.div`
    padding: 20px 20px 40px 20px;
    margin-bottom: 10px;
    background-color: white;
`;

export const TrackName = styled.div`
    display: flex;
    font-size: 25px;
    padding: 5px;
    border-bottom: 2px solid rgb(21, 31, 40);

    p {
        margin: 0px 5px 0px 0px;

        :nth-child {
            margin: 0px 10px 0px 0px;
        }
    }
`;

export const RaceContainer = styled.div`
    margin-top: 30px;

    :first-child {
        15px;
    }
`;

export const RaceName = styled.div`
    font-size: 20px;
    padding: 5px;
    border-bottom: 2px solid rgb(21, 31, 40);
`;

export const RaceInformation = styled.div`
    cursor: pointer;
    background: #D0D0D0;

    :nth-child(2n) {
        background: white;
    }

    :after {
        content: "";
        display: table;
        clear: both;
    }

    .tab {
        display: none;

        p {
            margin: 5px 15px;
        }
    }
`;

export const RaceHorse = styled.div`
    padding: 5px;
`;

export const Tab = styled.div<Props>`
    display: ${(props) => (props.isActive === true ? "block" : "none")};

    p {
        margin: 5px 15px;
    }
`;
