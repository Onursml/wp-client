import { updateDoc,doc } from "firebase/firestore";
import { db } from "./firebase.js";
import { logİd, mods } from "./contain.js";
import { afkModChange, info} from "./funcions.js";
import { removeAfk } from "./afkMod.js";

export let allowchat=[]
export let state ={
    mod:2
 }
 



 export async function Commannds(msg,chat,client) {
  
    if (msg.body.startsWith('.mod')) {
        msg.reply(`
        afk:${mods.afk}
        özel:${mods.listenmsgözel}
        ali:${mods.ali}
        whyafk:${mods.whyAfk}`

        )
      
    }else if (msg.body.startsWith('.afk')) {
        msg.delete()
    
       
          afkModChange(msg)
    }else if (msg.body.startsWith('.test')) {
      
        
        msg.reply('test çalışıyor');
    }else if (msg.body.startsWith('.listenözel')) {
   
        await updateDoc(doc(db, "onur", "whatsapp"), {
            listenözel: !mods.listenmsgözel,
    
          });
        msg.reply(`listenözel mod değiştirildi ${mods.listenmsgözel}`);
    }else if (msg.body.startsWith('.ali')) {
        await updateDoc(doc(db, "onur", "whatsapp"), {
            ali: !mods.ali,
    
          });
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