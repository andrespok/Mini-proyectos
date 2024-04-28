const downloadLink = document.querySelectorAll('[data-download]');

downloadLink.forEach (button => {
    const id = button.dataset.download;
    const img = document.getElementById(id);
    const a = document.createElement('a');

    a.href = img.src;
    a.download = "";
    a.style.display = "none";

    button.addEventListener('click', () => {
        // document.body.appendChild(a);
        a.click();
        // document.body.removeChild(a)
    })
});