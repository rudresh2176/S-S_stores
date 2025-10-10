const CATEGORIES = [
  {
    id: '1',
    name: 'Groceries',
    description: 'Daily grocery items including rice, flour, pulses, spices and more',
    image_url: 'grocery.jpg'
  },
  {
    id: '2',
    name: 'Dairy Products',
    description: 'Fresh milk, curd, butter, cheese and Aditya Milk products',
    image_url: 'aditya_milk.webp'
  },
  {
    id: '3',
    name: 'Cold Drinks',
    description: 'Soft drinks, juices, energy drinks and packaged water',
    image_url: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    name: 'Stationary',
    description: 'Notebooks, pens, pencils and office supplies',
    image_url: 'stationary.jpg'
  },
  {
    id: '5',
    name: 'Snacks',
    description: 'Chips, biscuits, namkeen and other snack items',
    image_url: 'https://blog.foodcheri.com/wp-content/uploads/2017/05/snacks-2.jpg'
  },
  {
    id: '6',
    name: 'Personal Care',
    description: 'Soaps, shampoos, toothpaste and hygiene products',
    image_url: 'health.webp'
  }
];

const DEFAULT_PRODUCTS = [
  { id: '1', category_id: '1', name: 'Basmati Rice', description: 'Premium quality basmati rice', price: 120, stock_quantity: 50, unit: 'kg', image_url: 'https://th.bing.com/th/id/OSK.HEROV57pCLwZCF3Ha9y3DClsjFRjobs8zkRBbDzhITJDsHU?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', is_available: true },
  { id: '2', category_id: '1', name: 'Whole Wheat Flour', description: 'Fresh chakki atta', price: 45, stock_quantity: 100, unit: 'kg', image_url: 'https://tse4.mm.bing.net/th/id/OIP.ACkgx6Mo8rCPVzHmNv8FbwHaKv?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3', is_available: true },
  { id: '3', category_id: '1', name: 'Toor Dal', description: 'Premium toor dal', price: 140, stock_quantity: 30, unit: 'kg', image_url: 'https://th.bing.com/th/id/OIP.Kl8PcymPK_z13boB79ElagHaF6?w=236&h=189&c=7&r=0&o=7&cb=12&dpr=1.1&pid=1.7&rm=3', is_available: true },
  { id: '4', category_id: '2', name: 'Aditya Fresh Milk', description: 'Fresh full cream milk', price: 60, stock_quantity: 25, unit: 'liter', image_url: 'https://images.pexels.com/photos/416656/pexels-photo-416656.jpeg?auto=compress&cs=tinysrgb&w=400', is_available: true },
  { id: '5', category_id: '2', name: 'Curd', description: 'Fresh homemade style curd', price: 50, stock_quantity: 20, unit: 'kg', image_url: 'https://images.pexels.com/photos/3622479/pexels-photo-3622479.jpeg?auto=compress&cs=tinysrgb&w=400', is_available: true },
  { id: '6', category_id: '2', name: 'Paneer', description: 'Fresh cottage cheese', price: 250, stock_quantity: 15, unit: 'kg', image_url: 'https://images.pexels.com/photos/7129132/pexels-photo-7129132.jpeg?auto=compress&cs=tinysrgb&w=400', is_available: true },
  { id: '7', category_id: '3', name: 'Coca Cola', description: 'Refreshing cola drink', price: 40, stock_quantity: 100, unit: 'liter', image_url: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400', is_available: true },
  { id: '8', category_id: '3', name: 'Fresh Orange Juice', description: 'Packaged orange juice', price: 80, stock_quantity: 40, unit: 'liter', image_url: 'https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?auto=compress&cs=tinysrgb&w=400', is_available: true },
  { id: '9', category_id: '3', name: 'Mineral Water', description: 'Packaged drinking water', price: 20, stock_quantity: 200, unit: 'liter', image_url: 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=400', is_available: true },
  { id: '10', category_id: '4', name: 'Notebook A4', description: 'Single line ruled notebook', price: 50, stock_quantity: 60, unit: 'piece', image_url: 'https://images.pexels.com/photos/261734/pexels-photo-261734.jpeg?auto=compress&cs=tinysrgb&w=400', is_available: true },
  { id: '11', category_id: '4', name: 'Blue Pen', description: 'Smooth writing ball pen', price: 10, stock_quantity: 150, unit: 'piece', image_url: 'https://images.pexels.com/photos/159731/pencil-education-pencil-sharpener-art-supplies-159731.jpeg?auto=compress&cs=tinysrgb&w=400', is_available: true },
  { id: '12', category_id: '4', name: 'Pencil Set', description: 'HB pencils pack of 10', price: 30, stock_quantity: 80, unit: 'packet', image_url: 'https://images.pexels.com/photos/159731/pencil-education-pencil-sharpener-art-supplies-159731.jpeg?auto=compress&cs=tinysrgb&w=400', is_available: true },
  { id: '13', category_id: '5', name: 'Lays Chips', description: 'Classic salted potato chips', price: 20, stock_quantity: 100, unit: 'packet', image_url: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=400', is_available: true },
  { id: '14', category_id: '5', name: 'Parle-G Biscuits', description: 'Glucose biscuits', price: 10, stock_quantity: 120, unit: 'packet', image_url: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400', is_available: true },
  { id: '15', category_id: '5', name: 'Haldiram Namkeen', description: 'Spicy mixture namkeen', price: 40, stock_quantity: 50, unit: 'packet', image_url: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=400', is_available: true },
  { id: '16', category_id: '6', name: 'Dove Soap', description: 'Moisturizing beauty soap', price: 45, stock_quantity: 70, unit: 'piece', image_url: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400', is_available: true },
  { id: '17', category_id: '6', name: 'Colgate Toothpaste', description: 'Dental care toothpaste', price: 75, stock_quantity: 80, unit: 'piece', image_url: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400', is_available: true },
  { id: '18', category_id: '6', name: 'Clinic Plus Shampoo', description: 'Hair care shampoo', price: 120, stock_quantity: 40, unit: 'piece', image_url: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400', is_available: true }
];

let products = [];
let cart = [];
let orders = [];
let users = [];
let currentUser = null;

const ADMIN_CREDENTIALS = {
  username: 'RUDRESH',
  password: 'RBS@2176'
};

function initializeData() {
  const savedProducts = localStorage.getItem('products');
  const savedCart = localStorage.getItem('cart');
  const savedOrders = localStorage.getItem('orders');
  const savedUsers = localStorage.getItem('users');
  const savedCurrentUser = localStorage.getItem('currentUser');

  products = savedProducts ? JSON.parse(savedProducts) : [...DEFAULT_PRODUCTS];
  cart = savedCart ? JSON.parse(savedCart) : [];
  orders = savedOrders ? JSON.parse(savedOrders) : [];
  users = savedUsers ? JSON.parse(savedUsers) : [];
  currentUser = savedCurrentUser ? JSON.parse(savedCurrentUser) : null;

  updateUIForAuth();
}

function saveData() {
  localStorage.setItem('products', JSON.stringify(products));
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.setItem('users', JSON.stringify(users));
  if (currentUser) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  } else {
    localStorage.removeItem('currentUser');
  }
}

function updateUIForAuth() {
  const loginBtn = document.getElementById('loginBtn');
  const userMenu = document.getElementById('userMenu');
  const userName = document.getElementById('userName');
  const adminLink = document.getElementById('adminLink');

  if (currentUser) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (userMenu) userMenu.style.display = 'flex';
    if (userName) userName.textContent = currentUser.name;

    if (currentUser.username === ADMIN_CREDENTIALS.username) {
      if (adminLink) adminLink.style.display = 'inline-block';
    }
  } else {
    if (loginBtn) loginBtn.style.display = 'block';
    if (userMenu) userMenu.style.display = 'none';
    if (adminLink) adminLink.style.display = 'none';
  }
}

function renderCategories() {
  const categoryGrid = document.getElementById('categoryGrid');
  if (!categoryGrid) return;

  categoryGrid.innerHTML = CATEGORIES.map(category => `
    <div class="category-card" onclick="filterByCategory('${category.id}')">
      <img src="${category.image_url}" alt="${category.name}" class="category-image">
      <div class="category-info">
        <h3>${category.name}</h3>
        <p>${category.description}</p>
      </div>
    </div>
  `).join('');
}

function renderProducts(filteredProducts = null) {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;

  const productsToRender = filteredProducts || products.filter(p => p.is_available);

  if (productsToRender.length === 0) {
    productGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: var(--text-light);">No products found</p>';
    return;
  }

  productGrid.innerHTML = productsToRender.map(product => {
    const category = CATEGORIES.find(c => c.id === product.category_id);
    return `
      <div class="product-card">
        <img src="${product.image_url}" alt="${product.name}" class="product-image">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="product-price">₹${product.price.toFixed(2)}/${product.unit}</div>
          <div class="product-stock">Stock: ${product.stock_quantity} ${product.unit}(s)</div>
          <div class="product-actions">
            <button class="btn btn-primary" onclick="addToCart('${product.id}')" ${product.stock_quantity === 0 ? 'disabled' : ''}>
              ${product.stock_quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function populateCategoryFilter() {
  const categoryFilter = document.getElementById('categoryFilter');
  if (!categoryFilter) return;

  const currentValue = categoryFilter.value;
  categoryFilter.innerHTML = '<option value="all">All Categories</option>' +
    CATEGORIES.map(cat => `<option value="${cat.id}">${cat.name}</option>`).join('');
  categoryFilter.value = currentValue;
}

function filterByCategory(categoryId) {
  const categoryFilter = document.getElementById('categoryFilter');
  if (categoryFilter) {
    categoryFilter.value = categoryId;
    applyFilters();
  }
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function applyFilters() {
  const categoryFilter = document.getElementById('categoryFilter');
  const searchInput = document.getElementById('searchInput');

  let filtered = [...products].filter(p => p.is_available);

  if (categoryFilter && categoryFilter.value !== 'all') {
    filtered = filtered.filter(p => p.category_id === categoryFilter.value);
  }

  if (searchInput && searchInput.value.trim()) {
    const search = searchInput.value.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search)
    );
  }

  renderProducts(filtered);
}

function addToCart(productId) {
  if (!currentUser) {
    showNotification('Please login to add items to cart', 'error');
    openLoginModal();
    return;
  }

  const product = products.find(p => p.id === productId);
  if (!product || product.stock_quantity === 0) return;

  const cartItem = cart.find(item => item.productId === productId && item.userId === currentUser.id);

  if (cartItem) {
    if (cartItem.quantity < product.stock_quantity) {
      cartItem.quantity++;
      showNotification('Cart updated!', 'success');
    } else {
      showNotification('Not enough stock available', 'error');
      return;
    }
  } else {
    cart.push({
      productId,
      quantity: 1,
      userId: currentUser.id,
      userName: currentUser.name
    });
    showNotification('Added to cart!', 'success');
  }

  updateCartCount();
  saveData();
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    const userCart = currentUser ? cart.filter(item => item.userId === currentUser.id) : [];
    const totalItems = userCart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');

  if (!cartItems || !cartTotal) return;

  const userCart = currentUser ? cart.filter(item => item.userId === currentUser.id) : [];

  if (userCart.length === 0) {
    cartItems.innerHTML = '<p style="text-align: center; color: var(--text-light);">Your cart is empty</p>';
    cartTotal.textContent = '₹0.00';
    return;
  }

  let total = 0;

  cartItems.innerHTML = userCart.map(item => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return '';

    const subtotal = product.price * item.quantity;
    total += subtotal;

    return `
      <div class="cart-item">
        <img src="${product.image_url}" alt="${product.name}" class="cart-item-image">
        <div class="cart-item-details">
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-price">₹${product.price.toFixed(2)} / ${product.unit}</div>
          <div class="cart-item-controls">
            <button onclick="updateCartQuantity('${item.productId}', -1)">-</button>
            <span class="cart-item-quantity">${item.quantity}</span>
            <button onclick="updateCartQuantity('${item.productId}', 1)">+</button>
            <button onclick="removeFromCart('${item.productId}')" style="margin-left: 8px; color: var(--error-color);">Remove</button>
          </div>
          <div style="margin-top: 8px; font-weight: 600;">Subtotal: ₹${subtotal.toFixed(2)}</div>
        </div>
      </div>
    `;
  }).join('');

  cartTotal.textContent = `₹${total.toFixed(2)}`;
}

function updateCartQuantity(productId, change) {
  const cartItem = cart.find(item => item.productId === productId && item.userId === currentUser.id);
  const product = products.find(p => p.id === productId);

  if (!cartItem || !product) return;

  const newQuantity = cartItem.quantity + change;

  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  if (newQuantity > product.stock_quantity) {
    showNotification('Not enough stock available', 'error');
    return;
  }

  cartItem.quantity = newQuantity;
  renderCart();
  updateCartCount();
  saveData();
}

function removeFromCart(productId) {
  cart = cart.filter(item => !(item.productId === productId && item.userId === currentUser.id));
  renderCart();
  updateCartCount();
  saveData();
  showNotification('Item removed from cart', 'success');
}

// CHANGED: Updated openCart to render both cart and order history
// OLD CODE: function openCart() { renderCart(); document.getElementById('cartModal').classList.add('active'); }
// NEW CODE: Added order history rendering
function openCart() {
  renderCart();
  renderOrderHistory(); // NEW: Render user's order history when opening cart
  document.getElementById('cartModal').classList.add('active');
}

function closeCart() {
  document.getElementById('cartModal').classList.remove('active');
}
// NEW FUNCTION: Render order history for current user in cart modal______________________________________________________
// This function displays all past orders for the logged-in user
function renderOrderHistory() {
  const orderHistoryItems = document.getElementById('orderHistoryItems');
  if (!orderHistoryItems) return;

  if (!currentUser) {
    orderHistoryItems.innerHTML = '<p style="text-align: center; color: var(--text-light);">Please login to view order history</p>';
    return;
  }

  // Filter orders for current user
  const userOrders = orders.filter(order => order.userId === currentUser.id);

  if (userOrders.length === 0) {
    orderHistoryItems.innerHTML = '<p style="text-align: center; color: var(--text-light);">No orders yet</p>';
    return;
  }

  // Display all user orders with details
  orderHistoryItems.innerHTML = userOrders.map(order => `
    <div class="order-history-card">
      <div class="order-history-header">
        <h4>Order #${order.id.slice(-6)}</h4>
        <span class="status-badge status-${order.status}">${order.status}</span>
      </div>
      <div class="order-history-details">
        <p><strong>Date:</strong> ${new Date(order.created_at).toLocaleDateString()} ${new Date(order.created_at).toLocaleTimeString()}</p>
        <p><strong>Total:</strong> ₹${order.total_amount.toFixed(2)}</p>
        <p><strong>Delivery Address:</strong> ${order.deliveryAddress}</p>
        ${order.notes ? `<p><strong>Notes:</strong> ${order.notes}</p>` : ''}
      </div>
      <div class="order-history-items">
        <strong>Items:</strong>
        ${order.items.map(item => `
          <div class="order-history-item">
            <span>${item.productName} x ${item.quantity}</span>
            <span>₹${item.subtotal.toFixed(2)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}
// END NEW FUNCTION

function openCheckout() {
  const userCart = currentUser ? cart.filter(item => item.userId === currentUser.id) : [];

  if (userCart.length === 0) {
    showNotification('Your cart is empty', 'error');
    return;
  }

  closeCart();

  const checkoutItems = document.getElementById('checkoutItems');
  const checkoutTotal = document.getElementById('checkoutTotal');

  let total = 0;

  checkoutItems.innerHTML = userCart.map(item => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return '';

    const subtotal = product.price * item.quantity;
    total += subtotal;

    return `
      <div class="checkout-item">
        <span>${product.name} x ${item.quantity}</span>
        <span>₹${subtotal.toFixed(2)}</span>
      </div>
    `;
  }).join('');

  checkoutTotal.textContent = `₹${total.toFixed(2)}`;

  document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('active');
}

function handleCheckout(e) {
  e.preventDefault();

  const customerName = document.getElementById('customerName').value;
  const customerPhone = document.getElementById('customerPhone').value;
  const customerEmail = document.getElementById('customerEmail').value;
  const deliveryAddress = document.getElementById('deliveryAddress').value;
  const orderNotes = document.getElementById('orderNotes').value;

  const userCart = cart.filter(item => item.userId === currentUser.id);

  let total = 0;
  const orderItems = userCart.map(item => {
    const product = products.find(p => p.id === item.productId);
    const subtotal = product.price * item.quantity;
    total += subtotal;

    product.stock_quantity -= item.quantity;

    return {
      productId: item.productId,
      productName: product.name,
      quantity: item.quantity,
      unit_price: product.price,
      subtotal: subtotal
    };
  });

  const order = {
    id: Date.now().toString(),
    userId: currentUser.id,
    customerName,
    customerPhone,
    customerEmail,
    deliveryAddress,
    notes: orderNotes,
    total_amount: total,
    status: 'pending',
    items: orderItems,
    created_at: new Date().toISOString()
  };

  orders.unshift(order);
  cart = cart.filter(item => item.userId !== currentUser.id);

  saveData();
  updateCartCount();
  renderProducts();

  closeCheckout();
  document.getElementById('checkoutForm').reset();

  showNotification('Order placed successfully! We will contact you soon.', 'success');
}

function openAdmin() {
  if (!currentUser || currentUser.username !== ADMIN_CREDENTIALS.username) {
    showNotification('Access denied. Admin only.', 'error');
    return;
  }

  renderAdminProducts();
  renderAdminOrders();
  renderAdminUsers();
  document.getElementById('adminModal').classList.add('active');
}

function closeAdmin() {
  document.getElementById('adminModal').classList.remove('active');
}

function renderAdminProducts() {
  const adminProductsList = document.getElementById('adminProductsList');
  if (!adminProductsList) return;

  if (products.length === 0) {
    adminProductsList.innerHTML = '<p style="text-align: center; color: var(--text-light);">No products available</p>';
    return;
  }

  adminProductsList.innerHTML = products.map(product => {
    const category = CATEGORIES.find(c => c.id === product.category_id);
    return `
      <div class="admin-product-item">
        <div class="admin-product-info">
          <h4>${product.name}</h4>
          <p>Category: ${category ? category.name : 'Unknown'}</p>
          <p>Price: ₹${product.price.toFixed(2)} / ${product.unit}</p>
          <p>Stock: ${product.stock_quantity} ${product.unit}(s)</p>
          <p>Status: ${product.is_available ? 'Available' : 'Unavailable'}</p>
        </div>
        <div class="admin-product-actions">
          <button class="btn btn-small btn-secondary" onclick="editProduct('${product.id}')">Edit</button>
          <button class="btn btn-small btn-secondary" onclick="deleteProduct('${product.id}')">Delete</button>
        </div>
      </div>
    `;
  }).join('');
}

// CHANGED: Added delete order functionality for admin
// OLD CODE: Only had status update buttons (Confirm, Deliver, Cancel)
// NEW CODE: Added Delete button to remove orders from the system
function renderAdminOrders() {
  const adminOrdersList = document.getElementById('adminOrdersList');
  if (!adminOrdersList) return;

  if (orders.length === 0) {
    adminOrdersList.innerHTML = '<p style="text-align: center; color: var(--text-light);">No orders yet</p>';
    return;
  }

  adminOrdersList.innerHTML = orders.map(order => `
    <div class="admin-order-item">
      <div class="admin-order-info">
        <h4>Order #${order.id.slice(-6)}</h4>
        <p>Customer: ${order.customerName} | Phone: ${order.customerPhone}</p>
        <p>Address: ${order.deliveryAddress}</p>
        <p>Total: ₹${order.total_amount.toFixed(2)}</p>
        <p>Date: ${new Date(order.created_at).toLocaleString()}</p>
        <p>Items: ${order.items.map(item => `${item.productName} (${item.quantity})`).join(', ')}</p>
        <span class="status-badge status-${order.status}">${order.status}</span>
      </div>
      <div class="admin-order-actions">
        <button class="btn btn-small btn-secondary" onclick="updateOrderStatus('${order.id}', 'confirmed')">Confirm</button>
        <button class="btn btn-small btn-secondary" onclick="updateOrderStatus('${order.id}', 'delivered')">Deliver</button>
        <button class="btn btn-small btn-secondary" onclick="updateOrderStatus('${order.id}', 'cancelled')">Cancel</button>
        <button class="btn btn-small btn-secondary" onclick="deleteOrder('${order.id}')" style="background: var(--error-color); color: white;">Delete</button>
      </div>
    </div>
  `).join('');
}

function updateOrderStatus(orderId, status) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = status;
    saveData();
    renderAdminOrders();
    showNotification(`Order ${status}`, 'success');
  }
}

// NEW FUNCTION: Delete order from system (Admin only)
// This function permanently removes an order from the orders array
// Useful for removing test orders, cancelled orders, or spam
function deleteOrder(orderId) {
  // Confirm deletion to prevent accidental removals
  if (!confirm('Are you sure you want to permanently delete this order? This action cannot be undone.')) {
    return;
  }

  // Find order before deletion to restore stock if needed
  const order = orders.find(o => o.id === orderId);

  if (order) {
    // Optional: Restore stock for deleted orders (uncomment if needed)
    // order.items.forEach(item => {
    //   const product = products.find(p => p.id === item.productId);
    //   if (product) {
    //     product.stock_quantity += item.quantity;
    //   }
    // });

    // Remove order from orders array
    orders = orders.filter(o => o.id !== orderId);

    saveData();
    renderAdminOrders();
    showNotification('Order deleted successfully', 'success');
  }
}
// END NEW FUNCTION

function openProductForm(productId = null) {
  const modal = document.getElementById('productFormModal');
  const title = document.getElementById('productFormTitle');
  const form = document.getElementById('productForm');
  const new_imag = document.getElementById('productImage').value;
  // console.log("updated link ill be here: ",new_imag)
   
  const categorySelect = document.getElementById('productCategory');
  categorySelect.innerHTML = CATEGORIES.map(cat =>
    `<option value="${cat.id}">${cat.name}</option>`
  ).join('');

  if (productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    title.textContent = 'Edit Product';
    document.getElementById('productId').value = product.id;
    document.getElementById('productCategory').value = product.category_id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productStock').value = product.stock_quantity;
    document.getElementById('productUnit').value = product.unit;
    document.getElementById('productImage').value = product.image_url;
    document.getElementById('productAvailable').checked = product.is_available;
  } else {
    title.textContent = 'Add Product';
    form.reset();
    document.getElementById('productId').value = '';
  }

  modal.classList.add('active');
}

function closeProductForm() {
  document.getElementById('productFormModal').classList.remove('active');
}

function handleProductForm(e) {
  e.preventDefault();

  const productId = document.getElementById('productId').value;
  const productData = {
    category_id: document.getElementById('productCategory').value,
    name: document.getElementById('productName').value,
    description: document.getElementById('productDescription').value,
    price: parseFloat(document.getElementById('productPrice').value),
    stock_quantity: parseInt(document.getElementById('productStock').value),
    unit: document.getElementById('productUnit').value,
    image_url: document.getElementById('productImage').value || 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400',
    is_available: document.getElementById('productAvailable').checked
  };

  if (productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      Object.assign(product, productData);
      showNotification('Product updated successfully', 'success');
    }
  } else {
    const newProduct = {
      id: Date.now().toString(),
      ...productData
    };
    products.push(newProduct);
    showNotification('Product added successfully', 'success');
  }

  saveData();
  renderProducts();
  renderAdminProducts();
  closeProductForm();
}

function editProduct(productId) {
  openProductForm(productId);
}

function deleteProduct(productId) {
  if (!confirm('Are you sure you want to delete this product?')) return;

  products = products.filter(p => p.id !== productId);
  saveData();
  renderProducts();
  renderAdminProducts();
  showNotification('Product deleted', 'success');
}

function renderAdminUsers() {
  const adminUsersList = document.getElementById('adminUsersList');
  if (!adminUsersList) return;

  if (users.length === 0) {
    adminUsersList.innerHTML = '<p style="text-align: center; color: var(--text-light);">No registered users yet</p>';
    return;
  }

  adminUsersList.innerHTML = users.map(user => {
    const userOrders = orders.filter(o => o.userId === user.id);
    return `
      <div class="admin-user-item">
        <div class="admin-user-info">
          <h4>${user.name}</h4>
          <p>Username: ${user.username}</p>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
          <p>Address: ${user.address}</p>
          <p>Registered: ${new Date(user.created_at).toLocaleDateString()}</p>
          <p>Total Orders: ${userOrders.length}</p>
        </div>
      </div>
    `;
  }).join('');
}

function openLoginModal() {
  document.getElementById('loginModal').classList.add('active');
}

function closeLoginModal() {
  document.getElementById('loginModal').classList.remove('active');
}

function handleLogin(e) {
  e.preventDefault();

  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    currentUser = {
      id: 'admin',
      username: ADMIN_CREDENTIALS.username,
      name: 'Admin',
      email: 'admin@sakristore.com',
      phone: '',
      address: '',
      created_at: new Date().toISOString()
    };
    saveData();
    updateUIForAuth();
    closeLoginModal();
    showNotification('Welcome Admin!', 'success');
    return;
  }

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    currentUser = { ...user };
    delete currentUser.password;
    saveData();
    updateUIForAuth();
    closeLoginModal();
    document.getElementById('loginForm').reset();
    showNotification(`Welcome back, ${user.name}!`, 'success');
  } else {
    showNotification('Invalid username or password', 'error');
  }
}

function handleRegister(e) {
  e.preventDefault();

  const name = document.getElementById('registerName').value;
  const username = document.getElementById('registerUsername').value;
  const email = document.getElementById('registerEmail').value;
  const phone = document.getElementById('registerPhone').value;
  const address = document.getElementById('registerAddress').value;
  const password = document.getElementById('registerPassword').value;

  if (username === ADMIN_CREDENTIALS.username) {
    showNotification('This username is reserved', 'error');
    return;
  }

  if (users.find(u => u.username === username)) {
    showNotification('Username already exists', 'error');
    return;
  }

  if (users.find(u => u.email === email)) {
    showNotification('Email already registered', 'error');
    return;
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    username,
    email,
    phone,
    address,
    password,
    created_at: new Date().toISOString()
  };

  users.push(newUser);
  saveData();

  currentUser = { ...newUser };
  delete currentUser.password;
  saveData();
  updateUIForAuth();
  closeLoginModal();
  document.getElementById('registerForm').reset();
  showNotification('Registration successful! Welcome!', 'success');
}

function handleLogout() {
  currentUser = null;
  saveData();
  updateUIForAuth();
  updateCartCount();
  showNotification('Logged out successfully', 'success');
}

function showNotification(message, type) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.className = `notification ${type} show`;

  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

function setupEventListeners() {
  const cartBtn = document.getElementById('cartBtn');
  const closeCart = document.getElementById('closeCart');
  const continueShopping = document.getElementById('continueShopping');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const closeCheckout = document.getElementById('closeCheckout');
  const checkoutForm = document.getElementById('checkoutForm');
  const adminLink = document.getElementById('adminLink');
  const closeAdmin = document.getElementById('closeAdmin');
  const addProductBtn = document.getElementById('addProductBtn');
  const closeProductForm = document.getElementById('closeProductForm');
  const productForm = document.getElementById('productForm');
  const categoryFilter = document.getElementById('categoryFilter');
  const searchInput = document.getElementById('searchInput');
  const loginBtn = document.getElementById('loginBtn');
  const closeLogin = document.getElementById('closeLogin');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const logoutBtn = document.getElementById('logoutBtn');

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeCart) closeCart.addEventListener('click', () => document.getElementById('cartModal').classList.remove('active'));
  if (continueShopping) continueShopping.addEventListener('click', () => document.getElementById('cartModal').classList.remove('active'));
  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);
  if (closeCheckout) closeCheckout.addEventListener('click', () => document.getElementById('checkoutModal').classList.remove('active'));
  if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckout);
  if (adminLink) adminLink.addEventListener('click', (e) => { e.preventDefault(); openAdmin(); });
  if (closeAdmin) closeAdmin.addEventListener('click', () => document.getElementById('adminModal').classList.remove('active'));
  if (addProductBtn) addProductBtn.addEventListener('click', () => openProductForm());
  if (closeProductForm) closeProductForm.addEventListener('click', () => document.getElementById('productFormModal').classList.remove('active'));
  if (productForm) productForm.addEventListener('submit', handleProductForm);
  if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (loginBtn) loginBtn.addEventListener('click', openLoginModal);
  if (closeLogin) closeLogin.addEventListener('click', closeLoginModal);
  if (loginForm) loginForm.addEventListener('submit', handleLogin);
  if (registerForm) registerForm.addEventListener('submit', handleRegister);
  if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);

  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
      document.getElementById(`${tab}Tab`).classList.add('active');
    });
  });

  const authTabBtns = document.querySelectorAll('.auth-tab-btn');
  authTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;

      authTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (tab === 'login') {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('authModalTitle').textContent = 'Login';
      } else {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
        document.getElementById('authModalTitle').textContent = 'Register';
      }
    });
  });

  // NEW CODE: Event listeners for cart modal tabs (Shopping Cart / Order History)
  // Allows users to switch between current cart and past order history
  const cartTabBtns = document.querySelectorAll('.cart-tab-btn');
  cartTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;

      // Update active tab styling
      cartTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show/hide appropriate content
      const cartTabContent = document.getElementById('cartTabContent');
      const historyTabContent = document.getElementById('historyTabContent');

      if (tab === 'cart') {
        cartTabContent.style.display = 'block';
        historyTabContent.style.display = 'none';
        // Show checkout button only on cart tab
        document.getElementById('checkoutBtn').style.display = 'inline-block';
      } else {
        cartTabContent.style.display = 'none';
        historyTabContent.style.display = 'block';
        // Hide checkout button on history tab
        document.getElementById('checkoutBtn').style.display = 'none';
      }
    });
  });
  // END NEW CODE for cart tabs

  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.classList.remove('active');
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  initializeData();
  renderCategories();
  renderProducts();
  populateCategoryFilter();
  updateCartCount();
  setupEventListeners();
});
