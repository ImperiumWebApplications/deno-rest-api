import { Application } from "https://deno.land/x/oak/mod.ts";
import TodoRouter from "./routes/todos.ts";

const app = new Application();

app.use(TodoRouter.routes());
app.use(TodoRouter.allowedMethods());

await app.listen({ port: 3000 });
