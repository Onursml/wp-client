import { logİd } from "./contain.js";



export function MsgListen(before, client, chat) {



    const data = `*mesaj atan:* ${before.id.participant} \n *Silinen Mesaj:* ${before.body} \n ${!chat.isGroup ? '' : `*Grup:* ${chat.name}`}`;
    const datap = `Bir Mesaj Sildiğini fark ettim üzgünüm bunu onurun öğrenmesi gerekiyor :) \n *Silinen Mesaj:* ${before.body} `;

   if(chat.isGroup){
    client.sendMessage(logİd.id, data);
   }else {client.sendMessage(before.from, datap)}


    
    // Fonksiyon bloğuna sadece bir kez girdikten sonra p'yi false yap.
  


    // 10 saniye sonra p'yi tekrar true yap.
  
  }
