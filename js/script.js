function sortPhotos() {
    let container = document.getElementById("photo-container");
    let photos = Array.from(container.getElementsByTagName("img"));

    photos.sort((a, b) => {
        let timeA = new Date(a.getAttribute("data-time"));
        let timeB = new Date(b.getAttribute("data-time"));
        return timeB - timeA;  // 降序排列（最新的照片在前）
    });

    container.innerHTML = "";
    photos.forEach(photo => container.appendChild(photo));
}
