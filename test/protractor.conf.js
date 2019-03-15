exports.config = {
    //address of the selenium webserver - this needs to be installed
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //address of initial page website under test
    baseUrl: 'http://automate.safebear.co.uk:8080/',

    //custom test framework (in this case Cucumber)
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    //reporting framework
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
            //read the options part for more options
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }],

    //location of feature files
    specs: [
        'features/*.feature'
    ],

    //where to find all the bits cucumber needs - more info at npx cucumber-js --help
    cucumberOpts: {
        require: 'features/step_definitions/*.steps.js',
        tags: false,
        format: 'json:/tmp/results.json',
        profile: false,
        'no-source': true
        
    }

};