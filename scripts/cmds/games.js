
const fs = require("fs-extra");
const path = require("path");
const axios = require("axios");

const DATA_DIR = path.join(__dirname, "cache");
const DATA_FILE = path.join(DATA_DIR, "groupImageLock.json");
const IMAGE_DIR = path.join(DATA_DIR, "lockedImages");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
  config: {
    name: "صورة-غلق",
    aliases: ["صورة-فتح"],
    version: "1.0.0",
    author: "fadi",
    role: 1,
    countDown: 5,
    description: "حماية صورة المجموعة",
    category: "إدارة المجموعة",
    guide: {
      ar: "رد على صورة واكتب صورة-غلق، أو صورة-فتح لإيقاف الحماية"
    }
  },

  onStart: async function ({ api, event, args, message }) {
    const threadID = event.threadID;
    const command = (event.body || "").trim().split(/\s+/)[0];

    await fs.ensureDir(DATA_DIR);
    await fs.ensureDir(IMAGE_DIR);

    let data = {};
    try {
      data = await fs.readJson(DATA_FILE);
    } catch (_) {}

    if (command === "صورة-فتح") {
      if (data[threadID]) {
        data[threadID].enabled = false;
        await fs.writeJson(DATA_FILE, data, { spaces: 2 });
      }
      return message.reply("تم إيقاف حماية صورة المجموعة.");
    }

    const reply = event.messageReply;
    const attachments = reply && reply.attachments
      ? reply.attachments
      : [];

    const image = attachments.find(
      item => item.type === "photo" && item.url
    );

    if (!image) {
      return message.reply(
        "رد على صورة أولاً ثم اكتب صورة-غلق."
      );
    }

    const imagePath = path.join(
      IMAGE_DIR,
      `${threadID}.jpg`
    );

    try {
      const response = await axios.get(image.url, {
        responseType: "arraybuffer",
        timeout: 30000
      });

      await fs.writeFile(imagePath, response.data);

      data[threadID] = {
        enabled: true,
        imagePath,
        updatedAt: Date.now()
      };

      await fs.writeJson(DATA_FILE, data, { spaces: 2 });

      // محاولة تغيير صورة المجموعة مباشرة.
      // قد تختلف أسماء الدوال حسب إصدار FCA.
      if (typeof api.changeGroupImage === "function") {
        await api.changeGroupImage(
          fs.createReadStream(imagePath),
          threadID
        );
      } else {
        return message.reply(
          "تم تخزين الصورة وتفعيل الحماية، لكن إصدار API عندك لا يوفر changeGroupImage. خاصنا نربط دالة تغيير الصورة المناسبة لإصدارك."
        );
      }

      return message.reply(
        "تم تخزين الصورة وتغيير صورة المجموعة. الحماية مفعلة."
      );
    } catch (err) {
      return message.reply(
        "تعذر تغيير صورة المجموعة: " + err.message
      );
    }
  }
};
