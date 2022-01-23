const mongoose = require('mongoose');
const session = () => {
  mongoose.connect(
    `mongodb+srv://eugene:${process.env.MONGO_PASS}@mrjarvis.usxjo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
  const Schema = mongoose.Schema;
  const SessionStoreSchema = new Schema({
    key: { type: String },
    session: { type: Object },
  });
  const SessionStoreModel = mongoose.model('Session', SessionStoreSchema);
  return async (ctx, next) => {
    const fromId = ctx.from?.id;
    const chatId = ctx.chat?.id;
    const key = !fromId || !chatId ? undefined : `${fromId}:${chatId}`;
    if (!key) return next();
    try {
      const record = await SessionStoreModel.findOne({ key }).exec();
      if (!record) {
        const newSession = new SessionStoreModel({
          key,
          session: null,
        });
        newSession.save();
      }
      ctx.session = record?.session || undefined;
    } catch (e) {
      console.error(e);
    }
    await next();
    if (ctx.session) {
      SessionStoreModel.findOneAndUpdate(
        { key },
        { key, session: ctx.session }
      ).exec();
    }
  };
};

module.exports = session;
