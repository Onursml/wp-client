import { logİd, mods } from "./contain.js";
import { afkModChange, info} from "./funcions.js";

export let allowchat=[]
export let state ={
    mod:2
 }
 



 export function Commannds(msg,chat,client) {
  
    if (msg.body.startsWith('.mod')) {
      
    }else if (msg.body.startsWith('.afk')) {
        msg.delete()
        afkModChange(msg);
    }else if (msg.body.startsWith('.test')) {
      
        
        msg.reply('test çalışıyor');
    }else if (msg.body.startsWith('.listenözel')) {
        mods.listenmsgözel=!mods.listenmsgözel
        msg.reply(`listenözel mod değiştirildi ${mods.listenmsgözel}`);
    }else if (msg.body.startsWith('.ali')) {
        mods.ali=!mods.ali
        msg.reply(`ali mod değiştirildi ${mods.ali}`)
    }else if (msg.body.startsWith('.info')) {
        info(msg);
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