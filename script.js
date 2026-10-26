
document.addEventListener('DOMContentLoaded', () => {

    const menuData = [
        {
            id: 'm1',
            name: 'Wild Mushroom Soup',
            category: 'starters',
            price: 14.00,
            description: 'Velvety roasted forest mushrooms topped with truffle oil and herbs.',
            dietary: 'Vegetarian',
            image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 'm2',
            name: 'Crispy Calamari',
            category: 'starters',
            price: 18.00,
            description: 'Lightly battered squid served with house-made citrus aioli.',
            dietary: 'Seafood',
            image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 'm3',
            name: 'Artisanal Burrata',
            category: 'starters',
            price: 16.50,
            description: 'Fresh burrata, heirloom tomatoes, basil pesto, and balsamic glaze.',
            dietary: 'Vegetarian',
            image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 'm4',
            name: 'Prime Dry-Aged Ribeye',
            category: 'mains',
            price: 48.00,
            description: '12oz ribeye grilled over oak wood, served with rosemary butter.',
            dietary: 'Chef Special',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 'm5',
            name: 'Pan-Seared Atlantic Salmon',
            category: 'mains',
            price: 34.00,
            description: 'Served over asparagus risotto with lemon-dill reduction.',
            dietary: 'Gluten-Free',
            image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 'm6',
            name: 'Handcrafted Truffle Pasta',
            category: 'mains',
            price: 29.00,
            description: 'Fresh fettuccine tossed in parmesan cream and black truffle paste.',
            dietary: 'Vegetarian',
            image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281316?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 'm7',
            name: 'Artisan Margherita Pizza',
            category: 'mains',
            price: 22.00,
            description: 'San Marzano tomato sauce, fresh mozzarella, and organic basil.',
            dietary: 'Classic',
            image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 'm8',
            name: 'Valrhona Chocolate Lava Cake',
            category: 'desserts',
            price: 13.00,
            description: 'Warm molten chocolate cake served with Madagascar vanilla gelato.',
            dietary: 'Popular',
            image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 'm9',
            name: 'Deconstructed Cheesecake',
            category: 'desserts',
            price: 12.00,
            description: 'Creamy cheesecake mousse with graham crumble and berry compote.',
            dietary: 'Sweet Signature',
            image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 'm10',
            name: 'Craft Botanical Lemonade',
            category: 'drinks',
            price: 7.50,
            description: 'Freshly squeezed lemon infused with lavender and organic agave.',
            dietary: 'Refreshing',
            image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 'm11',
            name: 'Cold Brew Espresso Tonic',
            category: 'drinks',
            price: 8.00,
            description: 'Single-origin espresso poured over premium tonic water and citrus.',
            dietary: 'Iced',
            image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 'm12',
            name: 'Reserve Pinot Noir (Glass)',
            category: 'drinks',
            price: 16.00,
            description: 'Notes of dark cherry, clove, and subtle oak finish.',
            dietary: 'Alcoholic 21+',
            image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600'
        }
    ];

    // 2. GALLERY DATA
    const galleryData = [
        { img: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800', title: 'Main Dining Room' },
        { img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', title: 'Plated Ribeye Steak' },
        { img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', title: 'Intimate Bar Corner' },
        { img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800', title: 'Chef Preparing Dish' },
        { img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800', title: 'Sommelier Wine Collection' },
        { img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800', title: 'Artisanal Dessert Plating' }
    ];

    // 3. STATE MANAGEMENT
    let cart = JSON.parse(localStorage.getItem('savor_cart')) || {};
    let activeCategory = 'all';
    let searchQuery = '';
    let sortOption = 'default';

    // 4. MOBILE NAVIGATION
    const mobileToggle = document.getElementById('mobile-toggle-btn');
    const mainNav = document.getElementById('main-nav');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    // 5. RENDER FEATURED DISHES
    const featuredGrid = document.getElementById('featured-dishes-grid');
    if (featuredGrid) {
        const featuredItems = menuData.slice(3, 6); // Pick 3 items
        featuredGrid.innerHTML = featuredItems.map(item => `
            <div class="card dish-card">
                <img src="${item.image}" alt="${item.name}" class="dish-img">
                <div class="dish-header">
                    <h3>${item.name}</h3>
                    <span class="dish-price">$${item.price.toFixed(2)}</span>
                </div>
                <p class="dish-desc">${item.description}</p>
                <div class="dish-footer">
                    <span class="dietary-tag">${item.dietary}</span>
                    <button class="btn btn-outline btn-sm add-to-cart-btn" data-id="${item.id}">Add to Order</button>
                </div>
            </div>
        `).join('');
    }

    // 6. RENDER & FILTER MENU
    const menuGrid = document.getElementById('menu-grid');
    const emptyMsg = document.getElementById('empty-menu-msg');

    function filterAndRenderMenu() {
        let items = [...menuData];

        // Category Filter
        if (activeCategory !== 'all') {
            items = items.filter(item => item.category === activeCategory);
        }

        // Search Filter
        if (searchQuery.trim() !== '') {
            items = items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        // Sort Filter
        if (sortOption === 'price-asc') {
            items.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-desc') {
            items.sort((a, b) => b.price - a.price);
        }

        if (items.length === 0) {
            menuGrid.innerHTML = '';
            emptyMsg.classList.remove('hidden');
        } else {
            emptyMsg.classList.add('hidden');
            menuGrid.innerHTML = items.map(item => `
                <div class="card dish-card">
                    <img src="${item.image}" alt="${item.name}" class="dish-img">
                    <div class="dish-header">
                        <h3>${item.name}</h3>
                        <span class="dish-price">$${item.price.toFixed(2)}</span>
                    </div>
                    <p class="dish-desc">${item.description}</p>
                    <div class="dish-footer">
                        <span class="dietary-tag">${item.dietary}</span>
                        <button class="btn btn-primary btn-sm add-to-cart-btn" data-id="${item.id}">Add to Order</button>
                    </div>
                </div>
            `).join('');
        }
    }

    // Filter Listeners
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            activeCategory = e.target.dataset.category;
            filterAndRenderMenu();
        });
    });

    const searchInput = document.getElementById('menu-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            filterAndRenderMenu();
        });
    }

    const sortSelect = document.getElementById('menu-sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            sortOption = e.target.value;
            filterAndRenderMenu();
        });
    }

    filterAndRenderMenu();

    // 7. ORDER SUMMARY / CART SYSTEM
    const cartToggleBtn = document.getElementById('cart-toggle-btn');
    const cartCloseBtn = document.getElementById('cart-close-btn');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartSubtotalPrice = document.getElementById('cart-subtotal-price');
    const clearCartBtn = document.getElementById('clear-cart-btn');

    function toggleCart(open) {
        if (open) {
            cartDrawer.classList.add('active');
            cartOverlay.classList.add('active');
        } else {
            cartDrawer.classList.remove('active');
            cartOverlay.classList.remove('active');
        }
    }

    if (cartToggleBtn) cartToggleBtn.addEventListener('click', () => toggleCart(true));
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', () => toggleCart(false));
    if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCart(false));

    function updateCartUI() {
        let totalCount = 0;
        let subtotal = 0;
        const cartEntries = Object.entries(cart);

        if (cartEntries.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-msg">Your order summary is empty.</p>';
        } else {
            cartItemsContainer.innerHTML = cartEntries.map(([id, qty]) => {
                const item = menuData.find(m => m.id === id);
                if (!item) return '';
                totalCount += qty;
                subtotal += item.price * qty;

                return `
                    <div class="cart-item">
                        <div>
                            <strong>${item.name}</strong>
                            <div class="cart-item-qty">
                                <button class="qty-btn" data-action="decrease" data-id="${id}">-</button>
                                <span>${qty}</span>
                                <button class="qty-btn" data-action="increase" data-id="${id}">+</button>
                            </div>
                        </div>
                        <div>
                            <span>$${(item.price * qty).toFixed(2)}</span>
                        </div>
                    </div>
                `;
            }).join('');
        }

        cartCount.textContent = totalCount;
        cartSubtotalPrice.textContent = `$${subtotal.toFixed(2)}`;
        localStorage.setItem('savor_cart', JSON.stringify(cart));
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const id = e.target.dataset.id;
            cart[id] = (cart[id] || 0) + 1;
            updateCartUI();
            toggleCart(true);
        }

        if (e.target.classList.contains('qty-btn')) {
            const id = e.target.dataset.id;
            const action = e.target.dataset.action;
            if (action === 'increase') {
                cart[id]++;
            } else if (action === 'decrease') {
                cart[id]--;
                if (cart[id] <= 0) delete cart[id];
            }
            updateCartUI();
        }
    });

    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            cart = {};
            updateCartUI();
        });
    }

    updateCartUI();

    // 8. RENDER GALLERY & LIGHTBOX
    const galleryGrid = document.getElementById('gallery-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxOverlay = document.getElementById('lightbox-overlay');

    if (galleryGrid) {
        galleryGrid.innerHTML = galleryData.map(item => `
            <div class="gallery-item" data-img="${item.img}" data-caption="${item.title}">
                <img src="${item.img}" alt="${item.title}">
            </div>
        `).join('');

        galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                lightboxImg.src = item.dataset.img;
                lightboxCaption.textContent = item.dataset.caption;
                lightbox.classList.add('active');
                lightbox.setAttribute('aria-hidden', 'false');
            });
        });
    }

    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove('active');
            lightbox.setAttribute('aria-hidden', 'true');
        }
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // 9. FORM VALIDATIONS (RESERVATION & CONTACT)
    const reservationForm = document.getElementById('reservation-form');
    const reservationAlert = document.getElementById('reservation-alert');

    if (reservationForm) {
        // Restrict past dates
        const dateInput = document.getElementById('res-date');
        const today = new Date().toISOString().split('T')[0];
        if (dateInput) dateInput.min = today;

        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let valid = true;

            const name = document.getElementById('res-name');
            const email = document.getElementById('res-email');
            const phone = document.getElementById('res-phone');

            if (!name.value.trim()) {
                document.getElementById('err-res-name').textContent = 'Name is required';
                valid = false;
            } else document.getElementById('err-res-name').textContent = '';

            if (!email.value.includes('@')) {
                document.getElementById('err-res-email').textContent = 'Valid email is required';
                valid = false;
            } else document.getElementById('err-res-email').textContent = '';

            if (!phone.value.trim()) {
                document.getElementById('err-res-phone').textContent = 'Phone is required';
                valid = false;
            } else document.getElementById('err-res-phone').textContent = '';

            if (valid) {
                reservationAlert.className = 'form-alert success';
                reservationAlert.textContent = 'Demo Reservation Submitted! (This is a portfolio concept demo, no real table was booked).';
                reservationForm.reset();
            }
        });
    }

    const contactForm = document.getElementById('contact-form');
    const contactAlert = document.getElementById('contact-alert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let valid = true;

            const name = document.getElementById('contact-name');
            const email = document.getElementById('contact-email');
            const msg = document.getElementById('contact-msg');

            if (!name.value.trim()) {
                document.getElementById('err-contact-name').textContent = 'Name is required';
                valid = false;
            } else document.getElementById('err-contact-name').textContent = '';

            if (!email.value.includes('@')) {
                document.getElementById('err-contact-email').textContent = 'Valid email is required';
                valid = false;
            } else document.getElementById('err-contact-email').textContent = '';

            if (!msg.value.trim()) {
                document.getElementById('err-contact-msg').textContent = 'Message cannot be empty';
                valid = false;
            } else document.getElementById('err-contact-msg').textContent = '';

            if (valid) {
                contactAlert.className = 'form-alert success';
                contactAlert.textContent = 'Demo Message Sent! Thank you for testing out this contact form demo.';
                contactForm.reset();
            }
        });
    }
});