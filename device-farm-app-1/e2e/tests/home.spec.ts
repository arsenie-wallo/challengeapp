import { HomePage } from '../pageobjects/home.page'
import { $, expect } from '@wdio/globals'

describe('First-run wizard', () => {
  const home = new HomePage()

  it('taps the Get Started button', async () => {
    await home.tapStart()
    // Add an assertion that the next page opened, e.g.:
    await expect(await $('~nextScreenRoot').isDisplayed()).toBe(true)
  })
})
