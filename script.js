function addLog(m){const l=document.getElementById('logs'),p=document.createElement('p');p.textContent='['+new Date().toLocaleTimeString()+'] '+m;l.prepend(p)}
function runCommand(){const c=document.getElementById('command'),o=document.getElementById('output'),v=c.value.trim();if(!v){o.textContent='Please enter a command.';addLog('Empty command received');return}o.textContent='Command received: '+v;addLog('Command executed: '+v);c.value=''}
function quickAction(m){document.getElementById('output').textContent=m;addLog(m)}
addLog('MAX AI Command Center ready')