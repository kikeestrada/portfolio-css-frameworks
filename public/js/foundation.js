;
((d, w) => {
  $(d).foundation()

  d.addEventListener('DOMContentLoaded', e => {
    const mqDesktop = w.matchMedia('(min-width: 64em)')
    $('.top-bar a').click(() => {
      if (!mqDesktop.matches) {
        $('.top-bar').hide()
      }
    })

    const copy = d.querySelector('.Footer small')
    copy.innerHTML = `&copy; ${new Date().getFullYear()} @kikeestrada`
  })
})(document, window);
