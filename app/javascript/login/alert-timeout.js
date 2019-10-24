const removeTimeout = function () {
  $('.alert').fadeOut()
}

$(function() {
  setTimeout(removeTimeout, 3000)
})
