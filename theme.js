// ====================================
// POPUP FUNCTIONALITY
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.getElementById('popup-overlay');
    const showPopupBtn = document.getElementById('show-popup-btn');
    const closePopupBtn = document.getElementById('close-popup');
    const categoryButtons = document.querySelectorAll('.category-btn');

    // Show popup
    const showPopup = () => {
        popupOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Hide popup
    const hidePopup = () => {
        popupOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Event Listeners
    showPopupBtn.addEventListener('click', showPopup);
    closePopupBtn.addEventListener('click', hidePopup);

    // Close on overlay click (but not on modal click)
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            hidePopup();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
            hidePopup();
        }
    });

    // Category button handlers
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            console.log(`Category selected: ${category}`);

            // Add visual feedback
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 200);

            // Here you can add your navigation logic
            // For example: window.location.href = `/category/${category}`;

            // For demo purposes, show alert
            alert(`Navigating to ${category.replace('-', ' ').toUpperCase()} category`);
        });
    });

    // Auto-show popup after 2 seconds (optional - for demo)
    setTimeout(() => {
        showPopup();
    }, 1000);
});
