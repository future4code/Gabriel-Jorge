import * as jwt from "jsonwebtoken";
import { autenticatorData } from "../types";

const getData = (token: string): autenticatorData => {
  const payload = jwt.verify(token, "senhaSuperSecreta" as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};