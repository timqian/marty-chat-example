var uuid = require('uuid').v1;
var _ = require('underscore');

module.exports = {
  createMessage: function (text, roomId) {
    return {
      text: text,
      id: uuid(),
      roomId: roomId,
      cid: this.cid()
    };
  },
  cid: function () {
    return _.uniqueId('message');
  }
};