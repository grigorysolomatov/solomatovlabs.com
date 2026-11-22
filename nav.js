// Mark the nav link of the section in view ("you are here").
// No tracking, no network requests.
(function () {
  var links = [].slice.call(document.querySelectorAll('.top nav a'));
  if (!links.length || !('IntersectionObserver' in window)) return;
  function mark(id) {
    links.forEach(function (a) {
      var on = a.hash === '#' + id;
      a.classList.toggle('on', on);
      if (on) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
  }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) mark(e.target.id); });
  }, { rootMargin: '-40% 0px -55% 0px' });
  links.forEach(function (a) {
    var s = document.getElementById(a.hash.slice(1));
    if (s) io.observe(s);
  });
})();
