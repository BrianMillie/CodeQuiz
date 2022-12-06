Output = JSON.parse(localStorage.getItem('Output'));
item = [];
for (var i = 1; i < 2; i++) {
    console.log(Output)
    document.createElement('li');
    item[i].id = ('list');
    item[i].className += 'li';
    document.getElementById('highscores').appendChild(item[i]);
    item[i].innerText = 'anything';
}
console.log(i)