const botItem = document.querySelectorAll('button')
const imgItem = document.querySelectorAll('.telefonos-img img')
const scrollContainer = document.querySelector('.telefonos-img')


botItem.forEach(button => {
    button.onclick = function () {
        // Active
        botItem.forEach(button =>{
            button.classList.remove("active");
        });
        button.classList.add("active");

        // Filter
        const value = button.textContent.toLowerCase();
        imgItem.forEach(img => {
            img.style.display = 'none';
            if (value === "all phones" || img.getAttribute('data-filter') === value) {
                img.style.display = 'flex';
            }
        });

        scrollContainer.scrollLeft = 0;
    }
});

scrollContainer.addEventListener('wheel', (evt) =>{
    evt.preventDefault();
    scrollContainer.style.scrollBehavior = 'auto';
    scrollContainer.scrollLeft += evt.deltaY;
});
