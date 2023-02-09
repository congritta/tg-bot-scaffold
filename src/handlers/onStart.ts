import {CommandMiddleware} from "grammy";
import ContextModel from "../models/Context";

const onStart: CommandMiddleware<ContextModel> = (ctx) => {

  ctx.session.state = null;
  ctx.session.data = null;

  return ctx.reply((`
    Hi ${ctx.$user.telegram.first_name}! 😉
    
    This is scaffold to create Telegram Bots by @congritta
    
    See <code>README.md</code> file to get further
  `).replace(/^ +/gm, ""), {
    parse_mode: "HTML"
  });
};

export default onStart;
