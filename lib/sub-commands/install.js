import SimpleGit from 'simple-git';

const Git = SimpleGit();
const internals = {
    'hapi-genesis': 'git@github.com:benhunsaker/hapi-genesis.git'
};

export default function (template) {

    Git.outputHandler((command, stdout, stderr) => {
            stdout.pipe(process.stdout);
            stderr.pipe(process.stderr);
         })
         .clone(internals[template], `templates/${template}`);

}
