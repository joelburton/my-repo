function delay(msec) {
  function handle(resolveFn, rejectFn) {
    setTimeout(() => resolveFn("done"), msec);
  }
  return new Promise(handle);
}

export { delay };
