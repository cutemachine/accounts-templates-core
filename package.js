Package.describe({
    summary: "Meteor sign up and sign in templates core package."
});

Package.on_use(function(api, where) {

    api.use([
        'check',
        'deps',
        'accounts-base',
        'accounts-t9n',
        'iron-router',
    ], ['client', 'server']);

    api.use([
        'minimongo',
        'mongo-livedata',
        'sha',
        'templating'
    ], 'client');

    api.add_files([
        'lib/accounts-templates-core.js',
        'lib/accounts-templates-methods.js',
    ], ['client', 'server']);

    api.imply([
        'accounts-base',
        'accounts-t9n',
        'iron-router',
    ], ['client', 'server']);

    api.export([
        'AccountsTemplates',
    ], ['client', 'server']);
});

Package.on_test(function(api) {
    api.use('accounts-templates-core');
    api.use([
        'tinytest',
        'test-helpers',
        'accounts-t9n',
        'iron-router',
    ], ['client', 'server']);
    api.add_files([
        'tests/accounts-templates-core_tests.js',
    ], ['client', 'server']);
});