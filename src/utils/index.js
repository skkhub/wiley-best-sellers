
/**
 * 立即执行的防抖函数.
 * @param {function} func - 待包装的函数.
 * @param {number} delay - 延时，单位秒.
 * @returns {function}
 */
export function debounce(func, delay = 300) {
  let isDoing = false;
  let timer;
  return function(...rest) {
    if (isDoing) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        isDoing = false;
      }, delay);
    }
    else {
      isDoing = true;
      timer = setTimeout(() => {
        isDoing = false;
      }, delay);
      return func(...rest);
    }
  };
}
