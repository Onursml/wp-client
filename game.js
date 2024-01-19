import { gamelog } from "./contain.js"

export function Gamestart(msg,chat,client){
    if(gamelog.game==0 && msg.body.startsWith('.start')&&msg.fromMe){
        gamelog.game=1
        gamelog.alımlar=true
        gamelog.chat=chat.id._serialized
        msg.reply('*oyun*  *başlatıldı* *katılmak* *için* */join* *yazın* *30* *saniye* *içinde* *oyun* *başlayacak*')
        setTimeout(() => {
           
    
            gamelog.alımlar=false
          
            // Dizinin uzunluğuna göre rol değişikliği yap
if (gamelog.oyuncular.length < 3) {
    // En az 3 kişi ise random birinin rolünü true yap
    client.sendMessage(gamelog.chat, '*en* *az* *3* *kişi* *olmalı*')
    gamelog.game=0
   
  }
  else if(gamelog.oyuncular.length >= 3){
    const randomIndex = Math.floor(Math.random() * gamelog.oyuncular.length);
    gamelog.oyuncular[randomIndex].rol = true;
  

    client.sendMessage(gamelog.chat, 'roller dağıtıldı özelden rolülünüzü söyledim')
    for(let i=0; i<gamelog.oyuncular.length;i++){
        if(gamelog.oyuncular[i].rol==true){
            client.sendMessage(gamelog.oyuncular[i].number, 'sen bir vampirsin saklanman lazım ')
        }
        else{
            client.sendMessage(gamelog.oyuncular[i].number, 'sen bir köylüsün vampiri bulman lazım')
        
    }
    gamelog.game=2
    console.log(gamelog.oyuncular)
  
  }}
  
  
  console.log(gamelog.oyuncular)
           
        

        },10000)
    }

    if(gamelog.alımlar==true && msg.body.startsWith('/join')&&gamelog.chat==chat.id._serialized&&gamelog.game==1){
        const ad=msg.body.split(' ')[1];

        let id = Object.keys(gamelog.oyuncular).length;
        const isim =ad
        const number= msg.from
        const rol =false
        gamelog.oyuncular.push({ isim: isim, number: number, rol: rol,oylama:null })
       



        msg.reply(`${ad} olarak oyuna katıldınız`)

    
    }
    if(gamelog.game==3&& !gamelog.alımlar&& msg.body.startsWith('/oy')){
        const oy=msg.body.split(' ')[1];
        gamelog.oyuncular.forEach(oya =>{
            if(oya.isim==oy){
                msg.reply('oy kullanıldı')
               oya.oylama=oy
            }
         
        } )

        
        const oyuncu=gamelog.oyuncular.find(oyuncu => oyuncu.number === msg.from);
        oyuncu.oylama=oy
        
       
    

    }

    if(gamelog.game==2){
    
   
    gamelog.game=3
    console.log(gamelog.oyuncular)
    Oylama(msg,client,chat)}
     
    

    


}

let oylamaTimeout;

function Oylama(msg, client, chat) {
  
client.sendMessage(Poll('kim ölsün',['hasan ','ahmet']))

    // Önceki zamanlayıcıyı temizle
    if (oylamaTimeout) {
        clearTimeout(oylamaTimeout);
    }

    // Yeni zamanlayıcıyı ayarla
    oylamaTimeout = setTimeout(() => {
        Oylama(msg, client, chat);
        OylamaSonucunuDegerlendir(msg, client, chat);
    }, 60000);
}

function OylamaSonucunuDegerlendir(msg, client, chat) {
}