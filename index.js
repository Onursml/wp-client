import  pkk  from 'qrcode-terminal';

import pkg from 'whatsapp-web.js';

import { Gamestart } from './game.js';
import {logİd, mods} from './contain.js'
const qrcode =pkk
const { Client, LocalAuth, } = pkg;
import { Commannds }  from './commands.js';
import { MsgListen } from './msgListen.js';


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
const existingGroup = existingGroups.find(group => group.name == groupName);

if (existingGroup) {
    console.log(`"log" adında bir grup zaten mevcut.`);
    logİd.id = existingGroup.id._serialized;
} else {
    console.log(`"log" adında bir grup bulunamadı. Yeni bir grup oluşturuluyor...`);
    const participantsToAdd = ['905523000252@c.us']; // Gruba eklemek istediğiniz kişilerin numaralarını buraya ekleyin
    const result = await client.createGroup('log', participantsToAdd);
    console.log(result);

}


    
  
  
});

const user =[
    {ad:"onur"},
    {ad:"halil"},
    {ad:"zeynep"}
]


 

client.on('message', async (msg) => {
  const chat = await msg.getChat()
  if (msg.body == 'Fener'&& !chat.isGroup) {
    msg.reply('fener şampiii');
  }

  if(mods.afk && !chat.isGroup){
   msg.reply('Şuan mesgulüm, size geri döneceğim')

   }
  

});

client.on('message_revoke_everyone', async (after, before) => {
  const chat= await before.getChat() 
  console.log(after); // message after it was deleted.
  if (before) {
    MsgListen(before,client,chat) // message before it was deleted.
  }
});
 


client.on('message_create', async  (msg) => {
    
    const chat= await msg.getChat()
  
    

    if (msg.fromMe) {
      

    Commannds(msg,chat,client);
}
  if(!chat.isGroup){
   // MassageEvent(msg,chat)
 }


 if(chat.isGroup ){
   Gamestart(msg,chat,client)
  

   
 }
 




    
});

client.initialize();
