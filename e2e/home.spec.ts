import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('./')
  const title = page.getByRole('heading', {
    name: 'Donde las personas pueden encontrar el soporte que necesitan'
  })
  // Expect a title "to contain" a substring.
  await expect(title).toBeVisible()
})
test('has search input', async ({ page }) => {
  await page.goto('./')
  const search = page.getByTestId('search')
  // Expect a title "to contain" a substring.
  await expect(search).toBeVisible()
})
test('has location input', async ({ page }) => {
  await page.goto('./')
  const location = page.getByTestId('location')
  // Expect a title "to contain" a substring.
  await expect(location).toBeVisible()
})
test('has search button', async ({ page }) => {
  await page.goto('./')
  const button = page.getByRole('button', { name: 'Encontrar personas' })
  // Expect a title "to contain" a substring.
  await expect(button).toBeVisible()
})
test('submit form', async ({ page }) => {
  await page.goto('./')
  await page.getByTestId('location').fill('Vigo')
  const button = page.getByRole('button', { name: 'Encontrar personas' })
  await button.click()
})
