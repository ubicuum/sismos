process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
try {
  const surge = require('C:/Users/Ramon Seguel Vorpahl/AppData/Roaming/npm/node_modules/surge');
  console.log('surge loaded');
  const s = surge();
  console.log('logging in...');
  s.login({ email: 'arsvorpahl@gmail.com', password: 'gurdjieff' }, function(err, token) {
    console.log('login callback');
    if (err) { console.error('Login error:', JSON.stringify(err)); process.exit(1); return; }
    console.log('Token:', token);
    console.log('publishing...');
    s.publish({ 
      project: 'C:\\Users\\Ramon Seguel Vorpahl\\Desktop\\proyectos OPENCODE\\sismos', 
      pkg: { domain: 'sismos.surge.sh' } 
    }, function(err2, result) {
      console.log('publish callback');
      if (err2) { console.error('Publish error:', JSON.stringify(err2)); process.exit(1); return; }
      console.log('Published:', JSON.stringify(result));
    });
  });
} catch(e) {
  console.error('Fatal:', e.message);
}
