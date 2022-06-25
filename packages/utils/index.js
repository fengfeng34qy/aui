function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

export default {
  /**
   * 防抖节流
   */
  debounce(cb, ms, flag) {
    var t = null;
    return function () {
      var _this = this;
      var args = arguments;
      var C = function () {
        t = null;
        flag || cb.apply(_this, args);
      };
      var A = flag && !t;
      clearTimeout(t);
      t = setTimeout(C, ms);
      A && cb.apply(_this, args);
    }
  },
  /**
   * 判断是否是非null对象
   * @param {*} arg 
   */
  isObjectNotNull(arg) {
    return arg !== null && _typeof(arg) === 'object';
  },
  /**
     * 判断是否是字符串
     * 
     * @param {*} arg 
     * @returns {Boolean}
     */
   isString(arg) {
    return typeof arg === 'string' || arg instanceof String;
  },
  /**
   * 获取全局uuid
   * 参考：https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
   * @returns {String}
   */
  uuidv4: function uuidv4() {
    // return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    //   return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    // });
    return Math.random();
  }
}
