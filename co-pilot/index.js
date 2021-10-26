// find all images without alternate text
// and give them a red border
function process() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        var img = images[i];
        if (img.alt == "") {
            img.style.border = "1px solid red";
        }
    };
}