module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'not ie <= 8',
        'Firefox >= 20',
        'iOS >= 8',
        'Android > 4.4',
      ],
    },
  },
}
