document.getElementById("addButton").addEventListener("click", function() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    var image = document.getElementById("image").files[0];
    var video = document.getElementById("video").value;

    document.getElementById("previewTitle").textContent = title;
    document.getElementById("previewContent").textContent = content;

    if (image) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("previewImage").src = e.target.result;
        }
        reader.readAsDataURL(image);
    }

    if (video) {
        document.getElementById("previewVideo").src = video;
    }
});
