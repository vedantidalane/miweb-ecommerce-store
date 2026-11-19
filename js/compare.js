// ── COMPARE PAGE LOGIC ──
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  updateWishlistCount();
  updateCompareCount();
  checkAuth();
  renderCompare();
});

function renderCompare() {
  const container = document.getElementById('compareContainer');
  const list = getCompareList();

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-exchange-alt"></i>
        <h4>No Products to Compare</h4>
        <p>Add products to compare by clicking the "Compare" checkbox on product cards.</p>
        <a href="products.html" class="btn btn-primary rounded-pill mt-3 px-4"><i class="fas fa-shopping-bag me-2"></i>Browse Products</a>
      </div>`;
    return;
  }

  const products = list.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  if (products.length === 0) {
    container.innerHTML = `<div class="empty-state"><i class="fas fa-exclamation-triangle"></i><h4>Products not found</h4></div>`;
    return;
  }

  // Find best values for highlighting
  const minPrice = Math.min(...products.map(p => p.price));
  const maxRating = Math.max(...products.map(p => p.rating));

  const specs = [
    { label: 'Image', key: 'image', type: 'image' },
    { label: 'Name', key: 'name', type: 'text' },
    { label: 'Price', key: 'price', type: 'price' },
    { label: 'Rating', key: 'rating', type: 'rating' },
    { label: 'Category', key: 'category', type: 'category' },
    { label: 'Description', key: 'description', type: 'desc' },
    { label: 'Availability', key: 'available', type: 'availability' },
  ];

  let html = `
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="fw-700 mb-0">Comparing ${products.length} Product${products.length > 1 ? 's' : ''}</h5>
      <button class="btn btn-outline-danger btn-sm rounded-pill" onclick="clearCompare()"><i class="fas fa-trash me-1"></i>Clear All</button>
    </div>
    <div class="table-responsive">
    <table class="compare-table">
      <thead>
        <tr>
          <th style="min-width:120px;">Specification</th>
          ${products.map(p => `
            <th class="text-center" style="min-width:200px;">
              <button class="btn btn-sm btn-outline-danger rounded-pill mb-2" onclick="removeAndRefresh(${p.id})"><i class="fas fa-times me-1"></i>Remove</button>
            </th>
          `).join('')}
        </tr>
      </thead>
      <tbody>`;

  specs.forEach(spec => {
    html += `<tr><td class="fw-600 spec-label">${spec.label}</td>`;
    products.forEach(p => {
      let val = p[spec.key];
      let cellClass = '';
      let cellContent = '';

      if (spec.type === 'image') {
        cellContent = `<img src="${val}" alt="${p.name}" class="compare-img" onclick="window.location='product-details.html?id=${p.id}'" style="cursor:pointer;"/>`;
      } else if (spec.type === 'price') {
        cellClass = val === minPrice && products.length > 1 ? 'text-success fw-700' : '';
        const disc = p.originalPrice ? `<div class="small text-muted text-decoration-line-through">₹${p.originalPrice.toLocaleString()}</div>` : '';
        cellContent = `<div class="${cellClass}">₹${val.toLocaleString()}</div>${disc}`;
        if (val === minPrice && products.length > 1) cellContent += `<span class="badge bg-success mt-1">Best Price</span>`;
      } else if (spec.type === 'rating') {
        cellClass = val === maxRating && products.length > 1 ? 'text-success' : '';
        const stars = '★'.repeat(Math.floor(val)) + (val % 1 >= 0.5 ? '½' : '');
        cellContent = `<div class="${cellClass}"><span class="rating">${stars}</span> <span class="fw-600">${val}</span></div>`;
        if (val === maxRating && products.length > 1) cellContent += `<span class="badge bg-success mt-1">Top Rated</span>`;
      } else if (spec.type === 'category') {
        const catEmoji = { electronics: '📱', fashion: '👗', home: '🏠', sports: '⚽', beauty: '💄', books: '📚' };
        cellContent = `${catEmoji[val] || ''} ${val.charAt(0).toUpperCase() + val.slice(1)}`;
      } else if (spec.type === 'desc') {
        cellContent = `<small>${val || 'N/A'}</small>`;
      } else if (spec.type === 'availability') {
        cellContent = val !== false ? '<span class="text-success"><i class="fas fa-check-circle me-1"></i>In Stock</span>' : '<span class="text-danger"><i class="fas fa-times-circle me-1"></i>Out of Stock</span>';
      } else {
        cellContent = val || 'N/A';
      }
      html += `<td class="text-center">${cellContent}</td>`;
    });
    html += `</tr>`;
  });

  // Actions row
  html += `<tr><td class="fw-600 spec-label">Actions</td>`;
  products.forEach(p => {
    html += `<td class="text-center">
      <button class="btn btn-primary btn-sm rounded-pill mb-1" onclick="addToCart(${p.id})" ${!p.available?'disabled':''}><i class="fas fa-cart-plus me-1"></i>Add to Cart</button><br/>
      <button class="btn btn-outline-secondary btn-sm rounded-pill" onclick="toggleWishlist(${p.id})"><i class="fas fa-heart me-1"></i>${isWishlisted(p.id)?'Wishlisted':'Wishlist'}</button>
    </td>`;
  });
  html += `</tr>`;

  html += `</tbody></table></div>`;

  // Add to compare from dropdown
  if (products.length < 4) {
    const available = PRODUCTS.filter(p => !list.includes(p.id));
    if (available.length > 0) {
      html += `
        <div class="mt-4 p-3 rounded-xl" style="background:var(--bg-secondary);border:1px solid var(--border-color);">
          <h6 class="fw-600 mb-2"><i class="fas fa-plus-circle me-1 text-primary"></i>Add Another Product</h6>
          <select class="form-select" id="addCompareSelect" onchange="addFromSelect(this.value)">
            <option value="">Select a product to compare...</option>
            ${available.map(p => `<option value="${p.id}">${p.name} – ₹${p.price.toLocaleString()}</option>`).join('')}
          </select>
        </div>`;
    }
  }

  container.innerHTML = html;
}

function removeAndRefresh(id) {
  removeFromCompare(id);
  showToast('Removed from comparison', 'warning');
  renderCompare();
}

function addFromSelect(val) {
  if (!val) return;
  addToCompare(parseInt(val));
  renderCompare();
}

function clearCompare() {
  localStorage.removeItem('shopzone_compare');
  updateCompareCount();
  showToast('Comparison cleared', 'info');
  renderCompare();
}
