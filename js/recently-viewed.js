// ── RECENTLY VIEWED PRODUCTS ──
// Standalone module – include after products.js on any page that needs it.

function getRecentlyViewed() {
  return JSON.parse(localStorage.getItem('shopzone_recently_viewed') || '[]');
}

function trackRecentlyViewed(id) {
  let list = getRecentlyViewed();
  // Remove duplicate
  list = list.filter(item => item.id !== id);
  // Add to front
  list.unshift({ id: id, viewedAt: Date.now() });
  // Cap at 10
  if (list.length > 10) list = list.slice(0, 10);
  localStorage.setItem('shopzone_recently_viewed', JSON.stringify(list));
}

function clearRecentlyViewed() {
  localStorage.removeItem('shopzone_recently_viewed');
  const section = document.getElementById('recentlyViewedSection');
  if (section) section.style.display = 'none';
  if (typeof showToast === 'function') showToast('Recently viewed cleared', 'info');
}

function renderRecentlyViewed(containerId) {
  const list = getRecentlyViewed();
  const container = document.getElementById(containerId);
  const section = document.getElementById('recentlyViewedSection');

  if (!container) return;

  if (list.length === 0) {
    if (section) section.style.display = 'none';
    return;
  }

  if (section) section.style.display = 'block';

  // Resolve product data
  const products = typeof PRODUCTS !== 'undefined' ? PRODUCTS : [];
  const items = list
    .map(entry => {
      const p = products.find(pr => pr.id === entry.id);
      return p ? { ...p, viewedAt: entry.viewedAt } : null;
    })
    .filter(Boolean);

  if (items.length === 0) {
    if (section) section.style.display = 'none';
    return;
  }

  container.innerHTML = items.map(p => `
    <div class="rv-card" onclick="window.location.href='product-details.html?id=${p.id}'">
      <img data-src="${p.image}" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=" alt="${p.name}" loading="lazy" class="lazy"/>
      <div class="rv-info">
        <div class="rv-name" title="${p.name}">${p.name}</div>
        <div class="rv-price">₹${p.price.toLocaleString()}</div>
        <div class="text-muted" style="font-size:0.72rem;">${timeAgo(p.viewedAt)}</div>
      </div>
    </div>
  `).join('');
}

function timeAgo(ts) {
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 60) return 'Just now';
  if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
  if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
  return Math.floor(diff / 86400) + 'd ago';
}

// Auto-render on DOMContentLoaded if the section exists
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('recentlyViewedSection')) {
    renderRecentlyViewed('recentlyViewedRow');
  }
});
