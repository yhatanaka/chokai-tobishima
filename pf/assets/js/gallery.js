// =====================
// Gallery JS
// =====================

let currentIndex = 0;
let photos = [];

document.addEventListener('DOMContentLoaded', () => {
  photos = Array.from(document.querySelectorAll('.photo-item'));

  // Lightbox open
  photos.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
  });

  // Keyboard nav
  document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('lightbox');
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changePhoto(-1);
    if (e.key === 'ArrowRight') changePhoto(1);
  });
});

function openLightbox(index) {
  const visiblePhotos = photos.filter(p => !p.classList.contains('hidden'));
  const item = visiblePhotos[index];
  if (!item) return;

  currentIndex = index;
  const img = item.querySelector('img');
  const caption = item.dataset.caption || '';

  document.getElementById('lb-img').src = img.src;
  document.getElementById('lb-caption').textContent = caption;

  const lb = document.getElementById('lightbox');
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

function changePhoto(dir) {
  const visiblePhotos = photos.filter(p => !p.classList.contains('hidden'));
  currentIndex = (currentIndex + dir + visiblePhotos.length) % visiblePhotos.length;
  const item = visiblePhotos[currentIndex];
  if (!item) return;

  const img = item.querySelector('img');
  document.getElementById('lb-img').src = img.src;
  document.getElementById('lb-caption').textContent = item.dataset.caption || '';
}

// =====================
// Category Filter
// =====================
function filterPhotos(category) {
  photos.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === category);
  });
}
