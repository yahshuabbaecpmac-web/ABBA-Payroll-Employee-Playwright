import { test, expect } from '@playwright/test';

test('Employee Playwright Test', async ({ page }) => {
  await page.goto('https://theabbapayroll.com/login');
  await page.locator('#email').fill('yahshuabba.ecpmac@gmail.com');
  await page.locator('#password').fill('Test1@56');
  await page.locator('#signin-button').click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: 'Employees' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/employees/i);
  await expect(page.getByText(/Employee List/i)).toBeVisible();
  await expect(page.getByRole('columnheader', { name: /Employee ID/i })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: /Name/i })).toBeVisible();

  await page.getByRole('button', { name: 'Create' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByText(/Create Employee/i)).toBeVisible();
  await page.getByRole('button', { name: /Close/i }).click();
  await expect(page.getByText(/Create Employee/i)).toBeHidden();
  await page.getByRole('button', { name: 'Create' }).locator('+ button').click();
  await expect(page.getByText('Import')).toBeVisible();
  await expect(page.getByText('Export')).toBeVisible();
  await expect(page.getByText('Populate Test Employees')).toBeVisible();

  await page.getByText('Import').click();
  await expect(page.getByText('Import Employees')).toBeVisible();
  await expect(page.getByRole('button', { name: /Download Template/i })).toBeVisible();
  await expect(page.getByText(/Drop CSV file here or click to upload/i)).toBeVisible();
  await page.getByRole('button', { name: /|Close/i }).click();
  await page.getByRole('button', { name: 'Create' }).locator('+ button').click();
  await page.getByRole('link', { name: 'Export' }).click();
  await page.getByRole('button', { name: 'Create' }).locator('+ button').click();
  await page.getByText('Populate Test Employees').click();
  await expect(page.getByText('Generate Test Employees')).toBeVisible();
  await page.getByRole('button', { name: /Save/i }).click();
  await page.getByText('Total Records:').click();

});
