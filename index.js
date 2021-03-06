window.onload = init;

//Function called after page is loaded
//1. Grabs all elements with img tag
//2. Iterates through img tags at [i]
//3. assigns on click property to them all
function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i ++) {
        //images[i].onclick = showAnswer;
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
    }
}

//Event handler for on.click of images
//1.Parameter is the image clicked
//2.Images is what was clicked
//3.name is the id of the image clicked
//4.name is images and the image id plus jpeg
//5.set image.src to name var
//6.Call reblur function in 2 secs with the eventObj.target or image
function showAnswer(eventObj) {
    var image = eventObj.target;
    
    var name = image.id;
    name = "images/" + name + ".jpg";
    image.src = name;

    // setTimeout(reblur, 2000, image);
}


//Function to reblur images
//1.Assigns name to image id
//2.Assigns name to image id + other strings
//3.Assigns img.src to new name
function reblur(/*image*/eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = "images/" + name + "blur.jpg";
    image.src = name;
}