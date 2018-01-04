#= require vendor/jquery-2.1.4.min
#= require vendor/jquery.ba-throttle-debounce.min
#= require vendor/jquery.fluidbox.min

imageOnly = ->
  hasImage = $(this).find('img:not(.no-box)').length == 1
  hasText = $.trim($(this).text()).length
  hasImage and !hasText

toFigure = ->
  img = $(this).find('img')
  figure = $('<figure>').append(img)
  caption = img.attr('title')
  if caption?
    figure.append("<figcaption>#{caption}</figcaption>")
  figure.replaceAll(this)

wrapWithFluidbox = ->
  target = $(this).attr('src')
  link = $("<a class='fluidbox'>").attr('href', target)
  $(this).wrap(link)

$('.blog-article p')
  .filter(imageOnly)
  .map(toFigure)
  .map -> $(this).find('img')
  .map(wrapWithFluidbox)

$('.fluidbox').fluidbox()
