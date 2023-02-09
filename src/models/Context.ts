import {Context, SessionFlavor} from "grammy";
import UserModel from "./User";

export interface SessionStorageModel {
  state: null
    |"hereIsState";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

type ContextWithSession = Context&SessionFlavor<SessionStorageModel>

export default interface ContextModel extends ContextWithSession {
  $user: UserModel;
}
