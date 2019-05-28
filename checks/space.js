const df = require('node-df');

const { exitWithFailure } = require('../tools');

module.exports = function (args) {
  const filters = args.spaceIgnorePartitions ? args.spaceIgnorePartitions.split(';') : []; // coma separated
	const limit = args.spaceLimit || 60; // in percent
	
	df(function (err, partitions) {
		let fail = false;
		partitions.forEach(function (partition) {
			const { filesystem, size, used, available, mount} = partition;
	
			if (filters.includes(filesystem)) {
				return;
			}
	
			const percent = 100 * used / size;
			if (percent > limit) {
				console.log(`${mount} is used at ${percent.toFixed(2)}%`);
				exitWithFailure();
			}
		});
	});
};
