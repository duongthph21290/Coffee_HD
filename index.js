
var img = ['img/banner/banner3.jpg', 'img/banner/banner2.jpg', 'img/banner/banner4.jpg'];
var index = 0;
function back() {
    if (index == 0) {
        index = img.length;
    }
    index = index - 1;
    document.getElementById('anh').src = img[index];
    clearInterval(t);

}
function next() {
    index++;
    if (index == img.length) {
        index = 0
    }

    document.getElementById('anh').src = img[index];
    clearInterval(t);
}
tudongchay = function () {
    index++;
    if (index == img.length) {
        index = 0
    }

    document.getElementById('anh').src = img[index];

}
t = setInterval(tudongchay, 4000)


