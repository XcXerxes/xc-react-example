const setRem = () => {
  let dpr = 0
  let rem = 0
  let scale = 0
  dpr = window.devicePixelRatio
  const htmlDoc = document.documentElement
  const currentWidth = htmlDoc.clientWidth
  scale = currentWidth / 750
  rem = 750 / 10 * scale
  htmlDoc.style.fontSize = `${rem}px`
  htmlDoc.setAttribute('data-dpr', dpr)
}
setRem()
window.addEventListener('resize', setRem, false)