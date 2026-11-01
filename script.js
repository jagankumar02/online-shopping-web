/**
 * NEXORA - Online Shopping Web Application
 * Vanilla JS Application Logic & LocalStorage Data Engine
 */

// ==================== CENTRAL PRODUCT CATALOG DATA ====================
const CATALOG = [
    {
        id: 'nx-101',
        name: 'AuraSound Wireless Noise Cancelling Headphones',
        category: 'Electronics & Gadgets',
        brand: 'AuraSound',
        price: 8999,
        originalPrice: 14999,
        discount: 40,
        rating: 4.8,
        reviewCount: 342,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
        stock: 12,
        tags: ['Trending', 'Audio', 'Best Seller'],
        description: 'Immersive audio experience with active noise cancellation, 40-hour battery life, and ultra-soft memory foam earcups.'
    },
    {
        id: 'nx-102',
        name: 'Veloce Pro Smartwatch Series 7',
        category: 'Electronics & Gadgets',
        brand: 'Veloce',
        price: 4499,
        originalPrice: 7999,
        discount: 43,
        rating: 4.6,
        reviewCount: 189,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
        stock: 8,
        tags: ['Fitness', 'Wearables'],
        description: 'AMOLED display, heart-rate tracking, SpO2 monitoring, and 100+ workout modes with 7-day battery endurance.'
    },
    {
        id: 'nx-103',
        name: 'Minimalist Heavyweight Oversized Hoodie',
        category: 'Fashion & Clothing',
        brand: 'UrbanCraft',
        price: 1999,
        originalPrice: 3499,
        discount: 42,
        rating: 4.7,
        reviewCount: 512,
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80',
        stock: 25,
        tags: ['New', 'Streetwear'],
        description: 'Crafted from 400 GSM premium organic French terry cotton. Ultra-soft interior with pre-shrunk finish.'
    },
    {
        id: 'nx-104',
        name: 'Strider Quantum Running Sneakers',
        category: 'Shoes & Sneakers',
        brand: 'Strider',
        price: 3899,
        originalPrice: 5999,
        discount: 35,
        rating: 4.5,
        reviewCount: 230,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
        stock: 15,
        tags: ['Footwear', 'Sports'],
        description: 'Responsive nitrogen-infused foam sole for maximum energy return and breathable knitted mesh upper.'
    },
    {
        id: 'nx-105',
        name: 'Artisan Precision Pour-Over Coffee Kettle',
        category: 'Home & Kitchen',
        brand: 'BrewMaster',
        price: 2499,
        originalPrice: 3999,
        discount: 37,
        rating: 4.9,
        reviewCount: 94,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
        stock: 6,
        tags: ['Home', 'Coffee'],
        description: 'Gooseneck spout for accurate flow control, built-in analog thermometer, and food-grade stainless steel.'
    },
    {
        id: 'nx-106',
        name: 'HydraGlow Vitamin C Illuminating Serum',
        category: 'Beauty & Personal Care',
        brand: 'DermaEssence',
        price: 899,
        originalPrice: 1299,
        discount: 30,
        rating: 4.4,
        reviewCount: 410,
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
        stock: 40,
        tags: ['Beauty', 'Skincare'],
        description: 'Concentrated 15% Pure L-Ascorbic Acid infused with Ferulic acid for brightened, glowing skin tone.'
    },
    {
        id: 'nx-107',
        name: 'Executive Full-Grain Leather Journal',
        category: 'Books & Stationery',
        brand: 'Monogram',
        price: 1249,
        originalPrice: 1999,
        discount: 37,
        rating: 4.8,
        reviewCount: 76,
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
        stock: 18,
        tags: ['Stationery', 'Gift'],
        description: '240 bleed-proof 120 GSM acid-free cream pages hand-bound in authentic vegetable-tanned leather.'
    },
    {
        id: 'nx-108',
        name: 'Ergonomic Non-Slip Yoga Mat (6mm)',
        category: 'Sports & Fitness',
        brand: 'ZenFlow',
        price: 1599,
        originalPrice: 2499,
        discount: 36,
        rating: 4.7,
        reviewCount: 310,
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80',
        stock: 20,
        tags: ['Fitness'],
        description: 'Eco-friendly TPE material with laser-engraved alignment guides and high-density cushioning.'
    },
    {
        id: 'nx-109',
        name: 'Polarized Titanium Classic Sunglasses',
        category: 'Accessories',
        brand: 'Lumina',
        price: 2999,
        originalPrice: 4999,
        discount: 40,
        rating: 4.6,
        reviewCount: 145,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80',
        stock: 10,
        tags: ['Accessories', 'Fashion'],
        description: 'Ultra-lightweight aerospace titanium frames with UV400 anti-glare polarized lenses.'
    },
    {
        id: 'nx-110',
        name: 'TrueSound Mini Portable Bluetooth Speaker',
        category: 'Electronics & Gadgets',
        brand: 'AuraSound',
        price: 1799,
        originalPrice: 2999,
        discount: 40,
        rating: 4.3,
        reviewCount: 260,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80',
        stock: 14,
        tags: ['Audio'],
        description: 'IPX7 waterproof rating, 360-degree punchy bass, and 12-hour continuous wireless playback.'
    },
    {
        id: 'nx-111',
        name: 'Classic Tailored Oxford Cotton Shirt',
        category: 'Fashion & Clothing',
        brand: 'UrbanCraft',
        price: 1499,
        originalPrice: 2299,
        discount: 34,
        rating: 4.5,
        reviewCount: 98,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
        stock: 30,
        tags: ['Formal', 'Fashion'],
        description: 'Breathable 100% long-staple combed cotton tailored for a clean, sophisticated slim silhouette.'
    },
    {
        id: 'nx-112',
        name: 'Retro High-Top Canvas Sneakers',
        category: 'Shoes & Sneakers',
        brand: 'Strider',
        price: 2299,
        originalPrice: 3499,
        discount: 34,
        rating: 4.7,
        reviewCount: 420,
        image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=600&q=80',
        stock: 18,
        tags: ['Casual', 'Trending'],
        description: 'Timeless silhouette featuring vulcanized rubber sole and durable double-stitched canvas.'
    },
    {
        id: 'nx-113',
        name: 'Smart Induction Desk Lamp with Qi Charger',
        category: 'Home & Kitchen',
        brand: 'Lumina',
        price: 2799,
        originalPrice: 4299,
        discount: 35,
        rating: 4.6,
        reviewCount: 88,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
        stock: 9,
        tags: ['Home', 'Tech'],
        description: 'Touch dimming with 5 color temperatures and 15W fast wireless smartphone charging pad base.'
    },
    {
        id: 'nx-114',
        name: 'Botanical Charcoal Detox Facial Cleanser',
        category: 'Beauty & Personal Care',
        brand: 'DermaEssence',
        price: 599,
        originalPrice: 899,
        discount: 33,
        rating: 4.2,
        reviewCount: 160,
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
        stock: 50,
        tags: ['Skincare'],
        description: 'Deep pore purification powered by activated bamboo charcoal and soothing organic aloe vera.'
    },
    {
        id: 'nx-115',
        name: 'Minimalist Mechanical Fountain Pen',
        category: 'Books & Stationery',
        brand: 'Monogram',
        price: 1899,
        originalPrice: 2799,
        discount: 32,
        rating: 4.9,
        reviewCount: 62,
        image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80',
        stock: 7,
        tags: ['Stationery'],
        description: 'Precision-machined matte aluminum body with German fine stainless steel nib.'
    },
    {
        id: 'nx-116',
        name: 'Adjustable Cast Iron Dumbbell Set (20kg)',
        category: 'Sports & Fitness',
        brand: 'ZenFlow',
        price: 4999,
        originalPrice: 7999,
        discount: 37,
        rating: 4.8,
        reviewCount: 205,
        image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80',
        stock: 5,
        tags: ['Fitness', 'Gym'],
        description: 'Quick-change weight selector plates with knurled non-slip steel handles for secure grip.'
    },
    {
        id: 'nx-117',
        name: 'Water-Resistant Commuter Backpack',
        category: 'Accessories',
        brand: 'UrbanCraft',
        price: 3199,
        originalPrice: 4999,
        discount: 36,
        rating: 4.7,
        reviewCount: 388,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
        stock: 22,
        tags: ['Bags', 'Travel'],
        description: 'Dedicated 16" padded laptop sleeve, hidden anti-theft back pocket, and USB pass-through port.'
    },
    {
        id: 'nx-118',
        name: 'Ultra-Slim Mechanical Wireless Keyboard',
        category: 'Electronics & Gadgets',
        brand: 'Veloce',
        price: 5299,
        originalPrice: 7999,
        discount: 34,
        rating: 4.8,
        reviewCount: 178,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
        stock: 11,
        tags: ['Tech', 'Workstation'],
        description: 'Low-profile tactile mechanical switches, RGB backlight, and seamless multi-device Bluetooth pairing.'
    },
    {
        id: 'nx-119',
        name: 'Breathable Lightweight Training Shorts',
        category: 'Fashion & Clothing',
        brand: 'ZenFlow',
        price: 899,
        originalPrice: 1499,
        discount: 40,
        rating: 4.4,
        reviewCount: 115,
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&q=80',
        stock: 35,
        tags: ['Sports'],
        description: 'Quick-dry moisture-wicking fabric with built-in compression liner and zipped phone pocket.'
    },
    {
        id: 'nx-120',
        name: 'Handcrafted Ceramic Dinnerware Set',
        category: 'Home & Kitchen',
        brand: 'ArtisanHome',
        price: 3999,
        originalPrice: 5999,
        discount: 33,
        rating: 4.9,
        reviewCount: 54,
        image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80',
        stock: 4,
        tags: ['Home'],
        description: '12-piece stoneware set featuring speckled matte glaze finish. Microwave and dishwasher safe.'
    },
    {
        id: 'nx-121',
        name: 'Organic Rosewater Hydrating Face Mist',
        category: 'Beauty & Personal Care',
        brand: 'DermaEssence',
        price: 449,
        originalPrice: 699,
        discount: 35,
        rating: 4.5,
        reviewCount: 122,
        image: 'https://images.unsplash.com/photo-1608248597261-5421778b16ad?auto=format&fit=crop&w=600&q=80',
        stock: 45,
        tags: ['Skincare'],
        description: '100% steam-distilled Kannauj rose petals providing instant skin hydration and glow.'
    },
    {
        id: 'nx-122',
        name: 'Minimalist Leather Slim Cardholder',
        category: 'Accessories',
        brand: 'Monogram',
        price: 799,
        originalPrice: 1299,
        discount: 38,
        rating: 4.6,
        reviewCount: 280,
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80',
        stock: 30,
        tags: ['Accessories'],
        description: 'RFID-blocking top-grain leather with 6 card slots and central cash sleeve.'
    },
    {
        id: 'nx-123',
        name: 'Thermal Insulated Stainless Steel Flask (1L)',
        category: 'Sports & Fitness',
        brand: 'ZenFlow',
        price: 1199,
        originalPrice: 1799,
        discount: 33,
        rating: 4.7,
        reviewCount: 340,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
        stock: 19,
        tags: ['Fitness'],
        description: 'Double-wall vacuum insulation keeps drinks icy cold for 24 hours or steaming hot for 12 hours.'
    },
    {
        id: 'nx-124',
        name: '4K Ultra-HD Action Camera Waterproof',
        category: 'Electronics & Gadgets',
        brand: 'Veloce',
        price: 6999,
        originalPrice: 11999,
        discount: 41,
        rating: 4.5,
        reviewCount: 160,
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80',
        stock: 7,
        tags: ['Tech'],
        description: 'Capture 4K 60fps video with 6-axis electronic image stabilization and 30m underwater housing.'
    }
];

