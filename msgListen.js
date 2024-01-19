import { logİd } from "./contain.js";

let p = true;

export function MsgListen(before, client, chat) {

    const phoneNumberMatch = before.from.match(/[^9](\d+)/);
    const phoneNumber = phoneNumberMatch ? phoneNumberMatch[1] : null;

    const data = `*mesaj atan:* ${phoneNumber} \n *Silinen Mesaj:* ${before.body} \n ${!chat.isGroup ? '' : `*Grup:* ${chat.name}`}`;
    const datap = `*mesaj atan:* ${phoneNumber} \n *Silinen Mesaj:* ${before.body} \n `;

   if(chat.isGroup){
    client.sendMessage(logİd, data);
   }else {client.sendMessage(before.from, datap)}

    console.log(data);
    
    // Fonksiyon bloğuna sadece bir kez girdikten sonra p'yi false yap.
    p = false;


    // 10 saniye sonra p'yi tekrar true yap.
    setTimeout(() => {
      p = true;
    }, 10000); // 10000 milisaniye = 10 saniye
  }
