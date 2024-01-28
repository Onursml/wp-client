
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


export function afkModChange(msg) {
mods.afk=!mods.afk
    msg.reply(`afk mod değiştirildi ${mods.afk}`);

}
 


