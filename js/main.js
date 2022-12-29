var api_key = "x3Ip9aCOKp7hWVkDKBWBSOvGeKE1MmrZ";

function searchButtonClicked(){
    $("#photo-container").html(""); // clear the images in the container

    let limit = 20; // limit for how many images will show on the page 
    let search = $("#search-input").val();

    $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}&limit=${limit}`,

        success: (result)=>{
            result.data.forEach(element => {
                // Create the img element and its container
                let imageContainer = document.createElement("div");
                let image = document.createElement("img");
                image.src = element.images.original.url;
                
                // Append the image and its container to the DOM
                imageContainer.appendChild(image)
                $("#photo-container").append(imageContainer);
            }/* end forEach */);
        } //end success
    }) // end ajax
}