// Coupon Codes Data Rules
const DEMO_COUPONS = {
    'NEXORA10': { type: 'percent', value: 10, maxDiscount: 1000, minOrder: 0, label: '10% OFF' },
    'WELCOME50': { type: 'flat', value: 50, maxDiscount: 50, minOrder: 499, label: '₹50 OFF' },
    'FESTIVE20': { type: 'percent', value: 20, maxDiscount: 2000, minOrder: 1999, label: '20% Festive Special' }
};

// ==================== STATE MANAGEMENT & STORAGE ====================
let state = {
    cart: [],             // [{ product, qty }]
    wishlist: [],         // [ productId ]
    recentlyViewed: [],   // [ productId ]
    compareList: [],      // [ productId ]
    userSession: null,    // { name, email, addresses: [] }
    orders: [],           // [{ id, date, items, total, status, address, paymentMode }]
    activeCoupon: null,
    activeCategory: 'all',
    searchQuery: '',
    priceRange: 100000,
    minRating: 0,
    inStockOnly: false,
    sortBy: 'popularity',
    currentCheckoutStep: 1,
    selectedPayMethod: 'upi'
};

// LocalStorage Keys
const KEYS = {
    CART: 'nexora_cart_v1',
    WISHLIST: 'nexora_wishlist_v1',
    RECENT: 'nexora_recent_v1',
    SESSION: 'nexora_session_v1',
    ORDERS: 'nexora_orders_v1',
    THEME: 'nexora_theme_v1'
};

