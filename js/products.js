
// ============================================================
// PRODUCT DATA – SHOPZONE
// ============================================================

const PRODUCTS = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro',
    category: 'electronics',
    price: 89999,
    originalPrice: 99999,
    rating: 4.8,
    reviews: 2341,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    badge: 'New',
    featured: true,
    available: true,
    description: 'The most powerful iPhone ever. A17 Pro chip, titanium design, and an innovative Action button.',
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&h=400&fit=crop'
    ]
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    category: 'electronics',
    price: 109999,
    originalPrice: 129999,
    rating: 4.7,
    reviews: 1876,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
    badge: 'Sale',
    featured: true,
    available: true,
    description: 'Galaxy AI is here. The Samsung Galaxy S24 Ultra with 200MP camera and built-in S Pen.',
    images: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400&h=400&fit=crop'
    ]
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5 Headphones',
    category: 'electronics',
    price: 24999,
    originalPrice: 32999,
    rating: 4.9,
    reviews: 3124,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    badge: 'Sale',
    featured: true,
    available: true,
    description: 'Industry-leading noise canceling headphones with exceptional sound.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop'
    ]
  },
  {
    id: 4,
    name: 'MacBook Air M3',
    category: 'electronics',
    price: 114900,
    originalPrice: 124900,
    rating: 4.9,
    reviews: 987,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    badge: 'New',
    featured: true,
    available: true,
    description: 'Supercharged by M3, MacBook Air is insanely thin, fanless and quiet.',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop'
    ]
  },
  {
    id: 5,
    name: 'Nike Air Max 270',
    category: 'fashion',
    price: 8999,
    originalPrice: 11999,
    rating: 4.5,
    reviews: 2567,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    badge: 'Sale',
    featured: false,
    available: true,
    description: 'Nike Air Max 270 delivers visible heel cushioning for all-day comfort.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop'
    ]
  },
  {
    id: 6,
    name: "Levi's 511 Slim Jeans",
    category: 'fashion',
    price: 3499,
    originalPrice: 4999,
    rating: 4.3,
    reviews: 1234,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    badge: '',
    featured: false,
    available: true,
    description: "Classic slim fit jeans from Levi's, perfect for everyday wear.",
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop'
    ]
  },
  {
    id: 7,
    name: 'Dyson V15 Detect Vacuum',
    category: 'home',
    price: 43990,
    originalPrice: 55990,
    rating: 4.7,
    reviews: 876,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    badge: 'Sale',
    featured: true,
    available: true,
    description: "Dyson's most powerful and intelligent cordless vacuum.",
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop'
    ]
  },
  {
    id: 8,
    name: 'Weber BBQ Grill',
    category: 'home',
    price: 15999,
    originalPrice: 19999,
    rating: 4.4,
    reviews: 543,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
    badge: '',
    featured: false,
    available: true,
    description: 'Premium gas grill for outdoor cooking experiences.',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop'
    ]
  },
  {
    id: 9,
    name: 'Yoga Mat Pro',
    category: 'sports',
    price: 1999,
    originalPrice: 2999,
    rating: 4.6,
    reviews: 3456,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    badge: 'New',
    featured: false,
    available: true,
    description: 'Non-slip professional yoga mat with alignment lines.',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop'
    ]
  },
  {
    id: 10,
    name: 'Protein Powder – Whey Gold',
    category: 'sports',
    price: 2499,
    originalPrice: 3499,
    rating: 4.8,
    reviews: 5678,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop',
    badge: 'Sale',
    featured: false,
    available: true,
    description: '100% Whey Gold Standard protein powder, 24g protein per serving.',
    images: [
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop'
    ]
  },

  {
    id: 12,
    name: 'The Alchemist – Paulo Coelho',
    category: 'books',
    price: 299,
    originalPrice: 450,
    rating: 4.9,
    reviews: 15234,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    badge: '',
    featured: false,
    available: true,
    description: 'An international bestseller that has changed millions of lives.',
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop'
    ]
  },
  {
    id: 13,
    name: 'iPad Pro 12.9"',
    category: 'electronics',
    price: 94900,
    originalPrice: 109900,
    rating: 4.8,
    reviews: 765,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    badge: 'New',
    featured: true,
    available: true,
    description: 'The ultimate iPad experience with M2 chip and Liquid Retina XDR display.',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop'
    ]
  },
  {
    id: 14,
    name: 'Adidas Running Shoes',
    category: 'fashion',
    price: 6499,
    originalPrice: 8999,
    rating: 4.4,
    reviews: 1876,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop',
    badge: 'Sale',
    featured: false,
    available: true,
    description: 'Lightweight performance running shoes with Boost technology.',
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop'
    ]
  },

  {
    id: 16,
    name: 'Canon EOS R50 Camera',
    category: 'electronics',
    price: 64990,
    originalPrice: 72990,
    rating: 4.6,
    reviews: 432,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
    badge: 'New',
    featured: true,
    available: true,
    description: 'Compact mirrorless camera with 24.2MP sensor and 4K video.',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop'
    ]
  }
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function getDiscountPercent(price, original) {
  return Math.round(((original - price) / original) * 100);
}

