// =====================
// DATA — matches original template exactly
// =====================

const services = [
    { label: 'BREAKFAST', img: 'Images/breakfast.png', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { label: 'LUNCH',     img: 'Images/lunch.png',     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { label: 'DINNER',    img: 'Images/dinner.png',    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { label: 'DRINKS',    img: 'Images/drinks.png',    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
];

const menuCategories = [
    { key: 'starters',   label: 'STARTERS',   icon: 'Images/icon2.png' },
    { key: 'meat',       label: 'MEAT',        icon: 'Images/icon1.png' },
    { key: 'fish',       label: 'FISH',        icon: 'Images/icon3.png' },
    { key: 'vegetarian', label: 'VEGETARIAN',  icon: 'Images/icon4.png' },
    { key: 'dessert',    label: 'DESSERT',     icon: 'Images/icon5.png' },
    { key: 'drinks',     label: 'DRINKS',      icon: 'Images/icon1.png' }
];

const menuItems = [
    // STARTERS
    { name: 'Green Salad',           price: '$12.00', category: 'starters',   desc: 'Fresh mixed greens with cherry tomatoes, cucumber and house vinaigrette.' },
    { name: 'Appeteaser Platter',    price: '$23.00', category: 'starters',   desc: 'A generous selection of dips, olives, bread and seasonal bites.' },
    { name: 'Bruschetta al Pomodoro',price: '$14.00', category: 'starters',   desc: 'Toasted sourdough topped with ripe tomatoes, basil and extra virgin olive oil.' },
    { name: 'Soup of the Day',       price: '$10.00', category: 'starters',   desc: 'Ask your server for today\'s freshly made seasonal soup.' },

    // MEAT
    { name: 'Eggs Any Style',        price: '$23.00', category: 'meat',       desc: 'Free-range eggs cooked to your liking, served with toast and grilled tomato.' },
    { name: 'Chicken Wings',         price: '$45.00', category: 'meat',       desc: 'Crispy wings tossed in our signature smoky BBQ glaze.' },
    { name: 'Wing Roulette',         price: '$25.00', category: 'meat',       desc: 'A mix of mild, hot and fiery wings — dare to pick one!' },
    { name: 'Grilled Lamb Chops',    price: '$38.00', category: 'meat',       desc: 'Herb-marinated lamb chops grilled over charcoal, served with mint jus.' },
    { name: 'Beef Tenderloin',       price: '$52.00', category: 'meat',       desc: '200g prime tenderloin, pan-seared to perfection with red wine reduction.' },
    { name: 'Pork Belly Bao',        price: '$18.00', category: 'meat',       desc: 'Slow-braised pork belly in steamed bao buns with pickled daikon.' },

    // FISH
    { name: 'Grilled Sea Bass',      price: '$34.00', category: 'fish',       desc: 'Whole sea bass grilled with lemon, capers and fresh herbs.' },
    { name: 'Prawn Tempura',         price: '$28.00', category: 'fish',       desc: 'Tiger prawns in a light tempura batter, served with ponzu dipping sauce.' },
    { name: 'Salmon Tartare',        price: '$22.00', category: 'fish',       desc: 'Hand-cut Atlantic salmon with avocado, sesame oil and crispy wonton.' },
    { name: 'Fish & Chips',          price: '$19.00', category: 'fish',       desc: 'Beer-battered cod fillet with thick-cut chips and mushy peas.' },

    // VEGETARIAN
    { name: 'Spicy Mixed Olives',    price: '$53.00', category: 'vegetarian', desc: 'Marinated olives with chilli, garlic and fresh rosemary.' },
    { name: 'Mushroom Risotto',      price: '$21.00', category: 'vegetarian', desc: 'Creamy Arborio rice with wild mushrooms, truffle oil and Parmesan.' },
    { name: 'Roasted Cauliflower',   price: '$17.00', category: 'vegetarian', desc: 'Whole roasted cauliflower with harissa, pomegranate and tahini.' },
    { name: 'Paneer Tikka',          price: '$16.00', category: 'vegetarian', desc: 'Tandoor-grilled cottage cheese with spiced yoghurt marinade and mint chutney.' },

    // DESSERT
    { name: 'Chocolate Fondant',     price: '$11.00', category: 'dessert',    desc: 'Warm dark chocolate cake with a molten centre, served with vanilla ice cream.' },
    { name: 'Crème Brûlée',          price: '$10.00', category: 'dessert',    desc: 'Classic French custard with a perfectly caramelised sugar crust.' },
    { name: 'Mango Panna Cotta',     price: '$9.00',  category: 'dessert',    desc: 'Silky Italian cream dessert topped with fresh mango coulis.' },
    { name: 'Sticky Toffee Pudding', price: '$12.00', category: 'dessert',    desc: 'Moist date sponge drenched in warm toffee sauce with clotted cream.' },

    // DRINKS
    { name: 'Moscow Mule',           price: '$13.00', category: 'drinks',     desc: 'Vodka, fresh lime juice and ginger beer served over ice in a copper mug.' },
    { name: 'Mango Lassi',           price: '$7.00',  category: 'drinks',     desc: 'Chilled blended mango with yoghurt and a hint of cardamom.' },
    { name: 'House Red Wine',        price: '$9.00',  category: 'drinks',     desc: 'A smooth, full-bodied red selected by our sommelier. Glass or bottle.' },
    { name: 'Fresh Lemonade',        price: '$5.00',  category: 'drinks',     desc: 'Freshly squeezed lemons with mint, sugar syrup and sparkling water.' },
];

const galleryItems = [
    { title: 'g1', image: 'Images/dd.jpg' },
    { title: 'g2', image: 'Images/bb.jpg' },
    { title: 'g3', image: 'Images/cc.jpg' },
    { title: 'g4', image: 'Images/ee.jpg' },
    { title: 'g5', image: 'Images/aa.jpg' },
    { title: 'g6', image: 'Images/2.jpg' }
];

const chefs = [
    {
        name: 'Jeremy Dupont',
        role: 'Executive Chef',
        bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
        bio2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1500s.',
        image: 'Images/chefs.jpg'
    },
    {
        name: 'Gustave Beron',
        role: 'Sous Chef',
        bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
        bio2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1500s.',
        image: 'Images/chefs2.jpg'
    }
];

const blogPosts = [
    { title: 'WARM HUMMUS WITH SPICED LAMB',  image: 'Images/blog1.jpg', excerpt: 'Lorem Ipsum has been the industry\'s standard dummy text ever since, when an unknown printer took a galley of type and scrambled it.' },
    { title: 'SCRATCH MADE MOSCOW MULES',      image: 'Images/blog2.jpg', excerpt: 'Lorem Ipsum has been the industry\'s standard dummy text ever since, when an unknown printer took a galley of type and scrambled it.' },
    { title: 'CRUMB TOPPED APPLE SLAB PIE',    image: 'Images/blog3.jpg', excerpt: 'Lorem Ipsum has been the industry\'s standard dummy text ever since, when an unknown printer took a galley of type and scrambled it.' }
];

const testimonials = [
    { name: 'Sarah Johnson', rating: 5, text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the when an unknown printer took a galley of type scrambled it.' },
    { name: 'Michael Chen',  rating: 5, text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the when an unknown printer took a galley of type scrambled it.' },
    { name: 'Emma Williams', rating: 4, text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the when an unknown printer took a galley of type scrambled it.' }
];

// =====================
// NAVBAR
// =====================
const navbar    = document.getElementById('navbar');
const toggle    = document.getElementById('mobileToggle');
const navMenu   = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveLink();
    toggleScrollTop();
});

toggle.addEventListener('click', () => navMenu.classList.toggle('active'));

document.querySelectorAll('.nav-link, .nav-book').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navMenu.classList.remove('active');
        const target = link.getAttribute('href').replace('#', '');
        scrollToSection(target);
    });
});

function updateActiveLink() {
    const scrollPos = window.scrollY + 80;
    document.querySelectorAll('section[id]').forEach(sec => {
        const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
        if (link) link.classList.toggle('active', scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight);
    });
}

function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// =====================
// HERO BACKGROUND + DOTS
// =====================
const heroBgEl = document.getElementById('heroBg');
const heroSlides = [
    'Images/dd.jpg',
    'Images/bb.jpg',
    'Images/cc.jpg'
];
let heroSlide = 0;

function setHeroBg(index) {
    heroBgEl.style.backgroundImage = `url('${heroSlides[index]}')`;
    document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === index));
    heroSlide = index;
}

