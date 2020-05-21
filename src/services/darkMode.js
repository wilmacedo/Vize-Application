module.exports = function() {    
  let darkMode = new Date().getHours() >= 18 ? true : false;
  return darkMode;
}