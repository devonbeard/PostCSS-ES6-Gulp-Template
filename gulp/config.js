var dest = './dist';

module.exports = {
  browserSync: {
    proxy: './',
    files: ['./*/**']
  },
  css: {
    src: './css/**/*.css',
    dest: dest + '/css/',
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images' // Used by the image-url helper
    },
    guidelines: './gulp/guidelines/.csslintrc'
  },
  js: {
    src: './js/**/*.js',
    guidelines: './gulp/guidelines/.jshintrc'
  },
  images: {
    src: '/img/**',
    dest: dest + '/img'
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './js/app.js',
      dest: dest + '/js/',
      outputName: 'app.js',
      // Additional file extentions to make optional
      transform: [
        ['babelify']
      ],
      extensions: [],
      // list of modules to make require-able externally
      require: ['jquery']
    }]
  },
  production: {
    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/js/*.js',
    dest: dest + '/min'
  },
};