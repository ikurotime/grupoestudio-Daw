import { expect, test } from '@playwright/test'

test.describe('Search with login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./signin')
    await page.getByRole('textbox', { name: 'Correo' }).fill('test@test.com')
    await page.getByRole('textbox', { name: 'Contraseña' }).fill('test123')
    const button = page.getByTestId('signin-button')
    await button.click()
    await page.waitForURL('/')
  })

  test('has title', async ({ page }) => {
    await page.goto('./search')
    const title = page.getByRole('heading', {
      name: '¿Quieres ser un voluntario?'
    })
    // Expect a title "to contain" a substring.
    await expect(title).toBeVisible()
  })

  test('has search input', async ({ page }) => {
    await page.goto('./search')
    const search = page.getByTestId('search')
    // Expect a title "to contain" a substring.
    await expect(search).toBeVisible()
  })

  test('has location input', async ({ page }) => {
    await page.goto('./search')
    const location = page.getByRole('textbox', { name: 'Vigo' })
    // Expect a title "to contain" a substring.
    await expect(location).toBeVisible()
  })

  test('has search button', async ({ page }) => {
    await page.goto('./search')
    const button = page.getByRole('button', { name: 'Encontrar personas' })
    // Expect a title "to contain" a substring.
    await expect(button).toBeVisible()
  })

  test('submit form', async ({ page }) => {
    await page.goto('./search')
    await page.getByTestId('location').fill('Vigo')
    const button = page.getByRole('button', { name: 'Encontrar personas' })
    await button.click()
  })

  test('has rating input', async ({ page }) => {
    await page.goto('./search')

    const rating = page.getByTestId('rating')
    // Expect a title "to contain" a substring.
    await expect(rating).toBeVisible()
  })

  test('has language input', async ({ page }) => {
    await page.goto('./search')
    const language = page.getByTestId('language')
    // Expect a title "to contain" a substring.
    await expect(language).toBeVisible()
  })
})
