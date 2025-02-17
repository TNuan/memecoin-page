document.addEventListener("DOMContentLoaded", function () {
    const marqueeContainer = document.querySelector(".marquee-container");
    const marqueeContent = document.querySelector(".marquee-content");
    const image = marqueeContent.querySelector("img");

    if (marqueeContainer && image) {
        const containerWidth = marqueeContainer.offsetWidth;
        let totalWidth = image.offsetWidth;

        // Nhân bản hình ảnh cho đến khi đủ chiều rộng container
        while (totalWidth < containerWidth * 2) {
            const clone = image.cloneNode(true);
            marqueeContent.appendChild(clone);
            totalWidth += image.offsetWidth;
        }
    }
});