setHeroBg(0);
setInterval(() => setHeroBg((heroSlide + 1) % heroSlides.length), 5000);

document.querySelectorAll('.hero-dot').forEach(dot => {
    dot.addEventListener('click', () => setHeroBg(+dot.dataset.index));
});

// =====================
// SERVICES
// =====================
function renderServices() {
    const grid = document.getElementById('serviceGrid');
    services.forEach(s => {
        const card = document.createElement('div');
        card.className = 'service-card animate-on-scroll';
        card.innerHTML = `
            <img src="${s.img}" alt="${s.label}">
            <h3>${s.label}</h3>
            <p>${s.desc}</p>
        `;
        grid.appendChild(card);
    });
}

// =====================
// MENU
// =====================
function renderMenuTabs() {
    const tabs = document.getElementById('menuTabs');
    menuCategories.forEach((cat, i) => {
        const btn = document.createElement('button');
        btn.className = `tab-btn${i === 0 ? ' active' : ''}`;
        btn.dataset.cat = cat.key;
        btn.innerHTML = `<div class="tab-icon"><img src="${cat.icon}" alt="${cat.label}"></div>${cat.label}`;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenuItems(cat.key);
        });
        tabs.appendChild(btn);
    });
}

function renderMenuItems(category) {
    const list = document.getElementById('menuList');
    const filtered = menuItems.filter(m => m.category === category);
    list.innerHTML = '';

    if (!filtered.length) {
        list.innerHTML = '<p style="padding:30px;text-align:center;color:#999;grid-column:1/-1">No items in this category.</p>';
        return;
    }

    filtered.forEach(item => {
        const el = document.createElement('div');
        el.className = 'menu-item';
        el.innerHTML = `
            <div class="menu-item-header">
                <h3>${item.name}</h3>
                <span class="menu-item-price">${item.price}</span>
            </div>
            <p>${item.desc}</p>
        `;
        list.appendChild(el);
    });
}

