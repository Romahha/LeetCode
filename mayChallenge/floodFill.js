//Flood Fill
//An image is represented by a 2-D array of integers,
//each integer representing the pixel value of the image (from 0 to 65535).

//Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill,
// and a pixel value newColor, "flood fill" the image.

//To perform a "flood fill", consider the starting pixel,
//plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel,
//plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel),
//and so on. Replace the color of all of the aforementioned pixels with the newColor.

//At the end, return the modified image.

/*
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
*/

//Runtime: 76 ms
//Memory Usage: 36.4 MB

var floodFill = function(image, sr, sc, newColor) {
    const currentColor = image[sr][sc];
    if(currentColor == newColor) {
        return image;
    }

    const fillColor = (row = sr, col = sc) => {
        if (row < 0 || row >= image.length
            || col < 0 || col >= image[0].length
            || image[row][col] != currentColor ) {
            return false;
        }
        image[row][col] = newColor;
        fillColor(row+1, col);
        fillColor(row-1, col);
        fillColor(row, col+1);
        fillColor(row, col-1);
    }

    fillColor();
    return image;
};
