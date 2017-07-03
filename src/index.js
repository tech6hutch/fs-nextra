/** @namespace fsn/nextra */
const nextra = {
	copy: require('./nextra/copy'),
	createFile: require('./nextra/createFile'),
	createFileAtomic: require('./nextra/createFileAtomic'),
	createLink: require('./nextra/createLink'),
	createLinkAtomic: require('./nextra/createLinkAtomic'),
	createSymlink: require('./nextra/createSymlink'),
	createSymlinkAtomic: require('./nextra/createSymlinkAtomic'),
	emptyDir: require('./nextra/emptyDir'),
	emptydir: require('./nextra/emptyDir'),
	ensureDir: require('./nextra/mkdirs'),
	ensureFile: require('./nextra/createFile'),
	ensureFileAtomic: require('./nextra/createFileAtomic'),
	ensureLink: require('./nextra/createLink'),
	ensureLinkAtomic: require('./nextra/createLinkAtomic'),
	ensureSymlink: require('./nextra/createSymlink'),
	ensureSymlinkAtomic: require('./nextra/createSymlinkAtomic'),
	linkAtomic: require('./nextra/linkAtomic'),
	mkdirp: require('./nextra/mkdirs'),
	mkdirs: require('./nextra/mkdirs'),
	move: require('./nextra/move'),
	outputFile: require('./nextra/outputFile'),
	outputFileAtomic: require('./nextra/outputFileAtomic'),
	outputJSON: require('./nextra/outputJSON'),
	outputJSONAtomic: require('./nextra/outputJSONAtomic'),
	outputJson: require('./nextra/outputJSON'),
	outputJsonAtomic: require('./nextra/outputJSONAtomic'),
	pathExists: require('./nextra/pathExists'),
	readJSON: require('./nextra/readJSON'),
	readJson: require('./nextra/readJSON'),
	remove: require('./nextra/remove'),
	writeFileAtomic: require('./nextra/writeFileAtomic'),
	writeJSON: require('./nextra/writeJSON'),
	writeJSONAtomic: require('./nextra/writeJSONAtomic'),
	writeJson: require('./nextra/writeJSON'),
	writeJsonAtomic: require('./nextra/writeJSONAtomic')
};

module.exports = Object.assign(require('./fs'), nextra);