// =====================
// GALLERY
// =====================
function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    const labels = ['Dal Bhat', 'Momo', 'Thukpa', 'Curry Platter', 'Sel Roti', 'Spiced Rice'];
    galleryItems.forEach((item, i) => {
        const div = document.createElement('div');
        div.className = 'gallery-item animate-on-scroll';
        div.innerHTML = `
            <img src="${item.image}" alt="${labels[i]}" loading="lazy">
            <div class="gallery-overlay">
                <span class="gallery-overlay-title">${labels[i]}</span>
                <span class="gallery-overlay-icon">+</span>
            </div>
        `;
        div.addEventListener('click', () => openModal(item.image));
        grid.appendChild(div);
    });
}

function openModal(src) {
    const modal = document.getElementById('galleryModal');
    document.getElementById('modalImage').src = src;
    modal.classList.add('open');
}

document.querySelector('.modal-close').addEventListener('click', closeModal);
document.getElementById('galleryModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});

function closeModal() {
    document.getElementById('galleryModal').classList.remove('open');
}

// =====================
// CHEFS SLIDER
// =====================
let currentChef = 0;

function renderChefs() {
    const slider = document.getElementById('chefSlider');
    const dotsEl = document.getElementById('chefDots');

    chefs.forEach((chef, i) => {
        const card = document.createElement('div');
        card.className = `chef-card${i === 0 ? ' active' : ''}`;
        card.innerHTML = `
            <div class="chef-info">
                <h3>${chef.name}</h3>
                <span class="chef-role">${chef.role}</span>
                <p>${chef.bio}</p>
                <p>${chef.bio2}</p>
                <div class="chef-signature">${chef.name}</div>
            </div>
            <div class="chef-image">
                <img src="${chef.image}" alt="${chef.name}" loading="lazy">
            </div>
        `;
        slider.appendChild(card);

        const dot = document.createElement('span');
        dot.className = `chef-dot${i === 0 ? ' active' : ''}`;
        dot.addEventListener('click', () => goToChef(i));
        dotsEl.appendChild(dot);
    });
}

function goToChef(index) {
    const cards = document.querySelectorAll('.chef-card');
    const dots  = document.querySelectorAll('.chef-dot');
    cards[currentChef].classList.remove('active');
    dots[currentChef].classList.remove('active');
    currentChef = index;
    cards[currentChef].classList.add('active');
    dots[currentChef].classList.add('active');
}

setInterval(() => goToChef((currentChef + 1) % chefs.length), 5000);

// =====================
// BLOG
// =====================
function renderBlog() {
    const grid = document.getElementById('blogGrid');
    blogPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'blog-card animate-on-scroll';
        card.innerHTML = `
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
            </div>
            <div class="blog-content">
                <h4>${post.title}</h4>
                <p>${post.excerpt}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// =====================
// TESTIMONIALS — element removed from HTML, skip safely
// =====================
function renderTestimonials() {
    // testimonial section is now a static HTML split panel — no JS needed
}

function goToSlide() {}

// =====================
// BOOKING FORM
// =====================
document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target;
    const msg = document.getElementById('formMessage');
    const name = f.name.value.trim();
    const email = f.email.value.trim();

    if (!name || !email) {
        msg.textContent = 'Please fill in all required fields.';
        msg.className = 'form-message error';
        return;
    }

    msg.textContent = `Thank you, ${name}! We've received your message and will be in touch soon.`;
    msg.className = 'form-message success';
    f.reset();
    setTimeout(() => { msg.className = 'form-message'; msg.textContent = ''; }, 6000);
});

// =====================
// SCROLL TO TOP
// =====================
function toggleScrollTop() {
    document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
}

document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =====================
// SCROLL ANIMATIONS
// =====================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

// =====================
// INIT
// =====================
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderMenuTabs();
    renderMenuItems('starters');
    renderGallery();
    renderChefs();
    renderBlog();
    renderTestimonials();

    // observe after render
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});
