import { main } from "./openia.js"

export let AfkList=[
    
]


export function addAfk(id,step){
    AfkList.push({id:id,step:step})
}


export function removeAfk(){
AfkList=[]
}



export function afkMod(id,msg){
    let afk=AfkList.find(x=>x.id==id)
    if(afk===undefined){
     
        msg.reply('_Onur şuanda mesgul oldugunu bildirdi, en kısa zamanda size geri dönecektir_ \n *Asistan*')
     AfkList.push({id:id,step:1})   
     console.log(AfkList)
    }
    else if(afk.step==1){ 
        
        try{ main(msg)}
    catch(e){console.log(e)}}

  
 
}



