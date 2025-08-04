import { test } from "@playwright/test";

test("Test 02", async ({ page }) => {
  await test.step("Navigate to Home Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Click to open Product page", async () => {
    await page.locator("//a[@href='02-xpath-product-page.html']").click();
  });

  await test.step("Add 2 Product 1", async () => {
    await page.locator("//button[@data-product-id='1']").dblclick();
  });

  await test.step("Add 3 Product 2", async () => {
    await page.locator("//button[@data-product-id='2']").click({
      clickCount: 3,
    });
  });

  await test.step("Add 1 Product 3", async () => {
    await page.locator("//button[@data-product-id='3']").click();
  });
});
