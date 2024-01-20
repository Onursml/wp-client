import { logİd } from "./contain.js";



export function MsgListen(before, client, chat) {

    const phoneNumberMatch = before.from.match(/[^9](\d+)/);
    const phoneNumber = phoneNumberMatch ? phoneNumberMatch[1] : null;

    const data = `*mesaj atan:* ${before.from} \n *Silinen Mesaj:* ${before.body} \n ${!chat.isGroup ? '' : `*Grup:* ${chat.name}`}`;
    const datap = `Bir Mesaj Sildiğini fark ettim üzgünüm bunu onurun öğrenmesi gerekiyor :) \n *Silinen Mesaj:* ${before.body} `;

   if(chat.isGroup){
    client.sendMessage(logİd, data);
   }else {client.sendMessage(before.from, datap)}

    console.log(data);
    
    // Fonksiyon bloğuna sadece bir kez girdikten sonra p'yi false yap.
  


    // 10 saniye sonra p'yi tekrar true yap.
  
  }
