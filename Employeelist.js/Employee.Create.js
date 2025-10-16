import { test, expect } from '@playwright/test';

test('Employee List visibility test', async ({ page }) => {
  await page.goto('https://theabbapayroll.com/login');
  await page.locator('#email').fill('yahshuabba.ecpmac@gmail.com');
  await page.locator('#password').fill('Test1@56');
  await page.locator('#signin-button').click();
  await page.waitForLoadState('networkidle');



 
  await page.getByRole('link', { name: 'Employees' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/employees/i);
  await page.getByRole('button', { name: 'Create' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByText(/Employee List/i)).toBeVisible();
  await expect(page.getByText(/Create Employee/i)).toBeVisible();
});
