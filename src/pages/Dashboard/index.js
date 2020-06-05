import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '../../services/api';

import { Container, Time } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFomatted = useMemo(() => {
    return format(date, "d 'de' MMMM", { locale: pt });
  }, [date]);

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('/schedules', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map((hour) => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find((a) => {
            const aa = format(parseISO(a.date), "MM/dd/yyyy '?' HH:mm");
            const bb = format(compareDate, "MM/dd/yyyy '?' HH:mm");
            return aa === bb;
          }),
        };
      });

      setSchedule(data);
      console.tron.log(data);
    }
    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleAddDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft color="#fff" size={36} />
        </button>
        <strong>{dateFomatted}</strong>
        <button type="button" onClick={handleAddDay}>
          <MdChevronRight color="#fff" size={36} />
        </button>
      </header>

      <ul>
        {schedule.map((time) => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em Aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
