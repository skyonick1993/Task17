import $ from 'jquery';

const $window = $(window)
const INTERVAL = 30

var setIn = function () {
  var inRatio = 1
  var $ins = $('[data-in]')

  var onScroll = function () {
    var windowHeight = $window.height()
    var scrollTop = $window.scrollTop()

    $ins.each(function () {
      var $el = $(this)

      if (!$el.is('[data-in-out]') && $el.hasClass('is-in')) {
        return
      }

      var inOutTop = $el.data('in-top')
      if (inOutTop) {
        $el.toggleClass('is-in', scrollTop >= inOutTop)
        return
      }

      var $group = $el.closest('[data-in-group]')
      var elTop = $group.length ? $group.offset().top : $el.offset().top
      $group.add($el).toggleClass('is-in', inRatio >= (elTop - scrollTop) / windowHeight)
    })
  }

  // TODO: jQUery BUG
  // $window.on({
  //   scroll: $.throttle(INTERVAL, function () {
  //     onScroll()
  //   }),
  //   load: function () {
  //     onScroll()
  //   },
  // })
}

var setSmoothScroll = function () {
  var runSmoothScroll = function ($target) {
    if (!$target.length) return

    var $offset = $('[data-scroll-offset]')
    var targetTop = $target.offset().top
    var offsetTop = $offset.length ? $offset.height() : 0
    var scrollTop = targetTop - offsetTop
    $('html, body').stop().animate(
      {
        scrollTop: scrollTop,
      },
      800,
      'easeOutQuint'
    )
  }
  $('a[href^="#"]:not([href="#"]), a[href^="./#"]').on('click', function (ev) {
    var $target = $($(this).attr('href').replace(/^\.\//, ''))
    runSmoothScroll($target)
  })
  $window.on({
    load: function () {
      var $target = $(window.location.hash)
      runSmoothScroll($target)
    },
  })
}

setIn()
setSmoothScroll()
