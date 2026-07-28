// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple Form Handling
function handleSubmit(e) {
    e.preventDefault();
    const statusMsg = document.getElementById('formStatus');
    statusMsg.innerText = "درخواست شما با موفقیت ثبت شد! به زودی با شما تماس می‌گیریم.";
    
    // Reset Form
    document.getElementById('contactForm').reset();

    setTimeout(() => {
        statusMsg.innerText = "";
    }, 5000);
}
