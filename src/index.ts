import { mongodb } from "./tempDatabase";
import app from "./app";

/**
 * * Connection to a temporal database while dev
 */
mongodb();

app.listen(app.get("port"));
console.log(`Server on port`, app.get("port"));
