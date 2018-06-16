const htmlLoader = require('html-loader');

module.exports = {
  /**
   * 
   * @param {string} src - source
   * @param {*} filename 
   * @param {*} config 
   * @param {*} options 
   * @returns {string} 
   */
    process(src, filename, config, options) {
        return htmlLoader(src);
    }
}