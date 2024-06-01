const chartImgElem = document.getElementById('chart');
const selectElem = document.getElementById('select');
document.getElementById('submit').onclick = function() {
  chartImgElem.src = './chart_images/' + selectElem.value.text + '.csv.png';
};