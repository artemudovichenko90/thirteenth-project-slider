//get images from server
const images = [];
images.push('img/1.jpg');
images.push('img/2.jpg');
images.push('img/3.jpg');
images.push('img/4.jpg');
images.push('img/5.jpg');
images.push('img/6.jpg');
images.push('img/7.jpg');
images.push('img/8.jpg');
images.push('img/9.jpg');
images.push('http://pristor.ru/wp-content/uploads/2018/01/%D0%95%D0%B4%D0%B8%D0%BD%D0%BE%D1%80%D0%BE%D0%B3-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%81%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BD%D1%8B%D0%B5-9.jpg');

//init slider
const slider = new Slider('img-slider');
for (const image of images) {
    slider.addImg(image);
}

//set time
function setTime() {
    const time = document.getElementById('toddler').value
    slider.time = time;//set time to slider
    document.getElementById('time').textContent = time;//set time to text view
}
