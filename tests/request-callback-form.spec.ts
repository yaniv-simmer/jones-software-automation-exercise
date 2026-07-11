import { test, expect } from '@playwright/test';

test('Request a callback form test', async ({ page }, testInfo) => {
  await page.goto('/');

  await page.locator('#name').fill('Yaniv Simmer');
  await page.locator('#email').fill('yaniv.simmer@getjones.com');
  await page.locator('#phone').fill('0501234567');
  await page.locator('#company').fill('Jones Software');
  await page.locator('#website').fill('https://getjones.com/');
  await page.locator('#employees').selectOption({ label: '51-500' });


  await testInfo.attach('before-submit', {
    body: await page.screenshot({ fullPage: true }),
    contentType: 'image/png',
  });

  await page.getByRole('button', { name: 'Request a call back' }).click();

  await expect(page).toHaveURL(/thank-you\.html/);
  await expect(page.getByRole('heading', { level: 1, name: 'Thank You!' })).toBeVisible();


  console.log('Successfully reached the thank you page.');
});
