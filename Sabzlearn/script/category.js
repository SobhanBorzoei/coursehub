// اضافه کردن پشتیبانی JavaScript برای مواقعی که CSS کافی نیست
document.addEventListener('DOMContentLoaded', function() {
    const selection = document.querySelector('.courses--topbar__selection');
    const list = document.querySelector('.courses--topbar__selection-list');
    
    if (selection && list) {
        selection.addEventListener('mouseenter', function() {
            list.style.opacity = '1';
            list.style.visibility = 'visible';
            list.style.transform = 'translateY(0)';
        });
        
        selection.addEventListener('mouseleave', function() {
            list.style.opacity = '0';
            list.style.visibility = 'hidden';
            list.style.transform = 'translateY(10px)';
        });
    }
});