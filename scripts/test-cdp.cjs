const { spawn } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

console.log('Launching headless Chrome...');
const proc = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check'
], { stdio: 'ignore' });

setTimeout(async () => {
  try {
    const res = await fetch('http://127.0.0.1:9222/json/version');
    const data = await res.json();
    console.log('Connected to Chrome CDP:', data.Browser);
    proc.kill();
  } catch (e) {
    console.error('Failed to connect:', e.message);
    proc.kill();
  }
}, 1500);
