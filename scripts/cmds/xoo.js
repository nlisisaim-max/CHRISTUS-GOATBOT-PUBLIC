const games = new Map();

function getBoard(game) {
  const nums = ["1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"];

  const c = game.board.map((v, i) =>
    v === "X" ? "❌" : v === "O" ? "⭕" : nums[i]
  );

  return (
    "╔════════════════════╗\n" +
    "║      🎮 SIX 🎮      ║\n" +
    "╠════════════════════╣\n" +
    `║  ${c[0]}  │  ${c[1]}  │  ${c[2]}  ║\n` +
    "║ ─────┼─────┼───── ║\n" +
    `║  ${c[3]}  │  ${c[4]}  │  ${c[5]}  ║\n` +
    "║ ─────┼─────┼───── ║\n" +
    `║  ${c[6]}  │  ${c[7]}  │  ${c[8]}  ║\n` +
    "╚════════════════════╝\n\n" +
    `❌ X: ${game.names.X}\n` +
    `⭕ O: ${game.names.O}\n\n` +
    (game.active
      ? `🎯 الدور: ${game.names[game.turn]} ${game.turn === "X" ? "❌" : "⭕"}\nكتب رقم الخانة من 1 حتى 9.`
      : "⏳ كنتسناو اللاعب الثاني يكتب: دخول لعبة")
  );
}

function getWinner(board) {
  const lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return board.every(Boolean) ? "DRAW" : null;
}

async function getName(api, id) {
  try {
    const info = await api.getUserInfo(id);
    return info && info[id] && info[id].name
      ? info[id].name
      : "لاعب";
  } catch {
    return "لاعب";
  }
}

async function send(api, event, message) {
  return api.sendMessage(message, event.threadID);
}

module.exports = {
  config: {
    name: "six",
    aliases: ["لعبةsix"],
    version: "3.0.0",
    author: "fadi",
    role: 0,
    shortDescription: "لعبة XO بين لاعبين",
    category: "ألعاب",
    guide: "six | دخول لعبة | six 8 | six لوحة | six إيقاف"
  },

  onStart: async function ({ api, event, args }) {
    const id = String(event.threadID);
    const uid = String(event.senderID);
    const action = args.join(" ").trim().toLowerCase();

    if (action === "إيقاف" || action === "وقف" || action === "stop") {
      const game = games.get(id);
      if (!game) return send(api, event, "ما كايناش لعبة خدامة.");

      if (!game.players.includes(uid)) {
        return send(api, event, "غير اللاعبين يقدرو يوقفو اللعبة.");
      }

      games.delete(id);
      return send(api, event, "🛑 توقفات لعبة SIX.");
    }

    if (action === "لوحة" || action === "board") {
      const game = games.get(id);
      if (!game) return send(api, event, 'ما كايناش لعبة. كتب "six" باش تبدا.');
      return send(api, event, getBoard(game));
    }

    if (!action || action === "بدء" || action === "start") {
      if (games.has(id)) {
        return send(api, event, 'كاينة لعبة بالفعل. كتب "دخول لعبة" باش تدخل، أو "six لوحة" تشوف اللوحة.');
      }

      const name = await getName(api, uid);

      games.set(id, {
        players: [uid],
        names: { X: name, O: "في انتظار الخصم..." },
        board: Array(9).fill(null),
        turn: "X",
        active: false
      });

      return send(api, event,
        `🎮 تحدّي SIX\n\n👑 ${name} بدا اللعبة وغادي يلعب بـ ❌ X.\n\n` +
        '👥 لاعب آخر يكتب "دخول لعبة" باش يلعب بـ ⭕ O.'
      );
    }

    return send(api, event, 'الأوامر:\n• six\n• دخول لعبة\n• six 8\n• six لوحة\n• six إيقاف');
  },

  // استقبال الدخول والحركات من الرسائل العادية
  onChat: async function ({ api, event }) {
    const id = String(event.threadID);
    const uid = String(event.senderID);
    const body = String(event.body || "").trim();
    const action = body.toLowerCase();

    let game = games.get(id);
    if (!game) return;

    // تجاهل رسائل الأوامر الأخرى
    if (/^(six|six\s|\/six|!six)\b/i.test(body)) return;

    // دخول اللاعب الثاني
    if (action === "دخول لعبة" || action === "دخول") {
      if (game.players.includes(uid)) {
        return send(api, event, "راك مسجل فاللعبة بالفعل.");
      }

      if (game.active || game.players.length >= 2) {
        return send(api, event, "اللعبة عامرة بجوج لاعبين، تسنى حتى تسالي.");
      }

      game.players.push(uid);
      game.names.O = await getName(api, uid);
      game.active = true;

      return send(api, event,
        "🔥 بدات اللعبة!\n❌ X: " + game.names.X +
        "\n⭕ O: " + game.names.O +
        "\n🎯 الدور الأول لصاحب اللعبة X.\n\n" + getBoard(game)
      );
    }

    if (!game.active) return;

    const mark = game.players[0] === uid
      ? "X"
      : game.players[1] === uid
        ? "O"
        : null;

    if (!mark) return;

    // قبول الرقم وحده أو صيغة: 8
    if (!/^[1-9]$/.test(action)) return;

    if (mark !== game.turn) {
      return send(api, event, `⏳ ماشي دورك، الدور ديال ${game.names[game.turn]}.`);
    }

    const pos = Number(action) - 1;

    if (game.board[pos]) {
      return send(api, event, "الخانة معمّرة، اختار رقم آخر.");
    }

    game.board[pos] = mark;
    const result = getWinner(game.board);

    if (result === "X" || result === "O") {
      const winnerName = game.names[result];
      const board = getBoard(game);
      games.delete(id);

      return send(api, event,
        `🏆 مبروك ${winnerName}! ربح لعبة SIX ${result === "X" ? "❌" : "⭕"}\n\n` +
        board + '\n\nباش تبداو من جديد كتب: six'
      );
    }

    if (result === "DRAW") {
      const board = getBoard(game);
      games.delete(id);
      return send(api, event, "🤝 تعادل!\n\n" + board + "\n\nكتب six لجولة جديدة.");
    }

    game.turn = game.turn === "X" ? "O" : "X";

    return send(api, event,
      `✅ ${game.names[mark]} اختار الخانة ${action}.\n\n${getBoard(game)}`
    );
  }
};
