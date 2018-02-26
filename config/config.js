module.exports = {
  development: {
    root: require('path').normalize(__dirname + '/..'),
    app: {
      name: 'Node timer'
    },
      db: 'mongodb://172.17.0.2/noobjs_dev'
  },
  test: {

  },
  production: {
    root: require('path').normalize(__dirname + '/..'),
    app: {
      name: 'Node timer'
    },
    db: process.env.MONGOLAB_URI
  },
  docker: {
    root: require('path').normalize(__dirname + '/..'),
    app: {
      name: 'Node timer'
    },
    db: 'mongodb://mongodb/noobjs_dev'
  }
};
