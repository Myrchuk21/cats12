// PUBLIC SCRIPT 

// Color Palettes
var allPalettes = [
    ['#F58F82', '#fff', '#3932a5'], //Pink  
    ['#448a9a', '#444', '#e0e0e0'],
    ['#82427b', '#cc84c5', '#e0e0e0'],
    ['#bfbfbf', '#efefef', '#d4726a'],
    ['#9fd067', '#272727', '#e8ece8'],
    ['#FFC107', '#e88c04', '#265c63']
];

// Change skin colors
var btn = document.querySelectorAll('.color-palette span');

for (var i = 0; i < btn.length; i++) {
    // Buttons colors
    btn[i].style.backgroundColor = allPalettes[i][0];
    // Buttons action
    btn[i].addEventListener('click', setSkin);
    // First button
    btn[0].style.border = "2px solid #FFF";

    function setSkin() {
        var child = document.querySelector('#btn-change span');
        var parent = child.parentNode;
        var btnPos = [...child.parentNode.children].indexOf(this);

        var btnNum = btnPos;
        //console.log(btnPos);
        for (var j = 0; j < allPalettes.length; j++) {
            document.documentElement.style.setProperty('--bg', allPalettes[btnNum][0]);
            document.documentElement.style.setProperty('--greyBase', allPalettes[btnNum][1]);
            document.documentElement.style.setProperty('--lightGrey', allPalettes[btnNum][2]);
        }
        for (var d = 0; d < btn.length; d++) {
            btn[d].style.border = "0";
        }
        this.style.border = "2px solid #FFF";
    }
}
