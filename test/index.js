
var isLeapYear,
    assert = require('assert');

try {
  // node
  isLeapYear = require('..');
} catch (err) {
  // component
  isLeapYear = require('is-leap-year');
}

function indexof(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === obj) {
      return i
    }
  }
  return -1;
}

describe('isLeapYear()', function () {

  var leapYears;

  before(function () {
    // http://en.wikipedia.org/wiki/List_of_leap_years
    leapYears = [
      // 1800s
      1804, 1808, 1812, 1816, 1820, 1824,
      1828, 1832, 1836, 1840, 1844, 1848,
      1852, 1856, 1860, 1864, 1868, 1872,
      1876, 1880, 1884, 1888, 1892, 1896,

      // 1900s
      1904, 1908, 1912, 1916, 1920, 1924,
      1928, 1932, 1936, 1940, 1944, 1948,
      1952, 1956, 1960, 1964, 1968, 1972,
      1976, 1980, 1984, 1988, 1992, 1996,

      // 2000s
      2000, 2004, 2008, 2012, 2016, 2020,
      2024, 2028, 2032, 2036, 2040, 2044,
      2048, 2052, 2056, 2060, 2064, 2068,
      2072, 2076, 2080, 2084, 2088, 2092,
      2096
    ];
  });

  it('should handle Dates', function () {
    assert(isLeapYear(new Date(2000, 10, 30)));
  });

  it('should handle years', function () {
    assert(!isLeapYear(2013));
  });

  it('should return true for leap years', function () {
    for (var i = 0; i < leapYears.length; i++) {
      assert(isLeapYear(leapYears[i]));
    }
  });

  it('should return false for non-leap years', function () {
    function year() {
      // between 1801 and 2097
      var y = Math.floor(Math.random() * (2097 - 1801 + 1)) + 1801;

      if (~indexof(leapYears, y)) {
        return year();
      }

      return y;
    }

    var i = 0;
    while (i < 100) {
      assert(!isLeapYear(year()));
      i++;
    }
  });
});
