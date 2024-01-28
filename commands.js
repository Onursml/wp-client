import { logİd } from "./contain.js";
import { afkModChange} from "./funcions.js";

export let allowchat=[]
export let state ={
    mod:2
 }
 



 export function Commannds(msg,chat,client) {
  
    if (msg.body.startsWith('.mod')) {
      
    }

    else if (msg.body.startsWith('.afk')) {
        msg.delete()
        afkModChange(msg);
       

       

    }

    else if (msg.body.startsWith('.test')) {
      
        
        msg.reply('test çalışıyor');


    }
    

}

export function MassageEvent(msg,chat) {
  
const lew = allowchat.find(x => x.serialized == msg.from);

   
   if (lew===undefined) {
    console.log('kimse yok');
    const client ={ serialized: msg.from ,  chat: false, lastmsg: new Date() }
   allowchat.push(client);
   
   
   }else {
    const saat = new Date();
    const nekadarolldu = saat - lew.lastmsg;

    lew.lastmsg = new Date();
   }  
   
}