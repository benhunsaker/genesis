import CMD from 'node-cmd';
import { createPromptModule } from 'inquirer';
import SimpleGit from 'simple-git';

const Prompt = createPromptModule();
const Git = SimpleGit();
const internals = {
    templates: {
        'hapi-genesis': 'git@github.com:benhunsaker/hapi-genesis.git'
    }
};

export default function (template) {

    Prompt([
        {
            name: 'name',
            message: 'name:',
            validate: (input) => (input.replace(/[^a-z0-9_\-]/gi, '_').toLowerCase() === input && input.length < 215 && input.length !== 0)
        },
        {
            name: 'version',
            message: 'version:',
            default: '1.0.0',
            validate: (input) => (/([0-9]+\.[0-9]+\.[0-9]+)?/gi.test(input))
        },
        {
            name: 'description',
            message: 'description:'
        },
        {
            name: 'entryPoint',
            message: 'entry point:',
            default: 'index.js'
        },
        {
            name: 'testCommand',
            message: 'test command:'
        },
        {
            name: 'gitRepo',
            message: 'git repository url:'
        },
        {
            name: 'keywords',
            message: 'keywords:'
        },
        {
            name: 'author',
            message: 'author:'
        },
        {
            name: 'license',
            message: 'license:',
            default: 'MIT'
        },
        {
            type: 'list',
            name: 'template',
            message: 'Choose what template you want to use?',
            choices: Object.keys(internals.templates)
        }
    ]).then((answers) => {

        console.log(answers);
        Git.outputHandler((command, stdout, stderr) => {
                stdout.pipe(process.stdout);
                stderr.pipe(process.stderr);
             })
             .clone(internals.templates[answers.template], `sandbox/${answers.name}`);
    });
}
