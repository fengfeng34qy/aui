
import pages from '../pages'
export default {
  async getPageAsync(name) {
    let page = await pages[name]();
    return page.default;
  }
}