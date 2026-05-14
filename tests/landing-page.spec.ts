import { test, expect } from '@playwright/test'

test.describe('Tite Manzi Sports Academy - Landing Page', () => {

  test('homepage loads and H1 headline is visible', async ({ page }) => {
    await page.goto('/')
    const heading = page.getByRole('heading', { level: 1 })
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('Developing the Next Generation of Football Stars')
  })

  test('services section has three cards with correct titles', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Youth Academy Development' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Coach Education' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Tournament Management' })).toBeVisible()
    const serviceCards = page.locator('article')
    await expect(serviceCards).toHaveCount(3)
  })

  test('Hire Me link has correct mailto href', async ({ page }) => {
    await page.goto('/')
    const hireLink = page.getByRole('link', { name: /hire me/i })
    await expect(hireLink).toBeVisible()
    await expect(hireLink).toHaveAttribute('href', 'mailto:titemanzi1@gmail.com')
  })

  test('layout renders without horizontal overflow at all viewports', async ({ page }) => {
    await page.goto('/')
    const bodyScrollWidth = await page.evaluate(() => document.body.scrollWidth)
    const viewportWidth = page.viewportSize()!.width
    expect(bodyScrollWidth).toBeLessThanOrEqual(viewportWidth + 2)
  })

  test('hero background image and team images are in the DOM', async ({ page }) => {
    await page.goto('/')
    const heroImage = page.locator('img[alt*="background"], img[src*="back"]')
    await expect(heroImage.first()).toBeVisible()
    const team1Image = page.locator('img[src*="team1"]')
    await expect(team1Image.first()).toBeVisible()
    const team2Image = page.locator('img[src*="team2"]')
    await expect(team2Image.first()).toBeVisible()
  })

})
