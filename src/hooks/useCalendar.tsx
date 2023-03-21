import moment from 'moment';
import { useState } from 'react';

import { PlubCalendar } from '../components/shared/Calendar';

const useCalendar = (defaultDate: Date) => {
  const [value, onChange] = useState<Date>(defaultDate);
  const date = moment(value).format('YYYY-MM-DD');
  const Calendar = () => <PlubCalendar value={value} onChange={onChange} />;

  return [date, Calendar];
};

export default useCalendar;
