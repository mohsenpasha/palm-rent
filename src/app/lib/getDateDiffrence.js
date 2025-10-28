import moment from 'moment-jalaali';

export function dateDifference(startDate, endDate, calendarType = 'auto') {
  // تشخیص خودکار نوع تاریخ
  if (calendarType === 'auto') {
    calendarType = detectCalendarType(startDate);
  }
  
  let start, end;
  
  if (calendarType === 'persian') {
    start = moment(startDate, 'jYYYY/jMM/jDD');
    end = moment(endDate, 'jYYYY/jMM/jDD');
  } else {
    start = moment(startDate, 'YYYY/MM/DD');
    end = moment(endDate, 'YYYY/MM/DD');
  }
  
  if (!start.isValid() || !end.isValid()) {
    throw new Error('تاریخ وارد شده معتبر نیست');
  }
  
  const diffDays = end.diff(start, 'days');
  const diffMonths = end.diff(start, 'months');
  const diffYears = end.diff(start, 'years');
  
  return {
    days: Math.abs(diffDays),
    months: Math.abs(diffMonths),
    years: Math.abs(diffYears),
    totalDays: Math.abs(diffDays),
    isFuture: diffDays > 0
  };
}

// تابع کمکی برای تشخیص خودکار
function detectCalendarType(dateString) {
  const persianDigitPattern = /[۰-۹]/;
  const persianFormatPattern = /^[۱۲۳۴۵۶۷۸۹۰]{4}\/[۰۱][۰-۹]\/[۰-۳][۰-۹]$/;
  
  if (persianDigitPattern.test(dateString) || persianFormatPattern.test(dateString)) {
    return 'persian';
  }
  
  return 'gregorian';
}