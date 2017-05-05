'use strict';

const Bookshelf = require('../bookshelf.js');

require('./user');
require('./comment');

module.exports = Bookshelf.model('Post', {
  tableName: 'posts',
  hasTimestamps: ['createdAt', 'updatedAt'],
  hidden: [
    'deletedAt',
  ],
  softDelete: true,

  comments: function() {
    return this.hasMany('Comment', 'postId');
  },

  createdBy: function() {
    return this.belongsTo('User', 'createdById');
  },
});
