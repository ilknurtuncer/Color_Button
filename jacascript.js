// DOM elemanını seçme( querySelector yöntemi ile <body> elementini seçiyoruz)
const colorButton = document.getElementById('colorButton');
const body = document.querySelector('body');

// event listener ekleme(  addEventListener ile bir tıklama olayını ekliyoruz.)
colorButton1.addEventListener('click', function() {
  // Rastgele renk oluşturma(getRandomColor fonksiyonunu kullanarak rastgele bir renk oluşturuyoruz )
  const randomColor = getRandomColor();

  // Sayfa arka plan rengini değiştirme( <body> elementinin backgroundColor stil özelliğini bu rastgele renk ile değiştiriyoruz.)
  body.style.backgroundColor = randomColor;
  
});
// button nun üzerine gelindiğinde sayfanın rengini değiştiren fonksiyon ekliyoruz
colorButton2.addEventListener('mouseover', function() {
  const randomColor = getRandomColor();

  body.style.backgroundColor = randomColor;
});

// Rastgele renk üreten yardımcı fonksiyon
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}




