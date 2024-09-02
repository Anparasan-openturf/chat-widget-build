/**
 *
 * @param {Object} object
 * @param {String} keyString
 * @returns {*}
 */
export const getValueFromObject = (object, keyString) => {
  try {
    const keys = keyString.split(".");
    const value = keys.reduce((obj, key) => obj[key], object);
    return value || "";
  } catch (e) {
    return "";
  }
};
