// ── CART MANAGEMENT ──
function getCart() { return JSON.parse(localStorage.getItem('shopzone_cart') || '[]'); }
function saveCart(cart) { localStorage.setItem('shopzone_cart', JSON.stringify(cart)); updateCartCount(); }

function addToCart(productId, qty = 1) {
  let cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    const p = PRODUCTS.find(x => x.id === productId);
    if (p) cart.push({ id: p.id, name: p.name, price: p.price, image: p.image, qty });
  }
  saveCart(cart);
  showToast(`Added to cart! 🛒`, 'success');
  updateCartCount();
}

function removeFromCart(productId) {
  let cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
  if (typeof renderCart === 'function') renderCart();
  showToast('Item removed from cart', 'warning');
}

function updateQty(productId, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    saveCart(cart);
  }
  if (typeof renderCart === 'function') renderCart();
}

function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const el = document.getElementById('cartCount');
  if (el) { el.textContent = total; el.style.display = total > 0 ? 'inline' : 'none'; }
}

function getCartTotals() {
  const cart = getCart();
  const coupon = localStorage.getItem('shopzone_coupon') || '';
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  let discount = 0;
  if (coupon === 'SAVE10') discount = Math.round(subtotal * 0.10);
  else if (coupon === 'FLAT200') discount = Math.min(200, subtotal);
  else if (coupon === 'FIRST50') discount = Math.round(subtotal * 0.50);
  const shipping = subtotal - discount > 499 ? 0 : 49;
  const total = subtotal - discount + shipping;
  return { subtotal, discount, shipping, total, coupon };
}

function showToast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const colors = { success: 'bg-success', danger: 'bg-danger', warning: 'bg-warning text-dark', info: 'bg-info' };
  const id = 'toast-' + Date.now();
  const html = `<div id="${id}" class="toast align-items-center text-white ${colors[type]} border-0 show mb-2" role="alert">
    <div class="d-flex"><div class="toast-body fw-500">${msg}</div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" onclick="document.getElementById('${id}').remove()"></button></div></div>`;
  container.insertAdjacentHTML('beforeend', html);
  setTimeout(() => { const el = document.getElementById(id); if(el) el.remove(); }, 3000);
}
