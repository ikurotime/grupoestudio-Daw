import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('./contacto')
  const title = page.getByRole('heading', { name: 'Contacto' })
  // Expect a title "to contain" a substring.
  await expect(title).toBeVisible()
})
test('has name input', async ({ page }) => {
  await page.goto('./contacto')
  const name = page.getByRole('textbox', { name: 'Nombre' })
  // Expect a title "to contain" a substring.
  await expect(name).toBeVisible()
})
test('has email input', async ({ page }) => {
  await page.goto('./contacto')
  const email = page.getByRole('textbox', { name: 'Email' })
  // Expect a title "to contain" a substring.
  await expect(email).toBeVisible()
})
test('has subject input', async ({ page }) => {
  await page.goto('./contacto')
  const subject = page.getByRole('textbox', { name: 'Asunto' })
  // Expect a title "to contain" a substring.
  await expect(subject).toBeVisible()
})
test('has phone input', async ({ page }) => {
  await page.goto('./contacto')
  const phone = page.getByRole('textbox', { name: 'Teléfono' })
  // Expect a title "to contain" a substring.
  await expect(phone).toBeVisible()
})
test('has message input', async ({ page }) => {
  await page.goto('./contacto')
  const message = page.getByRole('textbox', { name: 'Mensaje' })
  // Expect a title "to contain" a substring.
  await expect(message).toBeVisible()
})
test('has submit button', async ({ page }) => {
  await page.goto('./contacto')
  const button = page.getByRole('button', { name: 'Enviar' })
  // Expect a title "to contain" a substring.
  await expect(button).toBeVisible()
})
test('submit form', async ({ page }) => {
  await page.goto('./contacto')
  await page.getByLabel('Nombre').fill('John Doe')
  await page.getByLabel('Email').fill('email@test/com')
  await page.getByLabel('Asunto').fill('Subject')
  await page.getByLabel('Teléfono').fill('123456789')
  await page.getByLabel('Mensaje').fill('Message')
  const button = page.getByRole('button', { name: 'Enviar' })
  await button.click()
})
