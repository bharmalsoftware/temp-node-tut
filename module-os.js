const osm = require('os');

console.log(`Total Memory : ${osm.totalmem}\nAvailable Memory : ${osm.freemem}`);
console.log(`OS Version : ${osm.version}`)
console.log(`Home Directory : ${osm.homedir}`)

// current user info
const uinfo = osm.userInfo();
console.log(uinfo);

//system up time
console.log(`Up time : ${osm.uptime()}`);

// console.log(osm);

const currentOS = {
    name: osm.type(),
    version: osm.version(),
    release: osm.release(),
    totalmemory: osm.totalmem(),
    freememory: osm.freemem()
}

console.log(currentOS);
