import staticWindow from './staticWindow';

/**
  * 判断是否Window对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
function isWindow (obj) {
  return !!(staticWindow && !!(obj && obj === obj.window))
}

export default isWindow
