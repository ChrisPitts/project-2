var api_key = "x3Ip9aCOKp7hWVkDKBWBSOvGeKE1MmrZ";

function searchButtonClicked(){
    $("#photo-container").html("");
    let limit = 20;
    let search = $("#search-input").val();
    $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}&limit=${limit}`,
        success: (result)=>{
            result.data.forEach(element => {
                // console.log(element);
                let imageContainer = document.createElement("div");
                let image = document.createElement("img");
                image.src = element.images.original.url;
                imageContainer.appendChild(image)
                $("#photo-container").append(imageContainer);
            });
            // console.log(result.data);
        }
    })
}