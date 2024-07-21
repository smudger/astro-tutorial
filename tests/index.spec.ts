import { expect, test } from '@playwright/test';

test('meta is correct', async ({page}) => {
    await page.goto('/');

    await expect(page).toHaveTitle('Home Page');
})