// Initializer
document.addEventListener('DOMContentLoaded', () => {
    loadStoredData();
    initTheme();
    setupEventListeners();
    renderCategorySidebar();
    renderProducts();
    updateHeaderBadges();
    startFlashTimer();
});

// Load Data safely from LocalStorage
function loadStoredData() {
    try {
        const savedCart = localStorage.getItem(KEYS.CART);
        state.cart = savedCart ? JSON.parse(savedCart) : [];

        const savedWishlist = localStorage.getItem(KEYS.WISHLIST);
        state.wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];

        const savedRecent = localStorage.getItem(KEYS.RECENT);
        state.recentlyViewed = savedRecent ? JSON.parse(savedRecent) : [];

        const savedSession = localStorage.getItem(KEYS.SESSION);
        state.userSession = savedSession ? JSON.parse(savedSession) : {
            name: 'Guest User',
            email: 'customer@nexora.com',
            addresses: [
                {
                    id: 'addr-1',
                    name: 'Priya Sharma',
                    phone: '9876543210',
                    pincode: '110001',
                    city: 'New Delhi',
                    state: 'Delhi',
                    street: '42, Barakhamba Road, Connaught Place'
                }
            ]
        };

        const savedOrders = localStorage.getItem(KEYS.ORDERS);
        state.orders = savedOrders ? JSON.parse(savedOrders) : [];
    } catch (e) {
        console.error('LocalStorage corruption error, resetting local cache:', e);
    }
}

// Save Actions
function saveCart() { localStorage.setItem(KEYS.CART, JSON.stringify(state.cart)); }
function saveWishlist() { localStorage.setItem(KEYS.WISHLIST, JSON.stringify(state.wishlist)); }
function saveRecent() { localStorage.setItem(KEYS.RECENT, JSON.stringify(state.recentlyViewed)); }
function saveSession() { localStorage.setItem(KEYS.SESSION, JSON.stringify(state.userSession)); }
function saveOrders() { localStorage.setItem(KEYS.ORDERS, JSON.stringify(state.orders)); }

// ==================== RENDER PRODUCTS & FILTERS ====================

function renderProducts() {
    const grid = document.getElementById('productGrid');
    const emptyState = document.getElementById('emptyState');
    const resultsCount = document.getElementById('resultsCount');

    // Filter Pipeline
    let filtered = CATALOG.filter(product => {
        // Category match
        if (state.activeCategory !== 'all' && product.category !== state.activeCategory) return false;

        // Search query match
        if (state.searchQuery.trim() !== '') {
            const q = state.searchQuery.toLowerCase();
            const matchName = product.name.toLowerCase().includes(q);
            const matchBrand = product.brand.toLowerCase().includes(q);
            const matchCat = product.category.toLowerCase().includes(q);
            if (!matchName && !matchBrand && !matchCat) return false;
        }

        // Price Filter
        if (product.price > state.priceRange) return false;

        // Rating Filter
        if (product.rating < state.minRating) return false;

        // In-Stock Filter
        if (state.inStockOnly && product.stock <= 0) return false;

        return true;
    });

    // Sorting Pipeline
    filtered.sort((a, b) => {
        if (state.sortBy === 'price-low') return a.price - b.price;
        if (state.sortBy === 'price-high') return b.price - a.price;
        if (state.sortBy === 'rating') return b.rating - a.rating;
        if (state.sortBy === 'newest') return b.id.localeCompare(a.id);
        return b.reviewCount - a.reviewCount; // popularity
    });

    resultsCount.textContent = `Showing ${filtered.length} products`;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hide');
        return;
    }

    emptyState.classList.add('hide');

    grid.innerHTML = filtered.map(product => {
        const isWishlisted = state.wishlist.includes(product.id);
        return `
      <article class="product-card">
        <div class="product-image-wrap" onclick="openProductDetail('${product.id}')">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://placehold.co/400x400/f4f3ef/111111?text=NEXORA'" />
          ${product.discount > 0 ? `<span class="discount-tag">${product.discount}% OFF</span>` : ''}
          <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="event.stopPropagation(); toggleWishlist('${product.id}')"
                  title="Save to Wishlist">
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>

        <div class="product-content">
          <div class="product-category-brand">${product.brand} • ${product.category}</div>
          <h4 class="product-title" onclick="openProductDetail('${product.id}')">${product.name}</h4>
          
          <div class="product-rating">
            <i class="fa-solid fa-star star-filled"></i>
            <span><strong>${product.rating}</strong></span>
            <span class="rating-count">(${product.reviewCount})</span>
          </div>

          <div class="product-price-row">
            <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
            ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
          </div>

          <button class="btn btn-primary add-cart-btn" onclick="addToCart('${product.id}')">
            <i class="fa-solid fa-bag-shopping"></i> Add to Cart
          </button>
        </div>
      </article>
    `;
    }).join('');
}

// Category Sidebar List Render
function renderCategorySidebar() {
    const list = document.getElementById('categoryFilterList');
    const categories = ['all', ...new Set(CATALOG.map(p => p.category))];

    list.innerHTML = categories.map(cat => `
    <button class="${state.activeCategory === cat ? 'active' : ''}" onclick="filterByCategory('${cat}')">
      ${cat === 'all' ? 'All Products' : cat}
    </button>
  `).join('');
}

