
/**
 * Check if the given `year` is a leap year
 *
 * @api public
 * @param {Date|Number} year
 * @return {Boolean}
 */

module.exports = function (year) {
  year = (year instanceof Date)
      ? year.getFullYear()
      : year;

  // only leap years have feb 29
  return !(new Date(year, 1, 29).getMonth() - 1);
};
