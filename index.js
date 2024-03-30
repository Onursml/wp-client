import  pkk  from 'qrcode-terminal';

import pkg from 'whatsapp-web.js';


import {logİd, mods} from './contain.js'
const qrcode =pkk
const { Client, LocalAuth, } = pkg;
import { Commannds }  from './commands.js';
import { MsgListen } from './msgListen.js';
import { afkMod } from './afkMod.js';

const name =process.argv[2]
mods.isim=name
console.log(mods.isim)



const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
		args: ['--no-sandbox'],
	}
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready',async () => {
  
console.log('ready')

const groupName = 'Log';
const existingGroups = await client.getChats();
console.log('1');
const existingGroup = existingGroups.find(group => group.name == groupName);
console.log('2');


if (existingGroup) {
    console.log(`"log" adında bir grup zaten mevcut.`);
    logİd.id = existingGroup.id._serialized;
} else {
    console.log(`"log" adında bir grup bulunamadı. Yeni bir grup oluşturuluyor...`);
    const participantsToAdd = ['905523000252@c.us']; // Gruba eklemek istediğiniz kişilerin numaralarını buraya ekleyin
    const result = await client.createGroup('log', participantsToAdd);
    console.log(result);

}


    client.sendMessage(logİd.id, 'Bot aktif');
  
  
});




 

client.on('message', async (msg) => {
  const chat = await msg.getChat()
  if(!chat.isGroup){
    if (msg.body == 'Fener'&& !chat.isGroup && mods.ali) {
      msg.reply('fener şampiii');
    }
    else if(msg.body == 'Cengiz'&& !chat.isGroup && mods.ali){
      msg.reply('Undertaker');
    }
  
    if(mods.afk && !chat.isGroup){
   afkMod(msg.from,msg)
  
     }

  }
  

});

client.on('message_revoke_everyone', async (after, before) => {
  const chat= await before.getChat() 

  if (before) {
    console.log('mesaj silindi')
    console.log(before.body)
    MsgListen(before,client,chat) // message before it was deleted.
  }
});
 


client.on('message_create', async  (msg) => {
    
    const chat= await msg.getChat()
  
    

    if (msg.fromMe) {
      

    Commannds(msg,chat,client);
}
  if(!chat.isGroup){
 
 }



 




    
});

client.initialize();
