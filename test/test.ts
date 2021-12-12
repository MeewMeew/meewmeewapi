import { MeewMeew } from '../lib/meewmeew';

const meewmeew = new MeewMeew('');

// meewmeew.accountInfo().then(console.log);

meewmeew.facebookAvatar(4, 'image.png').then(console.log)
