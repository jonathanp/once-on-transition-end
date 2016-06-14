module.exports = function onceOnTransitionEnd(el, cb, timeout) {
  function done() {
    el.removeEventListener('transitionend', transitionEndHandler);
    cb();
  }

  function transitionEndHandler() {
    clearTimeout(timeoutID);
    done();
  }

  var timeoutID = setTimeout(done, timeout);

  el.addEventListener('transitionend', transitionEndHandler);
};