// Active Filter Tag Chips Render
function updateActiveFilterChips() {
    const bar = document.getElementById('activeFiltersBar');
    const chipsWrap = document.getElementById('filterChips');
    let chips = [];

    if (state.activeCategory !== 'all') {
        chips.push({ label: `Cat: ${state.activeCategory}`, type: 'category' });
    }
    if (state.searchQuery.trim() !== '') {
        chips.push({ label: `Query: ${state.searchQuery}`, type: 'search' });
    }
    if (state.priceRange < 100000) {
        chips.push({ label: `Under ₹${state.priceRange}`, type: 'price' });
    }
    if (state.minRating > 0) {
        chips.push({ label: `${state.minRating}+ Stars`, type: 'rating' });
    }
    if (state.inStockOnly) {
        chips.push({ label: 'In Stock Only', type: 'stock' });
    }

    if (chips.length === 0) {
        bar.classList.add('hide');
    } else {
        bar.classList.remove('hide');
        chipsWrap.innerHTML = chips.map(c => `
      <span class="chip">
        ${c.label}
        <button onclick="removeSingleFilter('${c.type}')">&times;</button>
      </span>
    `).join('');
    }
}

function removeSingleFilter(type) {
    if (type === 'category') state.activeCategory = 'all';
    if (type === 'search') {
        state.searchQuery = '';
        document.getElementById('searchInput').value = '';
    }
    if (type === 'price') {
        state.priceRange = 100000;
        document.getElementById('priceRangeSlider').value = 100000;
        document.getElementById('maxPriceInput').value = 100000;
    }
    if (type === 'rating') {
        state.minRating = 0;
        document.querySelector('input[name="ratingFilter"][value="0"]').checked = true;
    }
    if (type === 'stock') {
        state.inStockOnly = false;
        document.getElementById('inStockCheckbox').checked = false;
    }
    renderCategorySidebar();
    updateActiveFilterChips();
    renderProducts();
}

function resetAllFilters() {
    state.activeCategory = 'all';
    state.searchQuery = '';
    state.priceRange = 100000;
    state.minRating = 0;
    state.inStockOnly = false;
    state.sortBy = 'popularity';

    document.getElementById('searchInput').value = '';
    document.getElementById('priceRangeSlider').value = 100000;
    document.getElementById('minPriceInput').value = 0;
    document.getElementById('maxPriceInput').value = 100000;
    document.getElementById('sortBySelect').value = 'popularity';
    document.querySelector('input[name="ratingFilter"][value="0"]').checked = true;
    document.getElementById('inStockCheckbox').checked = false;

    renderCategorySidebar();
    updateActiveFilterChips();
    renderProducts();
    showToast('Filters reset to default');
}

// ==================== SEARCH & AUTOCOMPLETE ====================

function handleLiveSearch(e) {
    const query = e.target.value.trim();
    const suggestionsBox = document.getElementById('searchSuggestions');
    const clearBtn = document.getElementById('clearSearchBtn');

    if (query.length > 0) {
        clearBtn.classList.remove('hide');
    } else {
        clearBtn.classList.add('hide');
        suggestionsBox.style.display = 'none';
        state.searchQuery = '';
        updateActiveFilterChips();
        renderProducts();
        return;
    }

    // Generate Auto-complete matches
    const matches = CATALOG.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);

    if (matches.length > 0) {
        suggestionsBox.innerHTML = matches.map(m => `
      <div class="suggestion-item" onclick="selectSuggestion('${m.id}')">
        <img src="${m.image}" alt="${m.name}" />
        <div class="suggestion-info">
          <h5>${m.name}</h5>
          <span>₹${m.price.toLocaleString('en-IN')}</span>
        </div>
      </div>
    `).join('');
        suggestionsBox.style.display = 'block';
    } else {
        suggestionsBox.style.display = 'none';
    }

    state.searchQuery = query;
    updateActiveFilterChips();
    renderProducts();
}

function selectSuggestion(productId) {
    document.getElementById('searchSuggestions').style.display = 'none';
    openProductDetail(productId);
}

// ==================== SHOPPING CART & DRAWER ====================

function addToCart(productId, quantity = 1) {
    const product = CATALOG.find(p => p.id === productId);
    if (!product) return;

    const existing = state.cart.find(item => item.product.id === productId);
    const currentQty = existing ? existing.qty : 0;

    if (currentQty + quantity > product.stock) {
        showToast(`Sorry, only ${product.stock} units available in stock!`, 'error');
        return;
    }

    if (existing) {
        existing.qty += quantity;
    } else {
        state.cart.push({ product, qty: quantity });
    }

    saveCart();
    updateHeaderBadges();
    renderCartDrawer();
    showToast(`Added "${product.name.slice(0, 22)}..." to your bag`);
}

function updateCartItemQty(productId, delta) {
    const item = state.cart.find(i => i.product.id === productId);
    if (!item) return;

    const newQty = item.qty + delta;
    if (newQty <= 0) {
        removeFromCart(productId);
        return;
    }

    if (newQty > item.product.stock) {
        showToast(`Stock limit reached (${item.product.stock} max)`, 'error');
        return;
    }

    item.qty = newQty;
    saveCart();
    updateHeaderBadges();
    renderCartDrawer();
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(i => i.product.id !== productId);
    saveCart();
    updateHeaderBadges();
    renderCartDrawer();
    showToast('Item removed from cart');
}

function calculateCartTotals() {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);
    const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 99;

    let discount = 0;
    if (state.activeCoupon) {
        const coupon = DEMO_COUPONS[state.activeCoupon];
        if (coupon && subtotal >= coupon.minOrder) {
            if (coupon.type === 'percent') {
                discount = Math.min((subtotal * coupon.value) / 100, coupon.maxDiscount);
            } else {
                discount = coupon.value;
            }
        }
    }

    const grandTotal = Math.max(0, subtotal + shipping - discount);

    return { subtotal, shipping, discount, grandTotal };
}

