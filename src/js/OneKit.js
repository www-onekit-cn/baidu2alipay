function current() {
  const pages = getCurrentPages()
  if (pages.length === 0) {
    return {}
  }
  return pages[pages.length - 1]
}

function currentUrl() {
  return current().route
}
module.exports = {current, currentUrl}
