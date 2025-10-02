// script.js
// Sakri & San's store interactive JS
// Drop this file in the same folder as index.html and include with <script src="script.js"></script>
// Author: ChatGPT (example code)

(function () {
  'use strict';

  // Keys for localStorage
  const CART_KEY = 'sakri_cart_v1';
  const ADDR_KEY = 'sakri_address_v1';

  // Utilities
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const formatPrice = v => {
    try {
      return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(v);
    } catch (e) {
      return '₹' + v;
    }
  };

  // Load/Save cart
  let cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  const saveCart = () => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
  };

  // === DOM elements that exist in your HTML/CSS ===
  const boxes = $$('.shop-section .box');                 // category boxes (from index.html). :contentReference[oaicite:2]{index=2}
  const searchInput = $('.search-input');                 // search input in header. :contentReference[oaicite:3]{index=3}
  const searchSelect = $('.search-select');               // search select (All). :contentReference[oaicite:4]{index=4}
  const searchIcon = $('.search-icon');                   // magnifier. :contentReference[oaicite:5]{index=5}
  const navCart = $('.nav-cart');                         // cart button in navbar. :contentReference[oaicite:6]{index=6}
  const navAddress = $('.nav-address');                   // address button in navbar. :contentReference[oaicite:7]{index=7}
  const addSec = $('.add-sec');                           // address text. :contentReference[oaicite:8]{index=8}
  const backTop = $('.foot-panel1');                      // back to top (footer). :contentReference[oaicite:9]{index=9}

  // Create a small cart-count badge in the nav-cart
  const cartCount = document.createElement('span');
  cartCount.className = 'cart-count-badge';
  cartCount.style.cssText = 'margin-left:8px;padding:2px 8px;border-radius:12px;background:#f0c14b;color:#111;font-weight:700;font-size:0.85rem';
  navCart.appendChild(cartCount);

  const updateCartCount = () => {
    const totalQty = cart.reduce((s, it) => s + (it.qty || 0), 0);
    cartCount.textContent = totalQty;
    // subtle visibility
    cartCount.style.display = totalQty > 0 ? 'inline-block' : 'none';
  };
  updateCartCount();

  // Helper: find image URL from a category box .box-img background-image
  const imageFromBox = (boxEl) => {
    const bi = boxEl.querySelector('.box-img');
    if (!bi) return '';
    const bg = window.getComputedStyle(bi).backgroundImage || '';
    // bg is like: url("filename")
    const match = bg.match(/url\((['"]?)(.+?)\1\)/);
    return match ? match[2] : '';
  };

  // Build example products data per category using titles from your boxes
  // We'll automatically pick up the exact <h2> text you used in each box.
  // You can extend product arrays later or replace these with real data fetched from a server.
  const productsMap = {};
  boxes.forEach((boxEl, idx) => {
    const title = (boxEl.querySelector('h2') || { innerText: 'Category' }).innerText.trim();
    const img = imageFromBox(boxEl);
    // create 3 sample products per category (IDs unique)
    productsMap[title] = Array.from({ length: 3 }).map((_, i) => ({
      id: `${title.replace(/\s+/g, '_').toLowerCase()}_${i + 1}`,
      title: `${title} — Item ${i + 1}`,
      price: (60 + (i * 40) + (idx * 10)), // sample price formula
      img: img || '',
      description: `A good ${title.toLowerCase()} product.`
    }));
  });

  // Create overlays (product modal + cart drawer) styles injected via JS so you don't need to edit CSS
  const styleTag = document.createElement('style');
  styleTag.textContent = `
  /* small styles for overlays and product cards */
  .sakri-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:9999; }
  .sakri-modal { width:90%; max-width:1000px; background:#fff; border-radius:8px; padding:16px; max-height:85vh; overflow:auto; box-shadow:0 8px 30px rgba(0,0,0,0.3); }
  .sakri-modal h3 { margin:0 0 12px 0; font-size:1.2rem; }
  .products-grid { display:grid; grid-template-columns: repeat(auto-fill,minmax(220px,1fr)); gap:12px; }
  .product-card { border:1px solid #e6e6e6; padding:10px; border-radius:6px; display:flex; flex-direction:column; min-height:160px; }
  .product-card img { width:100%; height:120px; object-fit:cover; border-radius:4px; margin-bottom:8px; }
  .product-card .title { font-weight:700; font-size:0.95rem; margin-bottom:6px; }
  .product-card .price { margin-top:auto; font-weight:700; }
  .product-card button { margin-top:8px; padding:8px; border-radius:6px; border:none; cursor:pointer; }
  .sakri-cart-drawer { position:fixed; right:0; top:0; height:100vh; width:360px; max-width:90vw; background:#fff; z-index:10000; box-shadow:-8px 0 30px rgba(0,0,0,0.25); display:flex; flex-direction:column; }
  .cart-header { padding:12px; border-bottom:1px solid #eee; display:flex; justify-content:space-between; align-items:center; }
  .cart-items { padding:12px; overflow:auto; flex:1; }
  .cart-item { display:flex; gap:10px; align-items:center; border-bottom:1px solid #f2f2f2; padding:10px 0; }
  .cart-item img { width:64px; height:64px; object-fit:cover; border-radius:6px; }
  .cart-item .meta { flex:1; }
  .cart-item .qty-controls { display:flex; gap:6px; align-items:center; }
  .cart-footer { padding:12px; border-top:1px solid #eee; }
  .cart-empty { padding:32px; text-align:center; color:#666; }
  `;
  document.head.appendChild(styleTag);

  // Create and show product modal for a category
  function openCategoryModal(category) {
    const products = productsMap[category] || [];
    const overlay = document.createElement('div');
    overlay.className = 'sakri-overlay';
    overlay.innerHTML = `
      <div class="sakri-modal" role="dialog" aria-modal="true" aria-label="${category} products">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <h3>Products: ${category}</h3>
          <button class="sakri-close-btn" aria-label="Close" style="padding:6px 8px;border-radius:6px;border:none;cursor:pointer;">✕</button>
        </div>
        <div class="products-grid">
          ${products.map(p => `
            <div class="product-card" data-id="${p.id}">
              ${p.img ? `<img src="${p.img}" alt="${p.title}">` : `<div style="height:120px;background:#f3f3f3;display:flex;align-items:center;justify-content:center;color:#999;border-radius:4px">No image</div>`}
              <div class="title">${p.title}</div>
              <div class="desc" style="font-size:0.85rem;color:#555">${p.description}</div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
                <div class="price">${formatPrice(p.price)}</div>
                <button class="add-to-cart" data-id="${p.id}" style="background:#ffd814;">Add</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // close handlers
    overlay.addEventListener('click', (ev) => {
      if (ev.target === overlay) overlay.remove();
    });
    overlay.querySelector('.sakri-close-btn').addEventListener('click', () => overlay.remove());

    // bind add-to-cart buttons
    overlay.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.getAttribute('data-id');
        const p = products.find(x => x.id === id);
        if (p) addToCart(p);
        // small visual feedback
        btn.textContent = 'Added ✓';
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = 'Add';
          btn.disabled = false;
        }, 700);
      });
    });

    // keyboard: close on Escape
    const onKey = (ev) => { if (ev.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', onKey); } };
    document.addEventListener('keydown', onKey);
  }

  // Add to cart logic
  function addToCart(product) {
    const idx = cart.findIndex(it => it.id === product.id);
    if (idx >= 0) {
      cart[idx].qty += 1;
    } else {
      cart.push({ id: product.id, title: product.title, price: product.price, img: product.img, qty: 1 });
    }
    saveCart();
    // small toast
    showToast(`${product.title} added to cart`);
  }

  // Simple toast helper
  function showToast(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = 'position:fixed;left:50%;transform:translateX(-50%);bottom:24px;background:#111;color:#fff;padding:8px 12px;border-radius:8px;z-index:12000;opacity:0;transition:all .25s';
    document.body.appendChild(t);
    requestAnimationFrame(()=> t.style.opacity = '1');
    setTimeout(()=> { t.style.opacity = '0'; setTimeout(()=> t.remove(), 300); }, 1400);
  }

  // Cart drawer: open + render
  let cartDrawerEl = null;
  function openCartDrawer() {
    // if exists remove (reopen fresh)
    if (cartDrawerEl) cartDrawerEl.remove();
    // drawer container
    cartDrawerEl = document.createElement('div');
    cartDrawerEl.className = 'sakri-cart-drawer';
    cartDrawerEl.innerHTML = `
      <div class="cart-header">
        <strong>Your Cart</strong>
        <div>
          <button class="cart-close" aria-label="Close" style="padding:6px;border-radius:6px;border:none;cursor:pointer;">✕</button>
        </div>
      </div>
      <div class="cart-items"></div>
      <div class="cart-footer">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div><strong>Total</strong></div>
          <div class="cart-total">${formatPrice(cart.reduce((s,i)=>s+i.price*i.qty,0))}</div>
        </div>
        <div style="margin-top:10px;display:flex;gap:8px;">
          <button class="checkout-btn" style="flex:1;padding:10px;border-radius:6px;border:none;background:#ffd814;cursor:pointer;">Checkout</button>
          <button class="clear-btn" style="padding:10px;border-radius:6px;border:1px solid #ddd;background:#fff;cursor:pointer;">Clear</button>
        </div>
      </div>
    `;
    document.body.appendChild(cartDrawerEl);

    cartDrawerEl.querySelector('.cart-close').addEventListener('click', () => cartDrawerEl.remove());
    cartDrawerEl.querySelector('.clear-btn').addEventListener('click', () => {
      if (!confirm('Clear cart?')) return;
      cart = [];
      saveCart();
      renderCartItems();
    });
    cartDrawerEl.querySelector('.checkout-btn').addEventListener('click', () => {
      alert('Checkout demo — integrate payment / server to complete order.');
    });

    renderCartItems();
  }

  // render items inside drawer
  function renderCartItems() {
    if (!cartDrawerEl) return;
    const container = cartDrawerEl.querySelector('.cart-items');
    container.innerHTML = '';
    if (cart.length === 0) {
      container.innerHTML = `<div class="cart-empty">Your cart is empty</div>`;
      cartDrawerEl.querySelector('.cart-total').textContent = formatPrice(0);
      return;
    }
    cart.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <img src="${item.img || ''}" alt="${item.title}">
        <div class="meta">
          <div style="font-weight:700">${item.title}</div>
          <div style="font-size:0.9rem;color:#666">${formatPrice(item.price)}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end">
          <div class="qty-controls" style="margin-bottom:6px">
            <button class="dec" data-id="${item.id}" style="padding:6px;border-radius:6px;border:1px solid #ddd;cursor:pointer;">−</button>
            <span style="padding:6px 8px;display:inline-block">${item.qty}</span>
            <button class="inc" data-id="${item.id}" style="padding:6px;border-radius:6px;border:1px solid #ddd;cursor:pointer;">+</button>
          </div>
          <button class="remove" data-id="${item.id}" style="padding:6px;border-radius:6px;border:none;background:#f2f2f2;cursor:pointer;">Remove</button>
        </div>
      `;
      container.appendChild(itemEl);
    });

    // attach controls
    container.querySelectorAll('.inc').forEach(b => b.addEventListener('click', () => {
      const id = b.getAttribute('data-id'); const it = cart.find(x => x.id === id); if (it) { it.qty += 1; saveCart(); renderCartItems(); }
    }));
    container.querySelectorAll('.dec').forEach(b => b.addEventListener('click', () => {
      const id = b.getAttribute('data-id'); const it = cart.find(x => x.id === id); if (it) { it.qty = Math.max(1, it.qty - 1); saveCart(); renderCartItems(); }
    }));
    container.querySelectorAll('.remove').forEach(b => b.addEventListener('click', () => {
      const id = b.getAttribute('data-id');
      cart = cart.filter(x => x.id !== id);
      saveCart();
      renderCartItems();
    }));

    cartDrawerEl.querySelector('.cart-total').textContent = formatPrice(cart.reduce((s,i)=>s+i.price*i.qty,0));
  }

  // Search / filter functionality: live filter category boxes by title
  function bindSearch() {
    const doFilter = () => {
      const q = (searchInput.value || '').trim().toLowerCase();
      boxes.forEach(b => {
        const t = (b.querySelector('h2') || { innerText: '' }).innerText.toLowerCase();
        b.style.display = (q === '' || t.includes(q)) ? '' : 'none';
      });
    };
    searchInput.addEventListener('input', doFilter);
    searchIcon.addEventListener('click', doFilter);
    // Enter key in the search input triggers a filter (and optionally could open a results modal)
    searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') doFilter(); });
  }

  // Make each box clickable and bind the "see more" paragraph
  function bindCategoryBoxes() {
    boxes.forEach(box => {
      const title = (box.querySelector('h2') || { innerText: 'Category' }).innerText.trim();
      // click whole box
      box.addEventListener('click', (ev) => {
        // if user clicked the cart, or something inside, let it bubble; we want category open if click on box area
        openCategoryModal(title);
      });
      // prevent double reaction when clicking child "see more" - still open the same modal
      const seeP = box.querySelector('.box-content p');
      if (seeP) {
        seeP.style.cursor = 'pointer';
        seeP.addEventListener('click', (ev) => {
          ev.stopPropagation();
          openCategoryModal(title);
        });
      }
    });
  }

  // Address editing
  function bindAddress() {
    // load saved address
    const saved = localStorage.getItem(ADDR_KEY);
    if (saved && addSec) addSec.textContent = saved;
    navAddress.addEventListener('click', (ev) => {
      ev.preventDefault();
      const current = addSec ? addSec.textContent : '';
      const newAddr = prompt('Enter your delivery location (city / area):', current || 'Hosakoti');
      if (newAddr !== null && newAddr.trim() !== '') {
        addSec.textContent = newAddr.trim();
        localStorage.setItem(ADDR_KEY, newAddr.trim());
        showToast('Delivery location updated');
      }
    });
  }

  // foot back-to-top
  function bindBackTop() {
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // nav-cart open drawer
  navCart.addEventListener('click', (ev) => { ev.preventDefault(); openCartDrawer(); });

  // On DOM ready: bind all
  document.addEventListener('DOMContentLoaded', () => {
    bindSearch();
    bindCategoryBoxes();
    bindAddress();
    bindBackTop();
    // ensure initial cart count shows correct value
    updateCartCount();
  });

  // also call immediately in case script loaded after DOM
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    bindSearch();
    bindCategoryBoxes();
    bindAddress();
    bindBackTop();
    updateCartCount();
  }

})();