// ============================================================
// PRODUCT IMAGE FALLBACK
// ============================================================

const PRODUCT_IMAGE_FALLBACK =
  'https://placehold.co/400x400?text=Image+Not+Available';

// ============================================================
// RENDER PRODUCT CARD
// ============================================================

function renderProductCard(p) {
  const disc = p.originalPrice
    ? getDiscountPercent(p.price, p.originalPrice)
    : 0;

  const badge =
    p.available === false
      ? `<span class="product-badge out">Out of Stock</span>`
      : p.badge
        ? `<span class="product-badge ${p.badge.toLowerCase()}">${p.badge}</span>`
        : '';

  const stars =
    '★'.repeat(Math.floor(p.rating)) +
    (p.rating % 1 >= 0.5
      ? '½'
      : '☆'.repeat(5 - Math.ceil(p.rating)));

  const inCompare = isInCompare(p.id);

  return `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="product-card">

        <div class="img-wrap">
          ${badge}

          <button
            class="wishlist-btn ${isWishlisted(p.id) ? 'active' : ''}"
            onclick="toggleWishlist(${p.id})"
            id="wish-${p.id}"
            title="Add to Wishlist">
            <i class="fas fa-heart"></i>
          </button>

          <img
            src="${p.image || PRODUCT_IMAGE_FALLBACK}"
            alt="${p.name}"
            loading="lazy"
            onerror="this.onerror=null;this.src='${PRODUCT_IMAGE_FALLBACK}';"
            onclick="window.location='product-details.html?id=${p.id}'"
            style="cursor:pointer;"
          />
        </div>

        <div class="card-body">

          <p
            class="product-title"
            onclick="window.location='product-details.html?id=${p.id}'"
            style="cursor:pointer;">
            ${p.name}
          </p>

          <div class="rating mb-1">
            ${stars}
            <span>(${p.reviews})</span>
          </div>

          <div class="d-flex align-items-center flex-wrap gap-1 mb-2">

            <span class="product-price">
              ₹${p.price.toLocaleString('en-IN')}
            </span>

            ${p.originalPrice
      ? `<span class="product-original">₹${p.originalPrice.toLocaleString('en-IN')}</span>`
      : ''
    }

            ${disc > 0
      ? `<span class="product-discount">${disc}% off</span>`
      : ''
    }

          </div>

          <button
            class="btn-add-cart"
            onclick="addToCart(${p.id})"
            ${!p.available ? 'disabled' : ''}>
            <i class="fas fa-cart-plus me-1"></i>
            ${p.available ? 'Add to Cart' : 'Out of Stock'}
          </button>

          <label class="compare-check mt-2 d-flex align-items-center gap-1 small"
            style="cursor:pointer;">

            <input
              type="checkbox"
              ${inCompare ? 'checked' : ''}
              onchange="toggleCompare(${p.id}, this.checked)"
            />

            <i class="fas fa-exchange-alt me-1"></i>
            Compare

          </label>

        </div>
      </div>
    </div>
  `;
}

