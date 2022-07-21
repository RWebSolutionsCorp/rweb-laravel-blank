const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix

// FRONT ASSETS
.scripts([
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    // 'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/@fortawesome/fontawesome-free/css/all.css',
    'resources/js/global.js'
], 'public/js/app.js')

.styles([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'resources/css/global.css'
], 'public/css/app.css')

// CMS ASSETS
.styles(
    [
        'node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css',
        'node_modules/admin-lte/dist/css/adminlte.min.css',
    ],
    'public/css/admin.css'
)

.scripts(
    [
        'node_modules/admin-lte/plugins/jquery/jquery.min.js',
        'node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js',
        'node_modules/admin-lte/dist/js/adminlte.min.js'
    ],
    'public/js/admin.js'
)

.copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts')

;
