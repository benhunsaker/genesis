import Genesis from 'commander';

import Package from '../package.json';
import Install from './sub-commands/install';
import Create from './sub-commands/create';


Genesis.version(Package.version);

Genesis.command('install <template>')
    .description('install a new gensis template')
    .action(Install);

Genesis.command('create')
    .description('run the given remote command')
    .action(Create);

Genesis.parse(process.argv);

export default Genesis;
