import { logİd, mods } from "./contain.js";



export function MsgListen(before, client, chat) {



    const data = `*mesaj atan:* ${before.author||before.id.participant} \n *Silinen Mesaj:* ${before.body} \n ${!chat.isGroup ? '' : `*Grup:* ${chat.name}`}`;
    const datap = `Bir Mesaj Sildiğini fark ettim üzgünüm bunu ${mods.isim} öğrenecek :) \n *Silinen Mesaj:* ${before.body} `;
   console.log(before)
   if(chat.isGroup){
    client.sendMessage(logİd.id, data);
   }else if (!chat.isGroup&&mods.listenmsgözel) {
    client.sendMessage(before.from, datap);
   }else{
    client.sendMessage(logİd.id, data);
   }


    
    // Fonksiyon bloğuna sadece bir kez girdikten sonra p'yi false yap.
  


    // 10 saniye sonra p'yi tekrar true yap.
  
  }
