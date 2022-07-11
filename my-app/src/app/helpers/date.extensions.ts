export {}

declare global {
  interface Date {
    /**
     * toFormat
     * @param format 
     * yyyy: fullyear
     * 
     * yy: year with last 2 digits
     * 
     * mm: month with 2 digits
     * 
     * m: month with 1 or 2 digits
     * 
     * dd: day with 2 digits
     * 
     * d: day with 1 or 2 digits
     * 
     * HH: hour with 2 digits. From 00 - 23
     * 
     * H: hour with 1 or 2 digits. From 0 - 23
     * 
     * hh: hour with 2 digits. From 01 - 12
     * 
     * h: hour with 1 or 2 digits. From 1 - 12
     * 
     * ii: minute with 2 digits
     * 
     * i: minute with 1 or 2 digits
     * 
     * ss: second with 2 digits
     * 
     * s: second with 1 or 2 digits
     * 
     * mil: miliseconds with 3 digits
     * 
     * p: AM or PM
     */
    toFormat(format: string): string;
  }
}

// eslint-disable-next-line no-extend-native
Date.prototype.toFormat = function(format) {
  let day = this.getDay();
  let dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let dayFullArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayStr = dayArr[day];
  let dayFullStr = dayFullArr[day];
  let dt = this.getDate();
  let dtStr = dt + '';
  if (dt < 10) {
    dtStr = '0' + dt;
  }
  let month = this.getMonth() + 1;
  let monthStr = month + '';
  if (month < 10) {
    monthStr = '0' + month;
  }
  let year = this.getFullYear();
  let hyear = (year + '').substring(2);
  let hour24 = this.getHours();
  let hour24Str = '' + hour24;
  if (hour24 < 10) {
    hour24Str = '0' + hour24;
  }
  let hour = hour24;
  let p = 0;
  if (hour24 === 0) {
    hour = 12;
  } else if (hour24 === 12) {
    p = 1;
  } else if (hour24 > 12) {
    hour = hour24 - 12;
    p = 1;
  }
  let hourStr = '' + hour;
  if (hour < 10) {
    hourStr = '0' + hour;
  }
  let min = this.getMinutes();
  let minStr = '' + min;
  if (min < 10) {
    minStr = '0' + min;
  }
  let sec = this.getSeconds();
  let secStr = '' + sec;
  if (sec < 10) {
    secStr = '0' + sec;
  }
  let mil = this.getMilliseconds();
  format = format.replace('D', dayStr);
  format = format.replace('DD', dayFullStr);
  format = format.replace('dd', dtStr);
  format = format.replace('d', dt + '');
  format = format.replace('mm', monthStr);
  format = format.replace('mm', month + '');
  format = format.replace('yyyy', year + '');
  format = format.replace('yy', hyear);
  format = format.replace('HH', hour24Str);
  format = format.replace('H', hour24 + '');
  format = format.replace('hh', hourStr);
  format = format.replace('h', hour + '');
  format = format.replace('ii', minStr);
  format = format.replace('i', min + '');
  format = format.replace('ss', secStr);
  format = format.replace('s', sec + '');
  format = format.replace('p', p + '');
  format = format.replace('mil', mil + '');
  return format;
}