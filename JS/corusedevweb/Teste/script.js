document.querySelector('.dados').addEventListener('input', function() {
    this.value = this.value.slice(0, 20);
});