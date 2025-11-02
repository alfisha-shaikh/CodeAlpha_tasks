const gallery = document.querySelector('.gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

gallery.addEventListener('click', function(e) {
  if (e.target.tagName === 'IMG') {
    modal.style.display = 'flex';
    modalImg.src = e.target.src;
    caption.textContent = e.target.alt;
  }
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
