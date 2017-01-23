module.exports = {
    bundle: {
        main: {
            scripts: [
                './public/js/*.js',
                './public/js/services/*.js',
                './public/js/controllers/*.js'
            ],
            styles: [
                './public/css/*.css'
            ]
        }
    }
};