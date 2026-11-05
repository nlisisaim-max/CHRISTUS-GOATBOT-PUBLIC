const games = new Map();

const EMOJIS = [
  { emoji: "🍎", answers: ["تفاحة", "تفاح", "apple"] },
  { emoji: "🍌", answers: ["موز", "banana"] },
  { emoji: "🍊", answers: ["برتقال", "orange"] },
  { emoji: "🍉", answers: ["بطيخ", "دلاح", "watermelon"] },
  { emoji: "🍓", answers: ["فراولة", "فريز", "strawberry"] },
  { emoji: "🍇", answers: ["عنب", "grape"] },
  { emoji: "🍒", answers: ["كرز", "cherry"] },
  { emoji: "🍑", answers: ["خوخ", "peach"] },
  { emoji: "🍍", answers: ["أناناس", "pineapple"] },
  { emoji: "🥭", answers: ["مانجا", "مانغو", "mango"] },
  { emoji: "🥝", answers: ["كيوي", "kiwi"] },
  { emoji: "🥥", answers: ["جوز الهند", "coconut"] },
  { emoji: "🍋", answers: ["ليمون", "lemon"] },
  { emoji: "🍐", answers: ["إجاص", "كمثرى", "pear"] },

  { emoji: "🍕", answers: ["بيتزا", "pizza"] },
  { emoji: "🍔", answers: ["برغر", "برجر", "hamburger"] },
  { emoji: "🍟", answers: ["بطاطس", "فريت", "fries"] },
  { emoji: "🌭", answers: ["هوت دوغ", "hotdog"] },
  { emoji: "🌮", answers: ["تاكو", "taco"] },
  { emoji: "🍿", answers: ["فشار", "بوب كورن", "popcorn"] },
  { emoji: "🍩", answers: ["دونات", "donut"] },
  { emoji: "🍪", answers: ["بسكويت", "cookie"] },
  { emoji: "🍰", answers: ["كيكة", "كعكة", "cake"] },
  { emoji: "🍫", answers: ["شكولاتة", "شوكولا", "chocolate"] },
  { emoji: "🍦", answers: ["ايس كريم", "مثلجات", "ice cream"] },
  { emoji: "🍯", answers: ["عسل", "honey"] },

  { emoji: "🐱", answers: ["قط", "قطة", "cat"] },
  { emoji: "🐶", answers: ["كلب", "dog"] },
  { emoji: "🐭", answers: ["فأر", "mouse"] },
  { emoji: "🐹", answers: ["هامستر", "hamster"] },
  { emoji: "🐰", answers: ["أرنب", "rabbit", "bunny"] },
  { emoji: "🦊", answers: ["ثعلب", "fox"] },
  { emoji: "🐻", answers: ["دب", "bear"] },
  { emoji: "🐼", answers: ["باندا", "panda"] },
  { emoji: "🐨", answers: ["كوالا", "koala"] },
  { emoji: "🐯", answers: ["نمر", "tiger"] },
  { emoji: "🦁", answers: ["أسد", "lion"] },
  { emoji: "🐮", answers: ["بقرة", "cow"] },
  { emoji: "🐷", answers: ["خنزير", "pig"] },
  { emoji: "🐸", answers: ["ضفدع", "frog"] },
  { emoji: "🐵", answers: ["قرد", "monkey"] },
  { emoji: "🐔", answers: ["دجاجة", "دجاج", "chicken"] },
  { emoji: "🐧", answers: ["بطريق", "penguin"] },
  { emoji: "🐦", answers: ["طائر", "عصفور", "bird"] },
  { emoji: "🦆", answers: ["بطة", "duck"] },
  { emoji: "🦅", answers: ["نسر", "eagle"] },
  { emoji: "🦉", answers: ["بومة", "owl"] },
  { emoji: "🐺", answers: ["ذئب", "wolf"] },
  { emoji: "🐴", answers: ["حصان", "horse"] },
  { emoji: "🦄", answers: ["وحيد القرن", "يونيكورن", "unicorn"] },
  { emoji: "🐝", answers: ["نحلة", "bee"] },
  { emoji: "🦋", answers: ["فراشة", "butterfly"] },
  { emoji: "🐌", answers: ["حلزون", "snail"] },
  { emoji: "🐍", answers: ["ثعبان", "حية", "snake"] },
  { emoji: "🐢", answers: ["سلحفاة", "turtle"] },
  { emoji: "🐙", answers: ["اخطبوط", "octopus"] },
  { emoji: "🦀", answers: ["سرطان", "crab"] },
  { emoji: "🐟", answers: ["سمكة", "سمك", "fish"] },
  { emoji: "🐬", answers: ["دلفين", "دولفين", "dolphin"] },
  { emoji: "🐳", answers: ["حوت", "whale"] },
  { emoji: "🦈", answers: ["قرش", "سمك القرش", "shark"] },

  { emoji: "🌹", answers: ["وردة", "ورد", "rose"] },
  { emoji: "🌻", answers: ["دوار الشمس", "عباد الشمس", "sunflower"] },
  { emoji: "🌴", answers: ["نخلة", "palm"] },
  { emoji: "🌵", answers: ["صبار", "cactus"] },
  { emoji: "🌲", answers: ["شجرة", "tree"] },
  { emoji: "🌙", answers: ["قمر", "moon"] },
  { emoji: "☀️", answers: ["شمس", "sun"] },
  { emoji: "⭐", answers: ["نجمة", "star"] },
  { emoji: "🌈", answers: ["قوس قزح", "rainbow"] },
  { emoji: "☁️", answers: ["سحابة", "غيمة", "cloud"] },
  { emoji: "🌧️", answers: ["مطر", "rain"] },
  { emoji: "❄️", answers: ["ثلج", "snow"] },
  { emoji: "🔥", answers: ["نار", "fire"] },
  { emoji: "💧", answers: ["ماء", "قطرة", "water"] },

  { emoji: "⚽", answers: ["كرة القدم", "كرة", "football", "soccer"] },
  { emoji: "🏀", answers: ["كرة السلة", "basketball"] },
  { emoji: "🏈", answers: ["كرة القدم الأمريكية", "american football"] },
  { emoji: "⚾", answers: ["بيسبول", "baseball"] },
  { emoji: "🎾", answers: ["تنس", "كرة المضرب", "tennis"] },
  { emoji: "🏐", answers: ["كرة الطائرة", "volleyball"] },
  { emoji: "🏆", answers: ["كأس", "جائزة", "trophy"] },
  { emoji: "🥇", answers: ["ميدالية ذهبية", "ذهبية", "gold medal"] },

  { emoji: "🚗", answers: ["سيارة", "car"] },
  { emoji: "🚕", answers: ["طاكسي", "تاكسي", "taxi"] },
  { emoji: "🚌", answers: ["حافلة", "طوبيس", "bus"] },
  { emoji: "🚓", answers: ["شرطة", "سيارة الشرطة", "police"] },
  { emoji: "🚑", answers: ["اسعاف", "ambulance"] },
  { emoji: "🚒", answers: ["اطفاء", "شاحنة اطفاء", "fire truck"] },
  { emoji: "🚲", answers: ["دراجة", "بيكالة", "bicycle", "bike"] },
  { emoji: "✈️", answers: ["طائرة", "طيارة", "plane", "airplane"] },
  { emoji: "🚁", answers: ["هليكوبتر", "مروحية", "helicopter"] },
  { emoji: "🚢", answers: ["سفينة", "باخرة", "ship"] },
  { emoji: "🚀", answers: ["صاروخ", "rocket"] },

  { emoji: "📱", answers: ["هاتف", "تلفون", "موبايل", "phone"] },
  { emoji: "💻", answers: ["حاسوب", "كمبيوتر", "computer"] },
  { emoji: "⌚", answers: ["ساعة", "ساعة يد", "watch"] },
  { emoji: "📷", answers: ["كاميرا", "camera"] },
  { emoji: "📺", answers: ["تلفاز", "تلفزيون", "tv"] },
  { emoji: "🎧", answers: ["سماعات", "سماعة", "headphones"] },
  { emoji: "🎮", answers: ["بلايستيشن", "لعبة", "يد التحكم", "game"] },
  { emoji: "⌨️", answers: ["لوحة المفاتيح", "كلافي", "keyboard"] },
  { emoji: "🖱️", answers: ["فأرة", "ماوس", "mouse"] },

  { emoji: "🎸", answers: ["قيتار", "غيتار", "guitar"] },
  { emoji: "🎹", answers: ["بيانو", "piano"] },
  { emoji: "🥁", answers: ["طبل", "drum"] },
  { emoji: "🎤", answers: ["ميكروفون", "microphone"] },
  { emoji: "🎬", answers: ["فيلم", "سينما", "movie"] },
  { emoji: "🎁", answers: ["هدية", "gift"] },
  { emoji: "🎈", answers: ["بالون", "بالونة", "balloon"] },
  { emoji: "🎂", answers: ["عيد ميلاد", "كعكة", "birthday cake"] },

  { emoji: "👑", answers: ["تاج", "crown"] },
  { emoji: "💎", answers: ["الماس", "ألماس", "diamond"] },
  { emoji: "❤️", answers: ["قلب", "حب", "heart"] },
  { emoji: "💔", answers: ["قلب مكسور", "قلب محطم", "broken heart"] },
  { emoji: "😂", answers: ["ضحك", "يضحك", "laugh"] },
  { emoji: "😭", answers: ["بكاء", "يبكي", "cry"] },
  { emoji: "😡", answers: ["غضب", "غاضب", "angry"] },
  { emoji: "😴", answers: ["نوم", "نعاس", "sleep"] },
  { emoji: "😎", answers: ["نظارات", "كول", "cool"] },
  { emoji: "🤔", answers: ["تفكير", "يفكر", "thinking"] },
  { emoji: "🥳", answers: ["احتفال", "فرح", "party"] },
  { emoji: "😱", answers: ["خوف", "مصدوم", "scared"] }
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .trim()
    .replace(/[ًٌٍَُِّْـ]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه");
}

function getGame(threadID) {
  if (!games.has(threadID)) {
    games.set(threadID, {
      players: new Map(),
      running: false,
      waitingAnswer: false,
      currentEmoji: null,
      round: 0,
      timer: null,
      choosing: null,
      used: []
    });
  }

  return games.get(threadID);
}

function alivePlayers(game) {
  return [...game.players.entries()]
    .filter(([id, player]) => player.hearts > 0);
}

function playersList(game) {
  if (game.players.size === 0) {
    return "❌ ماكاين حتى لاعب داخل اللعبة.";
  }

  let text = "📋 لائحة اللاعبين:\n\n";
  let i = 1;

  for (const [id, player] of game.players) {
    text += `${i}. ${player.name}\n`;
    text += `🆔 ${id}\n`;
    text += `❤️ ${"❤️".repeat(player.hearts)}\n`;
    text += `🏆 النقاط: ${player.points}\n\n`;
    i++;
  }

  return text;
}

function randomEmoji(game) {
  let available = EMOJIS.filter((item, index) => {
    return !game.used.includes(index);
  });

  if (available.length === 0) {
    game.used = [];
    available = EMOJIS;
  }

  const item = available[Math.floor(Math.random() * available.length)];
  const index = EMOJIS.indexOf(item);

  game.used.push(index);

  return item;
}

function isCorrect(message, item) {
  const answer = normalize(message);

  return item.answers.some(correct => {
    return normalize(correct) === answer;
  });
}

async function checkWinner(game, api, threadID) {
  const alive = alivePlayers(game);

  if (alive.length !== 1) {
    return false;
  }

  const [id, player] = alive[0];

  game.running = false;
  game.waitingAnswer = false;
  game.currentEmoji = null;
  game.choosing = null;

  if (game.timer) {
    clearTimeout(game.timer);
    game.timer = null;
  }

  await api.sendMessage(
    `🏆🎉 انتهات اللعبة!\n\n` +
    `👑 الفائز النهائي: ${player.name}\n` +
    `🆔 ${id}\n` +
    `❤️ القلوب: ${player.hearts}\n` +
    `🏆 النقاط: ${player.points}\n\n` +
    `🎊 مبروك للفائز!`,
    threadID
  );

  return true;
}

async function startRound(api, threadID) {
  const game = games.get(threadID);

  if (!game || !game.running) {
    return;
  }

  const alive = alivePlayers(game);

  if (alive.length <= 1) {
    await checkWinner(game, api, threadID);
    return;
  }

  game.round++;
  game.waitingAnswer = false;
  game.choosing = null;

  await api.sendMessage(
    `━━━━━━━━━━━━━━\n` +
    `🎮 الجولة ${game.round}\n` +
    `━━━━━━━━━━━━━━\n\n` +
    `استعدو... 😈\n\n` +
    `3️⃣`,
    threadID
  );

  await sleep(700);

  if (!game.running) return;

  await api.sendMessage("2️⃣", threadID);

  await sleep(700);

  if (!game.running) return;

  await api.sendMessage("1️⃣", threadID);

  await sleep(700);

  if (!game.running) return;

  const item = randomEmoji(game);

  game.currentEmoji = item;
  game.waitingAnswer = true;

  await api.sendMessage(
    `🚨 Emoji جديد!\n\n` +
    `${item.emoji}\n\n` +
    `⏰ عندكم 10 ثواني فقط!\n` +
    `🏆 أول واحد يجاوب صحيح يربح الجولة.`,
    threadID
  );

  game.timer = setTimeout(async () => {
    if (!game.running || !game.waitingAnswer) {
      return;
    }

    game.waitingAnswer = false;
    game.currentEmoji = null;
    game.timer = null;

    await api.sendMessage(
      `⏰ سالاو 10 ثواني!\n` +
      `❌ حتى واحد ماجاوبش صحيح.\n\n` +
      `🔄 الجولة القادمة...`,
      threadID
    );

    await sleep(1500);

    if (game.running) {
      startRound(api, threadID);
    }
  }, 10000);
}

module.exports = {
  config: {
    name: "emoji",
    aliases: ["emojigame", "لعبة"],
    version: "2.0.0",
    author: "shtot",
    countDown: 2,
    role: 0,
    shortDescription: "لعبة Emoji جماعية بالقلوب",
    category: "game"
  },

  onStart: async function ({ api, event, args, message }) {
    const threadID = event.threadID;
    const senderID = event.senderID;
    const command = normalize(args[0] || "");

    const game = getGame(threadID);

    // دخول اللعبة
    if (
      command === "join" ||
      command === "دخول" ||
      command === "دخل"
    ) {
      if (game.running) {
        return message.reply(
          "❌ اللعبة بدات، مايمكنش تدخل دابا."
        );
      }

      if (game.players.has(senderID)) {
        return message.reply(
          "⚠️ راك داخل اللعبة أصلاً."
        );
      }

      let name = "لاعب";

      try {
        const info = await api.getUserInfo(senderID);

        if (
          info &&
          info[senderID] &&
          info[senderID].name
        ) {
          name = info[senderID].name;
        }
      } catch (e) {}

      game.players.set(senderID, {
        name: name,
        hearts: 4,
        points: 0
      });

      return message.reply(
        `✅ دخلتي للعبة يا ${name} 🎮\n\n` +
        `❤️❤️❤️❤️\n\n` +
        `🆔 ${senderID}\n\n` +
        `📢 باش تبدا اللعبة:\n` +
        `emoji start`
      );
    }

    // بداية اللعبة
    if (
      command === "start" ||
      command === "بدا" ||
      command === "ابدأ"
    ) {
      if (game.running) {
        return message.reply(
          "⚠️ اللعبة راه بدات أصلاً."
        );
      }

      if (game.players.size < 2) {
        return message.reply(
          "❌ خاص يكونو على الأقل جوج لاعبين."
        );
      }

      game.running = true;
      game.round = 0;
      game.used = [];
      game.waitingAnswer = false;
      game.currentEmoji = null;
      game.choosing = null;

      await message.reply(
        `🎮🔥 لعبة Emoji بدات!\n\n` +
        `${playersList(game)}\n` +
        `❤️ كل لاعب عندو 4 قلوب.\n\n` +
        `⚔️ اللي يربح الجولة يختار لاعب ينقص ليه قلب.`
      );

      await sleep(2000);

      return startRound(api, threadID);
    }

    // لائحة اللاعبين
    if (
      command === "list" ||
      command === "players" ||
      command === "لائحة"
    ) {
      return message.reply(
        playersList(game)
      );
    }

    // إيقاف اللعبة بدون مسح اللاعبين
    if (
      command === "stop" ||
      command === "وقف" ||
      command === "توقيف"
    ) {
      if (!game.running) {
        return message.reply(
          "❌ اللعبة ماشي شاعلة."
        );
      }

      game.running = false;
      game.waitingAnswer = false;
      game.currentEmoji = null;
      game.choosing = null;

      if (game.timer) {
        clearTimeout(game.timer);
        game.timer = null;
      }

      return message.reply(
        `🛑 توقفت اللعبة مؤقتاً.\n\n` +
        playersList(game)
      );
    }

    // إطفاء اللعبة ومسح كلشي
    if (
      command === "off" ||
      command === "اطفاء" ||
      command === "طفى"
    ) {
      if (
        !game.running &&
        game.players.size === 0
      ) {
        return message.reply(
          "❌ ماكاينة حتى لعبة شاعلة."
        );
      }

      if (game.timer) {
        clearTimeout(game.timer);
        game.timer = null;
      }

      game.running = false;
      game.waitingAnswer = false;
      game.currentEmoji = null;
      game.choosing = null;
      game.round = 0;
      game.used = [];

      game.players.clear();

      return message.reply(
        `🛑 تم إطفاء لعبة Emoji.\n\n` +
        `🗑️ تم مسح لائحة اللاعبين والقلوب والنقاط.\n\n` +
        `🎮 تقدروا تبداو لعبة جديدة بـ:\n` +
        `emoji join`
      );
    }

    return message.reply(
      `🎮 أوامر لعبة Emoji:\n\n` +
      `📥 emoji join\n` +
      `▶️ emoji start\n` +
      `📋 emoji list\n` +
      `🛑 emoji stop\n` +
      `🗑️ emoji off`
    );
  },

  onChat: async function ({ api, event }) {
    const threadID = event.threadID;
    const senderID = event.senderID;

    const game = games.get(threadID);

    if (!game || !game.running) {
      return;
    }

    /*
     * الرابح خاصو يختار اللاعب
     */
    if (game.choosing) {
      if (game.choosing !== senderID) {
        return;
      }

      const answer = String(event.body || "").trim();

      if (!/^\d+$/.test(answer)) {
        return;
      }

      const number = parseInt(answer);

      const alive = alivePlayers(game);

      if (
        number < 1 ||
        number > alive.length
      ) {
        return api.sendMessage(
          `❌ اختار رقم بين 1 و ${alive.length}.`,
          threadID
        );
      }

      const target = alive[number - 1];

      if (!target) {
        return;
      }

      const targetID = target[0];
      const targetPlayer = target[1];

      if (targetID === senderID) {
        return api.sendMessage(
          `❌ مايمكنش تنقص قلبك نتا 😅\n` +
          `اختار لاعب آخر.`,
          threadID
        );
      }

      targetPlayer.hearts--;

      game.choosing = null;

      let eliminated = false;

      if (targetPlayer.hearts <= 0) {
        targetPlayer.hearts = 0;
        eliminated = true;
      }

      let result =
        `💔 تم إنقاص قلب!\n\n` +
        `👤 ${targetPlayer.name}\n` +
        `🆔 ${targetID}\n` +
        `❤️ القلوب المتبقية: ${targetPlayer.hearts}`;

      if (eliminated) {
        game.players.delete(targetID);

        result +=
          `\n\n☠️ سالاو ليه القلوب!\n` +
          `🚪 ${targetPlayer.name} خرج من اللعبة.`;
      }

      await api.sendMessage(
        result,
        threadID
      );

      await sleep(1200);

      if (
        await checkWinner(
          game,
          api,
          threadID
        )
      ) {
        return;
      }

      await api.sendMessage(
        `📋 اللائحة الحالية:\n\n` +
        playersList(game) +
        `\n🔄 الجولة القادمة...`,
        threadID
      );

      await sleep(1500);

      if (game.running) {
        startRound(api, threadID);
      }

      return;
    }

    /*
     * ماشي وقت الإجابة
     */
    if (
      !game.waitingAnswer ||
      !game.currentEmoji
    ) {
      return;
    }

    /*
     * غير اللاعبين اللي داخلين يقدرو يجاوبو
     */
    if (!game.players.has(senderID)) {
      return;
    }

    /*
     * تحقق من الجواب
     */
    if (
      !isCorrect(
        event.body,
        game.currentEmoji
      )
    ) {
      return;
    }

    /*
     * أول جواب صحيح فقط
     */
    game.waitingAnswer = false;

    if (game.timer) {
      clearTimeout(game.timer);
      game.timer = null;
    }

    const winner =
      game.players.get(senderID);

    winner.points++;

    game.currentEmoji = null;

    await api.sendMessage(
      `🏆🎉 ربحتي الجولة!\n\n` +
      `👤 ${winner.name}\n` +
      `🏆 النقاط: ${winner.points}\n` +
      `❤️ القلوب: ${winner.hearts}\n\n` +
      `⚔️ دابا اختار لاعب تنقص ليه قلب.\n\n` +
      `${playersList(game)}\n` +
      `📢 صيفط غير رقم اللاعب.`,
      threadID
    );

    game.choosing = senderID;
  }
};
