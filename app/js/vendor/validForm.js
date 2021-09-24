document.querySelector('input[name=phone]').addEventListener('keyup', function(){
  this.value = this.value.replace (/[^0-9+]/, '')
})