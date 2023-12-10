import  pkk  from 'qrcode-terminal';

import pkg from 'whatsapp-web.js';
const qrcode =pkk
const { Client, LocalAuth } = pkg;
import{ chatEkle,modChange,} from './funcions.js';
import {  main } from './openia.js';

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
 export let state ={
    mod:2
 }

 export let allowchat=[
    { serialized:"905523000252@c.us", ad:"onur", chat:true,
lastmsg : new Date() },

 ]

 export let gbtmgs=[]


client.on('message_create', async  (msg) => {
    
    const chat= await msg.getChat()
  
    
    // Fired on all message creations, including your own
    if (msg.fromMe) {

        if (msg.body == 'TEST') {
            // Send a new message as a reply to the current one
            msg.reply('TEST ÇALIŞIYOR');
            console.log(msg.from);
        
        }
     
     else if (msg.body.startsWith('!get')) {
    
    }
  


    else if (msg.body.startsWith('!mod')) {
        modChange(msg,client,state); }

    else if (msg.body.startsWith('!chatekle')) {
        chatEkle(msg,allowchat);

  
    }

    else if (msg.body.startsWith('!')) {
     main(msg) }
}
 else if(!chat.isGroup){
    if(state.mod==2){
        main(msg)
    }
 }


});

client.initialize();
