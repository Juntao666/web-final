const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function startAnimation() {
    var elem = document.getElementById("animate-box");
    elem.style.top = '350px';
    elem.style.left = '350px';
}

function showMore(location_id) {
    var text_location = document.getElementById(location_id);
    if (text_location.style.display==="none") {
        text_location.style.display="block";
    } else {
        text_location.style.display="none";
    }
}