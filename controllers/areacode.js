const fs = require('fs');

const getCode = async (ctx) => {
  const { codearea } = ctx.request.body;
  console.log(codearea);
  ctx.status = 200;
};

module.exports = {
  getCode
};
