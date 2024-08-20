document.addEventListener('DOMContentLoaded', function() {
    var readMoreButtons = document.getElementsByClassName('read-more');
    
    for (var i = 0; i < readMoreButtons.length; i++) {
      readMoreButtons[i].addEventListener('click', function() {
        var fullDescription = this.previousElementSibling;
        fullDescription.style.display = 'block';
        this.style.display = 'none';
      });
    }
  });
  