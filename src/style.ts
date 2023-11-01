import styled from "styled-components";
import { layout } from "styled-system";

export const CalendarContainer = styled.div`
  ${layout}
  .react-calendar__navigation {
    margin-bottom: 40px;

    .react-calendar__navigation__label {
    }
  }
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }

  button {
    background: none;
    border: 0;
    appearance: none;
    outline: 0;
    cursor: pointer;
  }

  .react-calendar__month-view__weekdays {
    margin-bottom: 20px;
  }

  .react-calendar__month-view__days__day {
    position: relative;
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #252525;

    /* react-calendar__tile react-calendar__tile--active
    react-calendar__tile--range
    react-calendar__tile--rangeStart
    react-calendar__tile--rangeEnd react-calendar__tile--rangeBothEnds */

    &.react-calendar__tile--now {
      font-weight: bold;
    }

    &.react-calendar__month-view__days__day--neighboringMonth {
      opacity: 0.2;
    }

    &:disabled {
      opacity: 0.2;
    }

    &.react-calendar__tile--active {
      color: #fff;
      opacity: 1;

      &::after {
        content: "";
        transform: translate3d(-50%, -50%, 0);
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #fb3f4a;
        z-index: -1;
      }

      &.react-calendar__tile--range {
        &:not(.react-calendar__tile--rangeStart) {
          &:not(.react-calendar__tile--rangeEnd) {
            color: #252525;

            &::after {
              width: 100%;
              border-radius: 0;
              background: rgba(57, 92, 181, 0.4);
              left: 0;
              top: 0;
              transform: translate3d(0, 0, 0);
            }
          }
        }
      }
    }
  }

  /* react-calendar__tile 
  react-calendar__tile--active 
  react-calendar__tile--range 
  react-calendar__tile--rangeStart 
  react-calendar__tile--rangeEnd 
  react-calendar__tile--rangeBothEnds 
  react-calendar__month-view__days__day */
`;