// ============================================================
// WISHLIST
// ============================================================

function getWishlistData() {
  const raw = JSON.parse(
    localStorage.getItem('shopzone_wishlist') || '[]'
  );

  // Backward compatibility: migrate old number format
  if (raw.length > 0 && typeof raw[0] === 'number') {
    const migrated = raw.map(id => ({
      id,
      addedAt: Date.now()
    }));

    localStorage.setItem(
      'shopzone_wishlist',
      JSON.stringify(migrated)
    );

    return migrated;
  }

  return raw;
}

function isWishlisted(id) {
  return getWishlistData().some(w => w.id === id);
}

function toggleWishlist(id) {
  let w = getWishlistData();

  const btn = document.getElementById(`wish-${id}`);

  if (w.some(x => x.id === id)) {
    w = w.filter(x => x.id !== id);

    if (btn) btn.classList.remove('active');

    showToast('Removed from wishlist', 'warning');

  } else {
    w.push({
      id,
      addedAt: Date.now()
    });

    if (btn) btn.classList.add('active');

    showToast('Added to wishlist ❤️', 'success');
  }

  localStorage.setItem(
    'shopzone_wishlist',
    JSON.stringify(w)
  );

  updateWishlistCount();
}

function updateWishlistCount() {
  const count = getWishlistData().length;

  const el = document.getElementById('wishlistCount');

  if (el) {
    el.textContent = count;
    el.style.display = count > 0 ? 'inline' : 'none';
  }
}

// ============================================================
// COMPARE PRODUCTS
// ============================================================

function getCompareList() {
  return JSON.parse(
    localStorage.getItem('shopzone_compare') || '[]'
  );
}

function isInCompare(id) {
  return getCompareList().includes(id);
}

function addToCompare(id) {
  let list = getCompareList();

  if (list.length >= 4) {
    showToast(
      'You can compare up to 4 products only!',
      'warning'
    );

    return false;
  }

  if (!list.includes(id)) {
    list.push(id);

    localStorage.setItem(
      'shopzone_compare',
      JSON.stringify(list)
    );

    showToast('Added to comparison ⚖️', 'success');

    updateCompareCount();

    return true;
  }

  return false;
}

function removeFromCompare(id) {
  let list = getCompareList().filter(x => x !== id);

  localStorage.setItem(
    'shopzone_compare',
    JSON.stringify(list)
  );

  updateCompareCount();
}

function toggleCompare(id, checked) {
  if (checked) {
    if (!addToCompare(id)) {
      const cb = document.querySelector(
        `input[onchange="toggleCompare(${id}, this.checked)"]`
      );

      if (cb) cb.checked = false;
    }

  } else {
    removeFromCompare(id);

    showToast(
      'Removed from comparison',
      'warning'
    );
  }
}

function updateCompareCount() {
  const count = getCompareList().length;

  const el = document.getElementById('compareCount');

  if (el) {
    el.textContent = count;
    el.style.display = count > 0 ? 'inline' : 'none';
  }
}

// ============================================================
// RECENTLY VIEWED PRODUCTS
// ============================================================

function trackRecentlyViewed(id) {
  let list = JSON.parse(
    localStorage.getItem('shopzone_recently_viewed') || '[]'
  );

  // Remove if already exists
  list = list.filter(x => x.id !== id);

  // Add product to the beginning
  list.unshift({
    id,
    viewedAt: Date.now()
  });

  // Keep maximum 10 products
  if (list.length > 10) {
    list = list.slice(0, 10);
  }

  localStorage.setItem(
    'shopzone_recently_viewed',
    JSON.stringify(list)
  );
}

function getRecentlyViewed() {
  return JSON.parse(
    localStorage.getItem('shopzone_recently_viewed') || '[]'
  );
}

function clearRecentlyViewed() {
  localStorage.removeItem('shopzone_recently_viewed');

  showToast(
    'Recently viewed cleared',
    'info'
  );
}
