function createCanvas(image, canvas, color){

    // create a new canvas element
    //var myCanvas = document.createElement("canvas");
    var myCanvasContext = canvas.getContext("2d");


    var imgWidth=image.width;
    var imgHeight=image.height;

    // set the width and height to the same as the image
    canvas.width= imgWidth;
    canvas.height = imgHeight;

    // draw the image
    myCanvasContext.drawImage(image,0,0);

    // get all the image data into an array
    if(imgHeight === 0 || imgWidth === 0)
        return
        
    var imageData = myCanvasContext.getImageData(0,0, imgWidth, imgHeight);


    if(color !== undefined)
        for (let j=0; j<imageData.width; j++){
            for (let i=0; i<imageData.height; i++){
                let index=(i*4)*imageData.width+(j*4);
                let pixel = [imageData.data[index], imageData.data[index+1], imageData.data[index+2], imageData.data[index+3]];
                let fade = 0.8;
                imageData.data[index] = faded(imageData.data[index], color[1], fade);
                imageData.data[index+1] = faded(imageData.data[index+1], color[2], fade);
                imageData.data[index+2] = faded(imageData.data[index+2], color[3], fade);
                //imageData.data[index+3] = color[0];
            }
        }

     // put the image data back into the canvas
     myCanvasContext.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
 
  }
  
function faded(background, foreground, opacity){
    return (background*(-opacity+1)+foreground*opacity);
}