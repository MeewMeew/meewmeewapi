import MeewMeew from '../index';

const facebook = new MeewMeew.Facebook('Meew_x6dtD22KeikhrOZWhClaSK64cvAywg');

const tiktok = new MeewMeew.Tiktok('Meew_x6dtD22KeikhrOZWhClaSK64cvAywg');

const account = new MeewMeew.Image('Meew_x6dtD22KeikhrOZWhClaSK64cvAywg');

account.random('wibu', 'picture.jpg').then(function (data) {
    console.log(data);
})
// facebook.avatar('4', './avatar.jpg').then(function (data) {
//   console.log(data);
// }).catch(function (error) {
//   console.log(error);
// });

// tiktok.video('https://www.tiktok.com/@nts_107/video/7100399940161096986', './video.mp4').then(function (data) {
//   console.log(data);
// }).catch(function (error) {
//   console.log(error);
// });