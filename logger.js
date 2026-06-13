const logs = [];
let emitFn = null;

function setEmitter(fn) {
  emitFn = fn;
}

function addLog(message) {
  const time = new Date().toLocaleTimeString();
  const formatted = `[${time}] ${message}`;

  console.log(formatted);

  logs.push(formatted);
  if (logs.length > 300) logs.shift();

  if (emitFn) {
    try { emitFn(formatted); } catch (_) {}
  }
}

function getLogs() {
  return logs;
}

module.exports = { addLog, getLogs, setEmitter };
