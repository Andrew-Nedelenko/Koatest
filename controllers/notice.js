

const testapi = async (ctx) => {
  ctx.body = [{
    id: 1,
    name: 'John Dou',
    age: 24,
    hoobies: [
      'music',
      'dance'
    ],
    email: 'jdou@gmail.com',
    img: 'https://e1.am.phnx.pics/phnx/bigmir/70/40/69/704069/255b4eb08644fe9fef7abdfe2869d031-quality_80Xresize_crop_1Xallow_enlarge_0Xw_730Xh_562.jpg'
  },
  {
    id: 2,
    name: 'Bob Smith',
    age: 27,
    email: 'bobs@gmail.com',
    img: 'https://e1.am.phnx.pics/phnx/bigmir/70/36/80/703680/4e483e632fc93769b7117284b4f6dc2f-quality_80Xresize_crop_1Xallow_enlarge_0Xw_730Xh_562.jpg'
  },
  {
    id: 3,
    name: 'Alice',
    age: '23',
    email: 'alice@gmail.com',
    img: 'https://e1.am.phnx.pics/phnx/bigmir/70/39/53/703953/e8cbadf95ecc4fef3ce4bf86beb40313-quality_80Xresize_crop_1Xallow_enlarge_0Xw_730Xh_562.jpg'
  }];
};


module.exports = {
  testapi
};
