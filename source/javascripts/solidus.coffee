window.triggerEvent = (el, eventName) ->
  event = document.createEvent("HTMLEvents")
  event.initEvent(eventName, true, false)
  el.dispatchEvent(event)

CustomSelect = (selectWrapper) ->
  @select = selectWrapper.querySelectorAll("select")[0]
  @selectedTextDisplay = selectWrapper.querySelector(".selected-text")

  @currentSelection = =>
    @select.value

  @updateSelection = =>
    @selectedTextDisplay.textContent = @currentSelection()

  @select.addEventListener "change", @updateSelection
  triggerEvent(@select, "change")

new CustomSelect(select) for select in document.querySelectorAll(".select-wrapper")
