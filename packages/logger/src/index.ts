const logger = {
  info: (...params: any[]) => console.log(...params),
  error: (...params: any[]) => console.error(...params),
  warn: (...params: any[]) => console.warn(...params),
};

export default logger;
