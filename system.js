const minimist = require('minimist');

const space = require('./checks/space.js');
const http20x = require('./checks/http20x.js');

const args = minimist(process.argv);

// want to check the space left on the device
if (args.space) {
	space(args);
}

// want to check that hosts are responding
if (args.http20x) {
	http20x(args);
}

// Command

// node system.js --space --spaceLimit 60 --spaceIgnorePartitions="/dev/loop0;/dev/loop2;/dev/loop3;/dev/loop1;/dev/loop4;/dev/loop7;/dev/loop6;/dev/loop8;/dev/loop5;/dev/loop11;/dev/loop10;/dev/loop9;/dev/loop13;/dev/loop12;/dev/loop14;/dev/loop15;/dev/loop16;/dev/loop18;/dev/loop19;/dev/loop17;/dev/loop20;/dev/loop21;/dev/loop22;/dev/loop23;/dev/loop24;/dev/loop25;/dev/loop26;/dev/loop27;/dev/loop28;/dev/loop29;/dev/loop30" --http20x --http20xHosts="google.fr;preottcrageenp-rec.opcoding.com"