function renderCartDrawer() {
    const itemsContainer = document.getElementById('cartDrawerItems');
    const footer = document.getElementById('cartDrawerFooter');
    const drawerCount = document.getElementById('cartDrawerCount');

    drawerCount.textContent = state.cart.reduce((sum, i) => sum + i.qty, 0);

    if (state.cart.length === 0) {
        itemsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon"><i class="fa-solid fa-bag-shopping"></i></div>
        <h3>Your shopping bag is empty</h3>
        <p>Explore our latest arrivals and flash deals!</p>
        <button class="btn btn-primary" onclick="closeCartDrawer()">Start Shopping</button>
      </div>
    `;
        footer.classList.add('hide');
        return;
    }

    footer.classList.remove('hide');

    itemsContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img" />
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.product.name}</h4>
        <div class="cart-item-price">₹${(item.product.price * item.qty).toLocaleString('en-IN')}</div>
        <div class="cart-qty-controls">
          <button onclick="updateCartItemQty('${item.product.id}', -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="updateCartItemQty('${item.product.id}', 1)">+</button>
        </div>
        <button class="remove-cart-item" onclick="removeFromCart('${item.product.id}')"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    </div>
  `).join('');

    // Update Footer Calculations
    const totals = calculateCartTotals();
    document.getElementById('cartSubtotalVal').textContent = `₹${totals.subtotal.toLocaleString('en-IN')}`;
    document.getElementById('cartShippingVal').textContent = totals.shipping === 0 ? 'FREE' : `₹${totals.shipping}`;

    const discountRow = document.getElementById('couponDiscountRow');
    if (totals.discount > 0) {
        discountRow.classList.remove('hide');
        document.getElementById('cartDiscountVal').textContent = `-₹${totals.discount.toLocaleString('en-IN')}`;
    } else {
        discountRow.classList.add('hide');
    }

    document.getElementById('cartGrandTotalVal').textContent = `₹${totals.grandTotal.toLocaleString('en-IN')}`;
}

function handleApplyCoupon() {
    const code = document.getElementById('couponInput').value.trim().toUpperCase();
    const messageBox = document.getElementById('couponMessage');

    if (!code) {
        messageBox.textContent = 'Please enter a coupon code';
        messageBox.className = 'coupon-message error';
        return;
    }

    const coupon = DEMO_COUPONS[code];
    if (!coupon) {
        messageBox.textContent = 'Invalid promo code. Try NEXORA10 or FESTIVE20';
        messageBox.className = 'coupon-message error';
        return;
    }

    const totals = calculateCartTotals();
    if (totals.subtotal < coupon.minOrder) {
        messageBox.textContent = `Minimum order amount of ₹${coupon.minOrder} required for code ${code}`;
        messageBox.className = 'coupon-message error';
        return;
    }

    state.activeCoupon = code;
    messageBox.textContent = `Coupon '${code}' applied successfully! (${coupon.label})`;
    messageBox.className = 'coupon-message success';
    renderCartDrawer();
    showToast(`Promo code ${code} applied`);
}

function openCartDrawer() {
    renderCartDrawer();
    document.getElementById('cartDrawerBackdrop').classList.remove('hide');
}

function closeCartDrawer() {
    document.getElementById('cartDrawerBackdrop').classList.add('hide');
}

// ==================== WISHLIST MANAGEMENT ====================

function toggleWishlist(productId) {
    const index = state.wishlist.indexOf(productId);
    if (index > -1) {
        state.wishlist.splice(index, 1);
        showToast('Removed from Wishlist');
    } else {
        state.wishlist.push(productId);
        showToast('Added to your Wishlist!');
    }
    saveWishlist();
    updateHeaderBadges();
    renderProducts();
}

