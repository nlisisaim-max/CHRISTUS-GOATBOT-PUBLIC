module.exports = {
  config: {
    name: "خرجو",
    version: "1.0.0",
    author: "Bot",
    role: 1,
    shortDescription: "إخراج عضو بالريبلاي",
    category: "admin"
  },

  onStart: async function ({ api, event }) {

    // خاص يكون Reply على رسالة العضو
    if (!event.messageReply) {
      return api.sendMessage(
        "❌ دير Reply على رسالة العضو وكتب: خرجو",
        event.threadID
      );
    }

    const userID = event.messageReply.senderID;

    try {
      // إخراج العضو من المجموعة
      await api.removeUserFromGroup(userID, event.threadID);

      // روابط الصور
      const images = [
        "https://imglink.cc/cdn/I8AchRKzfF.jpg",
        "https://imglink.cc/cdn/HE_edsI2It.jpg"
      ];

      // اختيار صورة عشوائية
      const image = images[Math.floor(Math.random() * images.length)];

      // إرسال الرابط بعد الإخراج
      api.sendMessage(image, event.threadID);

    } catch (e) {
      console.log(e);
      api.sendMessage(
        "❌ ماقدرتش نخرج العضو. تأكد أن البوت عندو صلاحية الإدارة.",
        event.threadID
      );
    }
  }
};
