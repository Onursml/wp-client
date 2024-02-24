export let game={
    chatname:"",
    isplaygame:false,
    players:[],
    playersrol:[],
    durum:[]

}

const msg={
    from:"onur",}
export let chat={
        name:"saadettin"
    }


export function gameWampir(chat) {
    game.isplaygame=true
    console.log("oyun başladı")
    game.chatname=chat.name
  
}



export function gameWampirAddplayer(msg,chat,client) {
    if (game.isplaygame&&game.chatname==chat.name) {
        game.players.push(msg.from)
  
        client.sendMessage(msg.from, "oyuna katıldınız lütfen rollerin dağıtılmasını bekleyiniz ")
    }
        

    }


gameWampir(chat)