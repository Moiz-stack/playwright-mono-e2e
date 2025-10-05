const { test, expect } = require('@playwright/test');
const TodoPage = require('../pages/TodoPage');
const config = require('../config/config');

test.describe('TodoMVC Tests', () => {
  test('Add, complete and clear todo', async ({ page }) => {
    const todo = new TodoPage(page);
    await todo.navigate();

    // Add tasks
    await todo.addTodo('Buy milk');
    await todo.addTodo('Write Playwright tests');

    let todos = await todo.getTodos();
    expect(todos).toContain('Buy milk');
    expect(todos).toContain('Write Playwright tests');

    // Complete a task
    await todo.completeTodo('Buy milk');

    // Clear completed
    await todo.clearCompleted();

    // todos = await todo.getTodos();
    // expect(todos).not.toContain('Buy milk');
    // expect(todos).toContain('Write Playwright tests');
  });
});
