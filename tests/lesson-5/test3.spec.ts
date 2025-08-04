import { test } from "@playwright/test";

test("Test 03", async ({ page }) => {
  await test.step("Navigate to Home Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Click to open Todo page", async () => {
    await page.locator("//a[@href='03-xpath-todo-list.html']").click();
  });

  await test.step("Add 100 todo tasks", async () => {
    for (let i = 1; i < 101; i++) {
      await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
      await page.locator("//button[@id='add-task']").click();
    }
  });

  await test.step("Remove odd todos", async () => {
    const listOfTodos = await page
      .locator('//*[@id="task-list"]/li/span')
      .allTextContents();

    page.on("dialog", async (myDialog) => {
      myDialog.accept();
    });

    for (let task of listOfTodos) {
      const taskNumber = Number(task.split(" ")[1]);
      if (taskNumber % 2 == 1) {
        await page.locator(`//button[@id='todo-${taskNumber}-delete']`).click();
      }
    }
  });
});
