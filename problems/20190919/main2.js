
document.getElementById("file").addEventListener("change", function (event) {

    var reader = new FileReader();
    reader.onload = function () {
        var img = new Image();
        img.onload = function () {
            var canvas = document.createElement("canvas");
            var context = canvas.getContext('2d');
            var width = img.width;
            var height = img.height;
            canvas.width = width;
            canvas.height = height;
            context.drawImage(img, 0, 0);

            var srcImg = context.getImageData(0, 0, width, height);
            var dstImg = context.createImageData(width, height);
            var srcData = srcImg.data;
            var dstData = dstImg.data;
            sobelXY(srcData, dstData, width, height);
            context.putImageData(dstImg, 0, 0);

            document.getElementById("output").innerHTML = "<img src='" + canvas.toDataURL() + "' width='" + width / devicePixelRatio + "' height='" + height / devicePixelRatio + "'>";
        }
        img.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}, false);

var sobelXY = function (src, dst, width, height) {
    var weightX = [
        -1, 0, 1,
        -2, 0, 2,
        -1, 0, 1
    ];
    var weightY = [
        1, 2, 1,
        0, 0, 0,
        -1, -2, -1
    ];
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var idx = (x + y * width) * 4;
            var val = [0, 0, 0];
            for (var k = -1; k <= 1; k++) {
                for (var l = -1; l <= 1; l++) {
                    var x = x + l;
                    var y = y + k;
                    if (x < 0 || x >= width || y < 0 || y >= height) {
                        continue;
                    }
                    var idx1 = (x + y * width) * 4;
                    var idx2 = (l + 1) + (k + 1) * 3;
                    var weight = (weightX[idx2] + weightY[idx2]) * 0.5
                    val[0] += weight * src[idx1 + 0];
                    val[1] += weight * src[idx1 + 1];
                    val[2] += weight * src[idx1 + 2];
                }
            }
            dst[idx + 0] = val[0];
            dst[idx + 1] = val[1];
            dst[idx + 2] = val[2];
            dst[idx + 3] = src[idx + 3];
        }
    }
};
