import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

interface Todo {
  id: string;
  text: string;
}

let todos: Todo[] = [];

router.get("/posts", (ctx) => {
  ctx.response.body = { todos };
});

router.post("/posts", async (ctx) => {
  const result = ctx.request.body({ type: "json" });
  const text = await result.value;
  const todo: Todo = {
    id: new Date().toISOString(),
    text: text,
  };
  todos.push(todo);
  ctx.response.body = { message: "Created todo", todo };
});

router.put("/post/:postsId", async (ctx) => {
  const postId = ctx.params.postsId;
  const result = ctx.request.body({ type: "json" });
  const text = await result.value;
  const updatedTodos = todos.map((todo) => {
    if (todo.id === postId) {
      todo.text = text;
      return todo;
    }
    return todo;
  });
  todos = updatedTodos;
  ctx.response.body = { todos };
});

router.delete("/post/:postsId", (ctx) => {
  const postId = ctx.params.postsId;
  todos = todos.filter((todo) => todo.id !== postId);
  ctx.response.body = { todos };
});

export default router;
