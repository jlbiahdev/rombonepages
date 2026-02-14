// ==========================================
// ROMBONE - Actualités page interactions
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // === Filter Functionality ===
    const filterButtons = document.querySelectorAll('.filter-btn');
    const articles = document.querySelectorAll('.article-card');
    const emptyState = document.querySelector('.empty-state');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter articles
            let visibleCount = 0;
            
            articles.forEach(article => {
                if (filterValue === 'all') {
                    article.classList.remove('hidden');
                    visibleCount++;
                } else {
                    const categories = article.getAttribute('data-category');
                    if (categories.includes(filterValue)) {
                        article.classList.remove('hidden');
                        visibleCount++;
                    } else {
                        article.classList.add('hidden');
                    }
                }
            });
            
            // Show/hide empty state
            if (emptyState) {
                if (visibleCount === 0) {
                    emptyState.style.display = 'block';
                } else {
                    emptyState.style.display = 'none';
                }
            }
            
            // Smooth scroll to articles grid
            const articlesGrid = document.querySelector('.articles-grid');
            if (articlesGrid && filterValue !== 'all') {
                setTimeout(() => {
                    articlesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });
    
    // === Newsletter Form ===
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // Show success message
                showNewsletterSuccess(this);
                
                // Reset form
                this.reset();
            } else {
                showNewsletterError(emailInput, 'Veuillez entrer une adresse email valide');
            }
        });
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showNewsletterSuccess(form) {
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.className = 'newsletter-success';
        successDiv.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <span>Merci ! Vous êtes inscrit à notre newsletter.</span>
        `;
        
        // Replace form with success message temporarily
        const formParent = form.parentElement;
        form.style.display = 'none';
        formParent.appendChild(successDiv);
        
        // Add styles for success message
        successDiv.style.display = 'flex';
        successDiv.style.alignItems = 'center';
        successDiv.style.gap = '1rem';
        successDiv.style.padding = '1.5rem';
        successDiv.style.background = 'rgba(255, 255, 255, 0.15)';
        successDiv.style.borderRadius = '8px';
        successDiv.style.fontSize = '1.0625rem';
        successDiv.style.fontWeight = '600';
        
        // Restore form after 5 seconds
        setTimeout(() => {
            successDiv.remove();
            form.style.display = 'flex';
        }, 5000);
    }
    
    function showNewsletterError(input, message) {
        input.style.borderColor = '#D32F2F';
        
        // Remove error after 3 seconds
        setTimeout(() => {
            input.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }, 3000);
    }
    
    // === Article Card Hover Effect Enhancement ===
    articles.forEach(article => {
        article.addEventListener('mouseenter', function() {
            const badge = this.querySelector('.article-badge');
            if (badge) {
                badge.style.transform = 'scale(1.05)';
            }
        });
        
        article.addEventListener('mouseleave', function() {
            const badge = this.querySelector('.article-badge');
            if (badge) {
                badge.style.transform = 'scale(1)';
            }
        });
    });
    
    // === Lazy Loading Images ===
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                if (src) {
                    img.src = src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '100px'
    });
    
    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
    
    // === Scroll Progress Indicator (optional) ===
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 80px;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, var(--accent-light), var(--accent));
            z-index: 1001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };
    
    // Uncomment to enable scroll progress bar
    // createScrollProgress();
    
});

// === Global function for reset filters (called from empty state button) ===
function resetFilters() {
    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (allButton) {
        allButton.click();
    }
}

// === Article Link Click Tracking (for analytics) ===
document.addEventListener('click', function(e) {
    if (e.target.closest('.article-link')) {
        e.preventDefault();
        const article = e.target.closest('.article-card');
        const title = article.querySelector('.article-title').textContent;
        
        console.log('Article clicked:', title);
        
        // Here you can add analytics tracking
        // Example: gtag('event', 'article_click', { article_title: title });
        
        // For now, just show alert (remove in production)
        alert('Article complet à venir : ' + title);
    }
});
