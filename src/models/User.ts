import {User} from "@grammyjs/types";
import {ObjectId} from "mongodb";

export default interface UserModel {
  _id: ObjectId
  telegram: User,
  createdAt: Date
}
