import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase.js";
import { getirdoc } from "./deneme.js";
const fire= await getirdoc()

export let mods = {afk:fire.afk, listenmsgözel:fire.listenözel ,ali:fire.ali , isim:'isimsiz',whyAfk:fire.whyAfk}

export const systemprompt=`sen ${mods.isim}'un asistanısın ve onur mesajlara cevap veremdiğinde  mesajları sana yönlendiriyor. mesajlara cevap ver ve hemen aşağıda mesaj atanlara verebilceğin bilgiler diye yazı yazılı olacak eğer bilgi yoksa ise sadace onurun mesgul oldugunu söyle ve yardumcı olabilirmiyim diye sorma konuyu kısa tut ve resmi davran 

}`

export let gamelog ={game:0,alımlar:false ,chat:'',oyuncular:[
    { isim: 'onur', number: '905523000252@c.us', rol: false, oylama:null },
     { isim:'serkan', number: '905523000252@c.us', rol: false, oylama:null },
    { isim: 'ahmet', number: '905523000252@c.us', rol: false, oylama:null }
   
]}

onSnapshot(doc(db, "onur", "whatsapp"), (snapshot) => {
    mods.afk = snapshot.data().afk; 
    mods.ali=snapshot.data().ali// Dokümandaki afk değerini günceller
    mods.whyAfk=snapshot.data().whyAfk// Dokümandaki afk değerini günceller
    mods.listenmsgözel=snapshot.data().listenözel// Dokümandaki afk değerini günceller
});

export const logİd={id:null}

