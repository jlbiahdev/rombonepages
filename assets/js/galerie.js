// ==========================================
// ROMBONE - Galerie page interactions
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // === Filter Functionality ===
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const emptyGallery = document.querySelector('.empty-gallery');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            let visibleCount = 0;
            
            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hidden');
                    visibleCount++;
                } else {
                    const categories = item.getAttribute('data-category');
                    if (categories.includes(filterValue)) {
                        item.classList.remove('hidden');
                        visibleCount++;
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
            
            // Show/hide empty state
            if (emptyGallery) {
                if (visibleCount === 0) {
                    emptyGallery.style.display = 'block';
                } else {
                    emptyGallery.style.display = 'none';
                }
            }
        });
    });
    
    // === Lightbox Functionality ===
    let currentImageIndex = 0;
    const images = Array.from(galleryItems).map(item => {
        const img = item.querySelector('img');
        return {
            src: img.src,
            alt: img.alt,
            title: item.querySelector('.gallery-title')?.textContent || ''
        };
    });
    
    // Create lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <button class="lightbox-nav lightbox-prev">&lsaquo;</button>
            <img class="lightbox-image" src="" alt="">
            <button class="lightbox-nav lightbox-next">&rsaquo;</button>
        </div>
    `;
    document.body.appendChild(lightbox);
    
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    // Open lightbox on image click
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentImageIndex = index;
            openLightbox();
        });
    });
    
    function openLightbox() {
        const imageData = images[currentImageIndex];
        lightboxImage.src = imageData.src;
        lightboxImage.alt = imageData.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImage.src = images[currentImageIndex].src;
        lightboxImage.alt = images[currentImageIndex].alt;
    }
    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImage.src = images[currentImageIndex].src;
        lightboxImage.alt = images[currentImageIndex].alt;
    }
    
    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
    });
    
    // === Lazy Loading (already in gallery items) ===
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '100px'
        });
        
        document.querySelectorAll('.gallery-image img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
});

// === Global function for reset filters ===
function resetGalleryFilters() {
    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (allButton) {
        allButton.click();
    }
}
