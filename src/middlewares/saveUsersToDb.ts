import {MiddlewareFn} from "grammy";
import {ObjectId} from "mongodb";
import {$db} from "../helpers/makeDb";
import ContextModel from "../models/Context";
import UserModel from "../models/User";

const saveUsersToDb: MiddlewareFn<ContextModel> = async(ctx, next) => {
  if(!ctx.from) {
    return;
  }

  let user: UserModel|null = await $db.users.findOne({"telegram.id": ctx.from?.id});

  if(!user) {
    user = {
      _id: new ObjectId(),
      telegram: ctx.from,
      createdAt: new Date(),
    };

    await $db.users.insertOne(user);
  }

  ctx.$user = user;
  return next();
};

export default saveUsersToDb;
