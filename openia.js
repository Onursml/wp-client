import OpenAI from "openai";
import { systemprompt } from "./contain.js";
import 'dotenv/config'

const openai = new OpenAI({
    apiKey: process.env.open_key,
});

// Kullanıcıları depolamak için bir nesne oluştur
const userChatHistories = {};

export async function main(msg) {
  // Kullanıcıya özel sohbet geçmişini al veya oluştur
  const userId = msg.from;
  let chatHistory = userChatHistories[userId] || [];
  
  // Yeni kullanıcı mesajını sohbet geçmişine ekle
  const newUserMessage = { role: "user", content: msg.body };
  chatHistory.push(newUserMessage);

  // Sistem mesajını ve kullanıcı mesajlarını içeren sohbet geçmişini oluştur
  const completeChatHistory = [
    { role: "system", content: systemprompt },
    ...chatHistory
  ];

  // OpenAI API'ya sohbet geçmişini ileterek tamamlama yap
  const completion = await openai.chat.completions.create({
    messages: completeChatHistory,
    model: "gpt-3.5-turbo",
  
    
   
  });

  // Botun cevabını sohbet geçmişine ekle
  const botReply = { role: "assistant", content: completion.choices[0].message.content };
  chatHistory.push(botReply);

  // Yanıtı kullan
  const response = completion.choices[0].message.content;

  msg.reply(kelimeleriAltCizgiIleAl(response));



  // Kullanıcıya özel sohbet geçmişini güncelle
  userChatHistories[userId] = chatHistory;

  // Eğer chatHistory dizisinin uzunluğu 6'dan fazla ise, en eski mesajları sil
  if (chatHistory.length > 20) {
    chatHistory = chatHistory.slice(-20);
  }
}
function kelimeleriAltCizgiIleAl(girisMetni) {
    var kelimeler = girisMetni.split(" ");
    var yeniMetin = kelimeler.map(function(kelime) {
        return "_" + kelime + "_";
    }).join(" ");
    return yeniMetin; 
}