const products = [
  { id: 1, name: 'مياه نوفا ٢٠٠ مل', price: '١٢٫٥٠ ر.س', img: 'https://placehold.co/300x300/0067A5/fff?text=200ml' },
  { id: 2, name: 'مياه نوفا ٣٣٠ مل', price: '١٩٫٥٠ ر.س', img: 'https://placehold.co/300x300/48A9C5/fff?text=330ml' },
  { id: 3, name: 'مياه نوفا ٥٥٠ مل', price: '١٨٫٥٠ ر.س', img: 'https://placehold.co/300x300/003B5C/fff?text=550ml' },
  { id: 4, name: 'مياه نوفا ١٫٥ لتر', price: '١٧٫٥٠ ر.س', img: 'https://placehold.co/300x300/0067A5/fff?text=1.5L' },
  { id: 5, name: 'مياه نوفا ٥ لتر', price: '١٨٫٥٠ ر.س', img: 'https://placehold.co/300x300/B3E5FC/003B5C?text=5L' },
  { id: 6, name: 'مياه نوفا ١٢ لتر', price: '١٩٫٥٠ ر.س', img: 'https://placehold.co/300x300/48A9C5/fff?text=12L' },
];

const squareItems = [
  { img: 'https://placehold.co/270x360/0067A5/fff?text=عبوات', link: '#' },
  { img: 'https://placehold.co/270x360/48A9C5/fff?text=عروض', link: '#' },
  { img: 'https://placehold.co/270x360/003B5C/fff?text=اشتراكات', link: '#' },
  { img: 'https://placehold.co/270x360/0067A5/fff?text=توصيل', link: '#' },
  { img: 'https://placehold.co/270x360/B3E5FC/003B5C?text=جديد', link: '#' },
  { img: 'https://placehold.co/270x360/48A9C5/fff?text=نوفا', link: '#' },
];

function createProductCard(p) {
  return `
    <div class="product-card">
      <div class="img-wrap"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <h3>${p.name}</h3>
      <div class="price">${p.price}</div>
      <button class="btn-add">أضف إلى السلة</button>
    </div>
  `;
}

const squareSlider = document.getElementById('squareSlider');
squareItems.forEach(item => {
  const el = document.createElement('div');
  el.className = 'square-item';
  el.innerHTML = `<a href="${item.link}"><div class="img-wrap"><img src="${item.img}" alt="" loading="lazy"></div></a>`;
  squareSlider.appendChild(el);
});

document.getElementById('comingSoon').innerHTML =
  products.slice(0, 3).map(createProductCard).join('');

document.getElementById('bestSellers').innerHTML =
  products.map(createProductCard).join('');

const offersSlider = document.getElementById('offersSlider');
offersSlider.innerHTML = [...products, ...products].map(createProductCard).join('');

document.getElementById('nextBtn').addEventListener('click', () => {
  offersSlider.scrollBy({ left: 240, behavior: 'smooth' });
});
document.getElementById('prevBtn').addEventListener('click', () => {
  offersSlider.scrollBy({ left: -240, behavior: 'smooth' });
});

let cartCount = 0;
document.querySelectorAll('.btn-add').forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    const badge = document.querySelector('.cart-badge');
    if (badge) badge.textContent = cartCount;
  });
});

document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('menu').classList.toggle('open');
});
