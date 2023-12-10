
 
 
 export  function newFunction(msg,client) {
    const params = msg.body.split(' ').slice(1); // Komutu ve id'yi ayır
    const id = params.shift(); // İlk parametre id
    const message = params.join(' '); // Geri kalan parametreleri birleştir

    const serial = '90' + id + "@c.us";
    client.sendMessage(serial, message)
}


export function modChange(msg,client,state) {
 
    const update=msg.body.split(' ')[1];

    if (update) {
        state.mod = update;
        msg.reply('Mod güncellendi: ' + state.mod);
    
    }

}


export function chatEkle(msg,allowchat) {
    const number = msg.body.split(' ')[1];
    const ad = msg.body.split(' ')[2];
    const seri = '90' + number + "@c.us";
    allowchat.push({ serialized: seri, ad: ad, chat: true, lastmsg: new Date() });
    msg.reply('chat eklendi');
    console.log(allowchat);
}
 


