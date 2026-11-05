// ── THEME MANAGEMENT ──
function initTheme() {
  const saved = localStorage.getItem('shopzone_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('shopzone_theme', next);
}
initTheme();

// ── AUTH CHECK ──
function checkAuth() {
  const user = JSON.parse(sessionStorage.getItem('shopzone_user') || 'null');
  const nav = document.getElementById('authNav');
  if (!nav) return;
  if (user) {
    nav.innerHTML = `<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><i class="fas fa-user-circle me-1"></i>${user.name}</a>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#"><i class="fas fa-box me-2"></i>My Orders</a></li>
        <li><a class="dropdown-item" href="#"><i class="fas fa-heart me-2"></i>Wishlist</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item text-danger" href="#" onclick="logout()"><i class="fas fa-sign-out-alt me-2"></i>Logout</a></li>
      </ul>`;
  }
}
function logout() {
  sessionStorage.removeItem('shopzone_user');
  window.location.href = 'login.html';
}
