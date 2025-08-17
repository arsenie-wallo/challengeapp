import { $ } from '@wdio/globals'

export class HomePage {
  private get startButton() {
    return $('~getStartedBtn')  // no need to prefix with `browser`
  }

  async tapStart() {
    await this.startButton.waitForDisplayed({ timeout: 10_000 })
    await this.startButton.click()
  }
}
