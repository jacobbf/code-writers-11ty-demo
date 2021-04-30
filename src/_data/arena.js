const Arena = require("are.na");
const arena = new Arena();

let data;

const getData = function() {
  return arena.channel("good-images-kxr0s9wzmpk").get().then(chan => {
    return chan.contents;
  })
};

module.exports = getData();