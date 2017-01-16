module.exports = {
    bundle: {
        main: {
            scripts: [
                './app/controllers/*.js',
                './app/models/*.js'
            ],
            styles: [
                './public/css/*.css'
            ]
        },
        vendor: {
            scripts: [
                './public/js/controllers/*.js',
                './public/js/services/*.js',
                './public/js/*.js'
            ]
        },
    },
    copy: './public/**/*.{png,svg}'
};