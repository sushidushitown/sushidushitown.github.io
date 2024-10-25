function toggleImage(imgElement) {
    console.log(imgElement.src);
    console.log(imgElement.dataset.newSrc);
    const temp = imgElement.src;
    imgElement.src = imgElement.dataset.newSrc;
    imgElement.dataset.newSrc = temp;
}
