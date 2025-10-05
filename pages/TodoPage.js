class TodoPage {
  constructor(page) {
    this.page = page;
    this.newTodoInput = '.new-todo';
    this.todoList = '.todo-list li';
    this.clearCompletedButton = '.clear-completed';
  }

  async navigate() {
    await this.page.goto('https://demo.playwright.dev/todomvc/');
  }

  async addTodo(task) {
    await this.page.fill(this.newTodoInput, task);
    await this.page.press(this.newTodoInput, 'Enter');
  }

  async getTodos() {
    return this.page.$$eval(this.todoList, items => items.map(i => i.textContent.trim()));
  }

  async completeTodo(task) {
    const todo = await this.page.locator(`.todo-list li:has-text("${task}")`);
    await todo.locator('.toggle').click();
  }

  async clearCompleted() {
    await this.page.click(this.clearCompletedButton);
  }
}

module.exports = TodoPage;
