// Image gallery functionality
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('mainProductImage');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    mainImage.src = thumb.src;
  });
});

// Color swatch change
const swatches = document.querySelectorAll('.color-swatch');
swatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    const img = swatch.getAttribute('data-img');
    mainImage.src = `assets/images/${img}`;
    localStorage.setItem('selectedColor', img);
  });
});

// Retain selected color on page reload
window.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('selectedColor');
  if (savedColor) {
    mainImage.src = `assets/images/${savedColor}`;
  }
});

// Modal for size chart
const sizeChartBtn = document.getElementById('sizeChartBtn');
const sizeChartModal = document.getElementById('sizeChartModal');
const closeSizeChart = document.getElementById('closeSizeChart');

sizeChartBtn.addEventListener('click', () => {
  sizeChartModal.style.display = 'flex';
});

closeSizeChart.addEventListener('click', () => {
  sizeChartModal.style.display = 'none';
});

// Modal for compare colors
const compareBtn = document.getElementById('compareColorsBtn');
const compareModal = document.getElementById('compareColorsModal');
const closeCompare = document.getElementById('closeCompareColors');

compareBtn.addEventListener('click', () => {
  compareModal.style.display = 'flex';
});

closeCompare.addEventListener('click', () => {
  compareModal.style.display = 'none';
});

// Close modals on outside click or Escape key
window.addEventListener('click', (e) => {
  if (e.target === sizeChartModal) sizeChartModal.style.display = 'none';
  if (e.target === compareModal) compareModal.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    sizeChartModal.style.display = 'none';
    compareModal.style.display = 'none';
  }
});

// Tabs logic
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.add('hidden'));

    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.remove('hidden');
  });
});