import MeewMeew from '../lib/meewmeew';

const meewmeew = new MeewMeew('<YOUR API KEY HERE>');

// meewmeew.accountInfo().then(console.log);

meewmeew.facebookAvatar(4, 'image.png').then(console.log)
