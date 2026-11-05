const joinedUsers = new Map();

module.exports = {
  config: {
    name: "برا",
    aliases: ["خروج", "طرد", "برا"],
    version: "1.0.0",
    author: "SHTTOT",
    countDown: 2,
    role: 1,
    description: "إزالة شخص بالرد أو إزالة آخر الأعضاء الذين دخلوا",
    category: "group",
    guide: {
      en: "{pn} ← مع الرد على الشخص\n{pn} 2 ← إزالة آخر شخصين دخلو\n{pn} 10 ← إزالة آخر 10 دخلو"
    }
  },

  onStart: async function ({ api, event, args }) {
    const { threadID, messageID, messageReply } = event;

    // =========================
    // برا ← بالرد على شخص
    // =========================
    if (messageReply && messageReply.senderID) {
      const uid = messageReply.senderID;

      try {
        await api.removeUserFromGroup(uid, threadID);

        return api.sendMessage(
          "╔════════════════════╗\n" +
          "      🚪 تمت الإزالة 🚪\n" +
          "╚════════════════════╝\n\n" +
          `👤 العضو: ${uid}\n` +
          "🤣☝🏻 تمت إزالته من المجموعة.\n\n" +
          "🍆 برا من هنا 😂",
          threadID
        );
      } catch (err) {
        return api.sendMessage(
          "❌ مقدرتش نخرج هاد العضو.\n" +
          "تأكد أن البوت عندو صلاحية الأدمن.",
          threadID
        );
      }
    }

    // =========================
    // برا رقم
    // =========================
    let amount = parseInt(args[0]);

    if (isNaN(amount) || amount < 1) {
      return api.sendMessage(
        "📌 طريقة الاستعمال:\n\n" +
        "↩️ رد على شخص وكتب:\n" +
        "برا\n\n" +
        "👥 أو كتب:\n" +
        "برا 2\n" +
        "برا 5\n" +
        "برا 10\n\n" +
        "وسيتم إخراج آخر الأعضاء الذين تم تسجيل دخولهم.",
        threadID
      );
    }

    // الحد الأقصى للحماية
    if (amount > 50) amount = 50;

    const list = joinedUsers.get(threadID) || [];

    if (list.length === 0) {
      return api.sendMessage(
        "❌ ما عنديش أعضاء جدد مسجلين باش نخرجهم.",
        threadID
      );
    }

    // ناخدو آخر الأعضاء
    const users = list.slice(-amount).reverse();

    let removed = 0;

    for (const uid of users) {
      try {
        await api.removeUserFromGroup(uid, threadID);
        removed++;

        // نحيدوه من اللائحة
        const index = list.indexOf(uid);
        if (index !== -1) list.splice(index, 1);

      } catch (err) {
        // إذا فشل الإخراج، نكمل مع الباقي
      }
    }

    joinedUsers.set(threadID, list);

    if (removed === 0) {
      return api.sendMessage(
        "❌ مقدرتش نخرج حتى واحد.\n" +
        "تأكد أن البوت عندو صلاحية الأدمن.",
        threadID
      );
    }

    return api.sendMessage(
      "╔════════════════════╗\n" +
      "       🚨 الإزالة 🚨\n" +
      "╚════════════════════╝\n\n" +
      `👥 تمت إزالة: ${removed} عضو\n\n` +
      "🤣☝🏻 تمت الإزالة من المجموعة.\n" +
      "🚪 برااااا 😂",
      threadID
    );
  },

  // =========================
  // مراقبة الناس اللي دخلو
  // =========================
  onEvent: async function ({ api, event }) {
    if (event.logMessageType !== "log:subscribe") return;

    const threadID = event.threadID;
    const added = event.logMessageData?.addedParticipants;

    if (!added || !Array.isArray(added)) return;

    if (!joinedUsers.has(threadID)) {
      joinedUsers.set(threadID, []);
    }

    const list = joinedUsers.get(threadID);

    for (const user of added) {
      if (!user.userFbId) continue;

      // منع التكرار
      if (!list.includes(user.userFbId)) {
        list.push(user.userFbId);
      }
    }

    // نخليو غير آخر 100 عضو مسجل
    if (list.length > 100) {
      list.splice(0, list.length - 100);
    }

    joinedUsers.set(threadID, list);
  }
};
