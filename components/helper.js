function monthConverter(month) {
  if (month === '01') {
    return 'Jan';
  } else if (month === '02') {
    return 'Feb';
  } else if (month === '03') {
    return 'Mar';
  } else if (month === '04') {
    return 'Apr';
  } else if (month === '05') {
    return 'May';
  } else if (month === '06') {
    return 'Jun';
  } else if (month === '07') {
    return 'Jul';
  } else if (month === '08') {
    return 'Aug';
  } else if (month === '09') {
    return 'Sept';
  } else if (month === '10') {
    return 'Oct';
  } else if (month === '11') {
    return 'Nov';
  } else if (month === '12') {
    return 'Dec';
  }
}

function dateFormatter(date) {
  const arr = date.split('-');
  const month = monthConverter(arr[1]);
  return month + ' ' + arr[2] + ', ' + arr[0];
}

export {dateFormatter};
