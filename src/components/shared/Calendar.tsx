import '../../styles/Calendar.css';

import styled from '@emotion/styled';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

import { COLORS } from '../../constants/colors';

interface CalendarProps {
  value: Date;
  onChange: React.Dispatch<React.SetStateAction<Date>>;
}

export const PlubCalendar = ({ value, onChange }: CalendarProps) => {
  const [calendar, setCalendar] = useState(false);
  const date = moment(value).format('YYYY-MM-DD');

  const handleClick = () => {
    setCalendar(!calendar);
  };

  useEffect(() => {
    setCalendar(false);
  }, [value]);

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) =>
      e.key === 'Escape' && setCalendar(false);
    window.addEventListener('keydown', onKeyPress);
    return () => window.removeEventListener('keydown', onKeyPress);
  }, []);

  return (
    <DateBox onClick={handleClick} id={String(calendar)}>
      {date}
      {calendar && (
        <CalendarBox onClick={(e) => e.stopPropagation()}>
          <Calendar
            value={value}
            onChange={onChange}
            formatDay={(_, date) => moment(date).format('DD')}
          />
        </CalendarBox>
      )}
    </DateBox>
  );
};

const DateBox = styled.div`
  position: relative;
  border: 1px solid ${COLORS.DEEP_GRAY};
  background: transparent;
  padding: 7px 25px;
  border-radius: 10px;
  font-size: 1.4rem;
  cursor: default;
  transition: border 0.3s ease-in-out;
  &:hover {
    border: 1px solid ${COLORS.MAIN};
  }
  &#true {
    border: 1px solid ${COLORS.MAIN};
  }
`;

const CalendarBox = styled.div`
  position: absolute;
  top: 40px;
  left: 0px;
`;