function renderWishlistModal() {
    const grid = document.getElementById('wishlistGrid');
    const wishlistProducts = CATALOG.filter(p => state.wishlist.includes(p.id));

    if (wishlistProducts.length === 0) {
        grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon"><i class="fa-regular fa-heart"></i></div>
        <h3>Your wishlist is empty</h3>
        <p>Save items you love to shop them later!</p>
      </div>
    `;
        return;
    }

    grid.innerHTML = `
    <div class="product-grid">
      ${wishlistProducts.map(p => `
        <div class="product-card">
          <div class="product-image-wrap">
            <img src="${p.image}" alt="${p.name}" />
          </div>
          <div class="product-content">
            <h4 class="product-title">${p.name}</h4>
            <div class="current-price">₹${p.price.toLocaleString('en-IN')}</div>
            <div style="display:flex; gap:8px; margin-top:12px;">
              <button class="btn btn-primary btn-sm full-width" onclick="addToCart('${p.id}'); toggleWishlist('${p.id}'); closeModal('wishlistModal');">Move to Cart</button>
              <button class="btn btn-outline-danger btn-sm" onclick="toggleWishlist('${p.id}'); renderWishlistModal();"><i class="fa-solid fa-trash-can"></i></button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ==================== PRODUCT DETAIL VIEW ====================

function openProductDetail(productId) {
    const product = CATALOG.find(p => p.id === productId);
    if (!product) return;

    // Track recently viewed
    if (!state.recentlyViewed.includes(productId)) {
        state.recentlyViewed.unshift(productId);
        if (state.recentlyViewed.length > 8) state.recentlyViewed.pop();
        saveRecent();
        renderRecentlyViewed();
    }

    const modalBody = document.getElementById('productDetailBody');
    const isWishlisted = state.wishlist.includes(product.id);

    modalBody.innerHTML = `
    <div class="detail-gallery">
      <img src="${product.image}" alt="${product.name}" id="detailMainImg" />
    </div>

    <div class="detail-info">
      <div class="product-category-brand">${product.brand} • ${product.category}</div>
      <h2>${product.name}</h2>
      
      <div class="product-rating">
        <i class="fa-solid fa-star star-filled"></i>
        <span><strong>${product.rating}</strong> stars (${product.reviewCount} verified reviews)</span>
      </div>

      <div class="detail-price-row">
        <span class="detail-price">₹${product.price.toLocaleString('en-IN')}</span>
        ${product.originalPrice ? `<span class="original-price">M.R.P: ₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
        ${product.discount > 0 ? `<span class="discount-tag">${product.discount}% OFF</span>` : ''}
      </div>

      <p class="detail-desc">${product.description}</p>

      <!-- PIN Code Check Simulation -->
      <div class="pincode-checker">
        <label><i class="fa-solid fa-truck-fast"></i> Check Delivery & Cash on Delivery Availability</label>
        <div class="pincode-box">
          <input type="text" id="pincodeInput" placeholder="Enter 6-digit PIN code" maxlength="6" />
          <button class="btn btn-outline-dark btn-sm" onclick="checkPincodeDelivery()">Check</button>
        </div>
        <div class="pincode-result" id="pincodeResult"></div>
      </div>

      <div class="detail-actions">
        <button class="btn btn-accent full-width" onclick="addToCart('${product.id}'); closeModal('productDetailModal'); openCartDrawer();">
          <i class="fa-solid fa-bag-shopping"></i> Buy Now / Add to Bag
        </button>
        <button class="btn btn-outline ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${product.id}'); openProductDetail('${product.id}');">
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
      </div>

      <div style="font-size: 0.8rem; color: var(--text-muted); display:flex; gap:16px;">
        <span><i class="fa-solid fa-shield-halved"></i> 1 Year Warranty</span>
        <span><i class="fa-solid fa-rotate-left"></i> 7 Days Replacement</span>
      </div>
    </div>
  `;

    document.getElementById('productDetailModal').classList.remove('hide');
}

function checkPincodeDelivery() {
    const pin = document.getElementById('pincodeInput').value.trim();
    const res = document.getElementById('pincodeResult');
    if (/^[1-9][0-9]{5}$/.test(pin)) {
        res.style.color = 'var(--success-color)';
        res.innerHTML = `<i class="fa-solid fa-circle-check"></i> Express Delivery Available to ${pin} by tomorrow! COD Available.`;
    } else {
        res.style.color = 'var(--danger-color)';
        res.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please enter a valid 6-digit Indian PIN code.`;
    }
}

// ==================== CHECKOUT & DEMO PAYMENTS ====================

function startCheckout() {
    if (state.cart.length === 0) {
        showToast('Your cart is empty', 'error');
        return;
    }
    closeCartDrawer();
    goToCheckoutStep(1);

    // Pre-fill address if user has saved one
    if (state.userSession && state.userSession.addresses.length > 0) {
        const addr = state.userSession.addresses[0];
        document.getElementById('shipName').value = addr.name || '';
        document.getElementById('shipPhone').value = addr.phone || '';
        document.getElementById('shipPincode').value = addr.pincode || '';
        document.getElementById('shipCity').value = addr.city || '';
        document.getElementById('shipState').value = addr.state || '';
        document.getElementById('shipStreet').value = addr.street || '';
    }

    document.getElementById('checkoutModal').classList.remove('hide');
}

function goToCheckoutStep(stepNum) {
    state.currentCheckoutStep = stepNum;

    [1, 2, 3].forEach(num => {
        const panel = document.getElementById(`checkoutStep${num}`);
        const ind = document.getElementById(`stepInd${num}`);
        if (num === stepNum) {
            panel.classList.remove('hide');
            ind.classList.add('active');
        } else {
            panel.classList.add('hide');
            ind.classList.remove('active');
        }
    });

    if (stepNum === 2) renderCheckoutReview();
    if (stepNum === 3) {
        const totals = calculateCartTotals();
        document.querySelectorAll('.payTotalSpan').forEach(el => el.textContent = totals.grandTotal.toLocaleString('en-IN'));
    }
}

function handleAddressSubmit(e) {
    e.preventDefault();
    goToCheckoutStep(2);
}

function renderCheckoutReview() {
    const container = document.getElementById('checkoutReviewItems');
    const detailsBox = document.getElementById('checkoutSummaryDetails');

    container.innerHTML = state.cart.map(i => `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <div>
        <strong style="font-size:0.88rem;">${i.product.name}</strong>
        <div style="font-size:0.78rem; color:var(--text-muted);">Qty: ${i.qty} x ₹${i.product.price}</div>
      </div>
      <span style="font-weight:700;">₹${(i.product.price * i.qty).toLocaleString('en-IN')}</span>
    </div>
  `).join('');

    const totals = calculateCartTotals();
    detailsBox.innerHTML = `
    <div class="summary-row"><span>Items Total</span><span>₹${totals.subtotal.toLocaleString('en-IN')}</span></div>
    <div class="summary-row"><span>Shipping Charge</span><span>${totals.shipping === 0 ? 'FREE' : `₹${totals.shipping}`}</span></div>
    ${totals.discount > 0 ? `<div class="summary-row discount-row"><span>Discount</span><span>-₹${totals.discount.toLocaleString('en-IN')}</span></div>` : ''}
    <div class="summary-row grand-total"><span>Amount Payable</span><span>₹${totals.grandTotal.toLocaleString('en-IN')}</span></div>
  `;
}

function switchPayTab(method) {
    state.selectedPayMethod = method;
    document.querySelectorAll('.pay-tab').forEach(b => b.classList.remove('active'));
    document.querySelector(`.pay-tab[data-pay="${method}"]`).classList.add('active');

    ['upi', 'card', 'cod'].forEach(m => {
        const p = document.getElementById(`payPanel${m.charAt(0).toUpperCase() + m.slice(1)}`);
        if (m === method) p.classList.remove('hide');
        else p.classList.add('hide');
    });
}

function processDemoPayment(mode, status) {
    if (status === 'FAIL') {
        showToast('Demo payment transaction failed! No money charged.', 'error');
        return;
    }

    // Create Completed Order Object
    const totals = calculateCartTotals();
    const orderId = 'NEX-' + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
        id: orderId,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        items: [...state.cart],
        total: totals.grandTotal,
        paymentMode: mode,
        status: 'Confirmed',
        address: {
            name: document.getElementById('shipName').value,
            street: document.getElementById('shipStreet').value,
            city: document.getElementById('shipCity').value,
            pincode: document.getElementById('shipPincode').value
        }
    };

    state.orders.unshift(newOrder);
    saveOrders();

    // Clear Cart & Coupon
    state.cart = [];
    state.activeCoupon = null;
    saveCart();
    updateHeaderBadges();

    closeModal('checkoutModal');
    showSuccessModal(newOrder);
}

function showSuccessModal(order) {
    document.getElementById('successOrderId').textContent = order.id;
    document.getElementById('successOrderSummary').innerHTML = `
    <div style="font-size:0.85rem; padding:12px; background:var(--bg-secondary); border-radius:8px; margin-top:14px;">
      <div><strong>Total Amount:</strong> ₹${order.total.toLocaleString('en-IN')}</div>
      <div><strong>Payment Mode:</strong> ${order.paymentMode}</div>
      <div><strong>Delivering To:</strong> ${order.address.name}, ${order.address.city} - ${order.address.pincode}</div>
    </div>
  `;
    document.getElementById('orderSuccessModal').classList.remove('hide');
}

// ==================== AUTHENTICATION & ACCOUNT CENTER ====================

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    state.userSession = {
        name: email.split('@')[0],
        email: email,
        addresses: state.userSession ? state.userSession.addresses : []
    };
    saveSession();
    updateAccountHeaderLabel();
    closeModal('authModal');
    showToast(`Welcome back, ${state.userSession.name}!`);
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    state.userSession = { name, email, addresses: [] };
    saveSession();
    updateAccountHeaderLabel();
    closeModal('authModal');
    showToast(`Account created for ${name}`);
}

function handleLogout() {
    state.userSession = null;
    saveSession();
    updateAccountHeaderLabel();
    closeModal('accountModal');
    showToast('Signed out of demo account');
}

function updateAccountHeaderLabel() {
    const lbl = document.getElementById('accountLabel');
    if (state.userSession && state.userSession.name) {
        lbl.textContent = state.userSession.name.split(' ')[0];
    } else {
        lbl.textContent = 'Account';
    }
}

function switchAccountTab(tab) {
    document.querySelectorAll('.acc-tab').forEach(b => b.classList.remove('active'));
    document.querySelector(`.acc-tab[data-tab="${tab}"]`).classList.add('active');

    ['orders', 'addresses', 'settings'].forEach(t => {
        const p = document.getElementById(`accPanel${t.charAt(0).toUpperCase() + t.slice(1)}`);
        if (t === tab) p.classList.remove('hide');
        else p.classList.add('hide');
    });

    if (tab === 'orders') renderOrdersHistory();
    if (tab === 'addresses') renderSavedAddresses();
}

function renderOrdersHistory() {
    const container = document.getElementById('ordersListContainer');

    if (state.orders.length === 0) {
        container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon"><i class="fa-solid fa-box-open"></i></div>
        <h3>No past orders found</h3>
        <p>Your completed purchases will appear here for live tracking.</p>
      </div>
    `;
        return;
    }

    container.innerHTML = state.orders.map(o => `
    <div class="order-card-demo">
      <div class="order-header-line">
        <span>Order #${o.id} • ${o.date}</span>
        <span class="badge badge-accent">${o.status}</span>
      </div>
      <div>
        ${o.items.map(i => `<div style="font-size:0.82rem; color:var(--text-muted);">${i.qty}x ${i.product.name}</div>`).join('')}
      </div>
      
      <!-- Timeline Simulation -->
      <div class="order-timeline">
        <div class="timeline-step done"><i class="fa-solid fa-circle-check"></i> Placed</div>
        <div class="timeline-step done"><i class="fa-solid fa-circle-check"></i> Confirmed</div>
        <div class="timeline-step"><i class="fa-regular fa-circle"></i> Shipped</div>
        <div class="timeline-step"><i class="fa-regular fa-circle"></i> Delivered</div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px;">
        <span style="font-weight:800; font-size:0.9rem;">Total: ₹${o.total.toLocaleString('en-IN')}</span>
        ${o.status !== 'Cancelled' ? `<button class="btn btn-outline-danger btn-sm" onclick="cancelOrder('${o.id}')">Cancel Demo Order</button>` : ''}
      </div>
    </div>
  `).join('');
}

function cancelOrder(orderId) {
    const order = state.orders.find(o => o.id === orderId);
    if (order) {
        order.status = 'Cancelled';
        saveOrders();
        renderOrdersHistory();
        showToast(`Order ${orderId} has been cancelled.`);
    }
}

function renderSavedAddresses() {
    const grid = document.getElementById('savedAddressesGrid');
    const addrs = state.userSession ? state.userSession.addresses : [];

    grid.innerHTML = addrs.map(a => `
    <div style="border:1px solid var(--border-color); border-radius:8px; padding:14px;">
      <strong>${a.name}</strong> (${a.phone})
      <p style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">${a.street}, ${a.city}, ${a.state} - ${a.pincode}</p>
    </div>
  `).join('');
}

// ==================== COMPARISON DRAWER ====================

function toggleCompare(productId) {
    const idx = state.compareList.indexOf(productId);
    if (idx > -1) {
        state.compareList.splice(idx, 1);
        showToast('Removed from comparison list');
    } else {
        if (state.compareList.length >= 3) {
            showToast('You can compare maximum 3 products at a time', 'error');
            return;
        }
        state.compareList.push(productId);
        showToast('Added to compare tray');
    }
    document.getElementById('compareCount').textContent = state.compareList.length;
}

function renderCompareModal() {
    const body = document.getElementById('compareBody');
    const products = CATALOG.filter(p => state.compareList.includes(p.id));

    if (products.length === 0) {
        body.innerHTML = `
      <div class="empty-state">
        <p>No products selected for comparison. Add items from catalog!</p>
      </div>
    `;
        return;
    }

    body.innerHTML = `
    <div style="display:grid; grid-template-columns: repeat(${products.length}, 1fr); gap:16px;">
      ${products.map(p => `
        <div style="border:1px solid var(--border-color); padding:16px; border-radius:8px;">
          <img src="${p.image}" style="width:100%; height:140px; object-fit:cover; border-radius:6px;" />
          <h4 style="font-size:0.9rem; margin:8px 0;">${p.name}</h4>
          <div style="font-weight:800; color:var(--accent-primary);">₹${p.price.toLocaleString('en-IN')}</div>
          <div style="font-size:0.8rem; margin:8px 0;">Rating: ${p.rating} ★</div>
          <p style="font-size:0.75rem; color:var(--text-muted);">${p.description}</p>
          <button class="btn btn-outline-danger btn-sm full-width" style="margin-top:10px;" onclick="toggleCompare('${p.id}'); renderCompareModal();">Remove</button>
        </div>
      `).join('')}
    </div>
  `;
}

// ==================== RECENTLY VIEWED & THEME ====================

function renderRecentlyViewed() {
    const sec = document.getElementById('recentlyViewedSection');
    const grid = document.getElementById('recentlyViewedGrid');

    const products = CATALOG.filter(p => state.recentlyViewed.includes(p.id));
    if (products.length === 0) {
        sec.classList.add('hide');
        return;
    }

    sec.classList.remove('hide');
    grid.innerHTML = products.map(p => `
    <div class="product-card" onclick="openProductDetail('${p.id}')">
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.name}" />
      </div>
      <div class="product-content">
        <h4 class="product-title">${p.name}</h4>
        <div class="current-price">₹${p.price.toLocaleString('en-IN')}</div>
      </div>
    </div>
  `).join('');
}

// Light / Dark Theme Mode
function initTheme() {
    const savedTheme = localStorage.getItem(KEYS.THEME) || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(KEYS.THEME, next);
    updateThemeIcon(next);
    showToast(`Switched to ${next} theme`);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.className = theme === 'dark' ? 'fa-regular fa-sun' : 'fa-regular fa-moon';
    }
}

// Flash Deals Timer simulation
function startFlashTimer() {
    let hours = 8, mins = 42, secs = 15;
    setInterval(() => {
        secs--;
        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 24; }

        document.getElementById('timerHours').textContent = String(hours).padStart(2, '0');
        document.getElementById('timerMins').textContent = String(mins).padStart(2, '0');
        document.getElementById('timerSecs').textContent = String(secs).padStart(2, '0');
    }, 1000);
}

// Reset Local Data
function confirmResetData() {
    if (confirm('Are you sure you want to reset all demo store data (Cart, Orders, Wishlist)?')) {
        localStorage.clear();
        location.reload();
    }
}

// Toast Notifications System
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    if (type === 'error') toast.style.backgroundColor = 'var(--danger-color)';

    toast.innerHTML = `
    <i class="fa-solid ${type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check'}"></i>
    <span>${message}</span>
  `;

    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Badges Sync
function updateHeaderBadges() {
    const cartCount = state.cart.reduce((sum, i) => sum + i.qty, 0);
    const wishlistCount = state.wishlist.length;

    document.getElementById('cartBadge').textContent = cartCount;
    document.getElementById('mobileCartBadge').textContent = cartCount;

    document.getElementById('wishlistBadge').textContent = wishlistCount;
    document.getElementById('mobileWishlistBadge').textContent = wishlistCount;
}

// ==================== EVENT LISTENERS SETUP ====================

function setupEventListeners() {
    // Navigation & Search
    document.getElementById('searchInput').addEventListener('input', handleLiveSearch);
    document.getElementById('clearSearchBtn').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        handleLiveSearch({ target: { value: '' } });
    });

    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

    // Filters Event Listeners
    document.getElementById('priceRangeSlider').addEventListener('input', (e) => {
        state.priceRange = Number(e.target.value);
        document.getElementById('maxPriceInput').value = e.target.value;
        updateActiveFilterChips();
        renderProducts();
    });

    document.querySelectorAll('input[name="ratingFilter"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            state.minRating = Number(e.target.value);
            updateActiveFilterChips();
            renderProducts();
        });
    });

    document.getElementById('inStockCheckbox').addEventListener('change', (e) => {
        state.inStockOnly = e.target.checked;
        updateActiveFilterChips();
        renderProducts();
    });

    document.getElementById('sortBySelect').addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProducts();
    });

    document.getElementById('resetFiltersBtn').addEventListener('click', resetAllFilters);
    document.getElementById('clearAllFiltersBtn').addEventListener('click', resetAllFilters);

    // Header Nav Actions
    document.getElementById('headerCartBtn').addEventListener('click', openCartDrawer);
    document.getElementById('headerWishlistBtn').addEventListener('click', () => {
        renderWishlistModal();
        document.getElementById('wishlistModal').classList.remove('hide');
    });

    document.getElementById('headerAccountBtn').addEventListener('click', () => {
        if (state.userSession) {
            switchAccountTab('orders');
            document.getElementById('accountModal').classList.remove('hide');
        } else {
            document.getElementById('authModal').classList.remove('hide');
        }
    });

    document.getElementById('proceedToCheckoutBtn').addEventListener('click', startCheckout);
    document.getElementById('applyCouponBtn').addEventListener('click', handleApplyCoupon);
    document.getElementById('resetDemoDataBtn').addEventListener('click', confirmResetData);

    document.getElementById('compareDrawerTrigger').addEventListener('click', () => {
        renderCompareModal();
        document.getElementById('compareDrawerBackdrop').classList.remove('hide');
    });

    // Mobile Filter Drawer Toggle
    document.getElementById('mobileFilterToggle').addEventListener('click', () => {
        document.getElementById('filtersSidebar').classList.add('active');
    });
    document.getElementById('closeSidebarBtn').addEventListener('click', () => {
        document.getElementById('filtersSidebar').classList.remove('active');
    });

    // Category Nav Clicks
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            filterByCategory(link.dataset.category);
        });
    });

    // Announcement bar close
    document.getElementById('closeAnnouncement').addEventListener('click', () => {
        document.getElementById('announcementBar').style.display = 'none';
    });

    updateAccountHeaderLabel();
}

