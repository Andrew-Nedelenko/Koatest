const fs = require('fs');
const shell = require('shelljs');

const postCode = async (ctx) => {
  const { codearea } = ctx.request.body;
  fs.writeFileSync('uploads/temp.cpp', codearea);
  shell.exec('g++ uploads/temp.cpp -o uploads/temp.out');
  ctx.status = 200;
};

const getCode = async (ctx) => {
  const output = shell.exec('./uploads/temp.out');
  ctx.body = output;
  ctx.status = 200;
};

module.exports = {
  postCode, getCode
};
