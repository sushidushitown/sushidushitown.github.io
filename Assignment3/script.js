function toggleImage(imgElement) {
    const currentImage = document.getElementById("two-pac");


    
    if (currentImage.src.includes(imgElement.src)) {
       
        currentImage.src = imgElement.dataset.newSrc; 
    } else {
        
        currentImage.src = imgElement.src; 
    }
}
function toggleImage(imgElement) {
    const currentImage = document.getElementById("snoop-dog");


    
    if (currentImage.src.includes(imgElement.src)) {
       
        currentImage.src = imgElement.dataset.newSrc; 
    } else {
        
        currentImage.src = imgElement.src; 
    }
}
