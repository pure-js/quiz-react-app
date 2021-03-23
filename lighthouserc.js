module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost/",
      ],
      staticDistDir: './dist',
      isSinglePageApplication: true,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};