import { cleanEnv,str,port } from "envalid";
export default cleanEnv(process.env, {
  PORT: port(),
  MONGO_URL: str(),
});
