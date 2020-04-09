;
((d) => {
  d.addEventListener('DOMContentLoaded', e => {
    M.AutoInit()

    const sliders = d.querySelectorAll('.slider')

    M.Slider.init(sliders, {
      indicators: true,
      duration: 1000
    })

    const carousels = d.querySelectorAll('.carousel'),
      instanceCarousel = M.Carousel.getInstance(d.querySelector('.carousel'))

    M.Carousel.init(carousels, {
      fullWidth: true
    })

    setInterval(() => {
      instanceCarousel.next(1)
    }, 5000);

    const copy = d.querySelector('.Footer small')

    copy.innerHTML = `&copy; ${new Date().getFullYear()} @kikeestrada`
  })
})(document);
