
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase.js";
import { AfkList, removeAfk } from "./afkMod.js";
import { state } from "./commands.js";
import {mods } from "./contain.js";



 
 
 export  function newFunction(msg,client) {
    const params = msg.body.split(' ').slice(1); // Komutu ve id'yi ayır
    const id = params.shift(); // İlk parametre id
    const message = params.join(' '); // Geri kalan parametreleri birleştir

    const serial = '90' + id + "@c.us";
    client.sendMessage(serial, message)
}


export function modChange(msg) {
 
    const update=msg.body.split(' ')[1];

    if (update) {
        state.mod = update;
        msg.reply('Mod güncellendi: ' + state.mod);
    
    }else {
        msg.reply(state.mod);
    }

}


export async function afkModChange(msg) {
        // İlk kelimeyi boşluklara göre ayırarak al
        let ilkKelime = msg.body.split(' ')[0];
    
        // İlk kelimenin uzunluğunu hesapla
        let ilkKelimeUzunluk = ilkKelime.length;
        
        // İlk kelimeden sonraki tüm kelimeleri al
        let sonrakiKelimeler = msg.body.substring(ilkKelimeUzunluk + 1);
        await updateDoc(doc(db, "onur", "whatsapp"), {
            afk: !mods.afk,
    
          });
removeAfk()
await updateDoc(doc(db, "onur", "whatsapp"), {
    whyAfk: sonrakiKelimeler,
})

console.log(mods)

    msg.reply(`afk mod değiştirildi ${mods.afk}`);

}
 


export function info(msg) {
    const infoText = `
Kullanılabilir Komutlar:
------------------------

.afk: AFK modunu etkinleştirir ve gerekli işlemleri gerçekleştirir.
.test: Sadece test için kullanılan bir komuttur.
.listenözel: Özel mesaj dinleme modunu değiştirir.
.ali: Ali modunu değiştirir.
`;
    msg.reply(infoText);
}