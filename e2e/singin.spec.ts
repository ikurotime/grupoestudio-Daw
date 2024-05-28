import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('./signin')
  const title = page.getByRole('heading', {
    name: 'Iniciar sesión'
  })
  // Expect a title "to contain" a substring.
  await expect(title).toBeVisible()
})

test('has email input', async ({ page }) => {
  await page.goto('./signin')
  const email = page.getByRole('textbox', { name: 'Correo' })
  // Expect a title "to contain" a substring.
  await expect(email).toBeVisible()
})

test('has password input', async ({ page }) => {
  await page.goto('./signin')
  const password = page.getByRole('textbox', { name: 'Contraseña' })
  // Expect a title "to contain" a substring.
  await expect(password).toBeVisible()
})

test('has signin button', async ({ page }) => {
  await page.goto('./signin')
  const button = page.getByTestId('signin-button')
  // Expect a title "to contain" a substring.
  await expect(button).toBeVisible()
})

test('submit form', async ({ page }) => {
  await page.goto('./signin')
  await page.getByRole('textbox', { name: 'Correo' }).fill('test@test.com')
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('test123')
  const button = page.getByTestId('signin-button')
  await button.click()
  await page.waitForURL('/')
  await page.goto('./search')
})
