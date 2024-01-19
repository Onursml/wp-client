import  pkk  from 'qrcode-terminal';

import pkg from 'whatsapp-web.js';

import { Gamestart } from './game.js';
import {gamelog} from './contain.js'
const qrcode =pkk
const { Client, LocalAuth, } = pkg;
import { Commannds,MassageEvent }  from './commands.js';
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

client.on('ready', () => {
    console.log('Client is ready!');
    
    
  
  
});

const user =[
    {ad:"onur"},
    {ad:"halil"},
    {ad:"zeynep"}
]


 

client.on('message', async (msg) => {
  if(false){
    const chat= await msg.getChat() 
   MsgListen(msg,client,chat)
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

    Commannds(msg,chat);
}
  if(!chat.isGroup){
   // MassageEvent(msg,chat)
 }


 if(chat.isGroup ){
   Gamestart(msg,chat,client)
  

   
 }
 if(msg.body.startsWith('/anket')){
  
  
 }
 




    
});

client.initialize();