// Navigation Helper Functions
function filterByCategory(cat) {
    state.activeCategory = cat;
    renderCategorySidebar();
    updateActiveFilterChips();
    renderProducts();
    scrollToCatalog();
}

function filterByTag(tag) {
    state.searchQuery = tag;
    document.getElementById('searchInput').value = tag;
    updateActiveFilterChips();
    renderProducts();
    scrollToCatalog();
}

function scrollToCatalog() {
    document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hide');
}

function switchAuthTab(tab) {
    if (tab === 'login') {
        document.getElementById('loginTabBtn').classList.add('active');
        document.getElementById('signupTabBtn').classList.remove('active');
        document.getElementById('loginForm').classList.remove('hide');
        document.getElementById('signupForm').classList.add('hide');
    } else {
        document.getElementById('signupTabBtn').classList.add('active');
        document.getElementById('loginTabBtn').classList.remove('active');
        document.getElementById('signupForm').classList.remove('hide');
        document.getElementById('loginForm').classList.add('hide');
    }
}

function togglePasswordVisibility(id) {
    const field = document.getElementById(id);
    field.type = field.type === 'password' ? 'text' : 'password';
}

function navigateTo(target) {
    if (target === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'wishlist') {
        renderWishlistModal();
        document.getElementById('wishlistModal').classList.remove('hide');
    } else if (target === 'account') {
        if (state.userSession) {
            switchAccountTab('orders');
            document.getElementById('accountModal').classList.remove('hide');
        } else {
            document.getElementById('authModal').classList.remove('hide');
        }
    }
}

function openDemoModal(title, msg) {
    alert(`${title}\n\n${msg}`);
}