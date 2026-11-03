// im html grundlegendes design ggf. anlegen und danach mit js erweitern
// nun mehrfach diesen kasten für ein türchen rendern
let colors = ['blue', 'green', 'red', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'cyan', 'magenta', 'teal', 'lime', 'navy', 'olive', 'maroon', 'peach', 'lavender', 'turquoise', 'gold', 'silver', 'indigo'];

const contentRef = document.getElementById("content");

renderAdventCalender();


function renderAdventCalender() {
    for (let index = 1; index < 25; index++) {
        contentRef.innerHTML += `
            <div id="${index}" class="door" onclick="changeColor(${index})">${index}</div>
        `;
    }
}


function changeColor(id) {
    let ref = document.getElementById(id);
    ref.style.backgroundColor = colors[id-1];
}


-----------------------
.door {
    height: 50px;
    width: 50px;
    background-color: rgb(143, 14, 14);
    margin: 4px;
}

#content{
    display: flex;
    flex-wrap: wrap;
}


----------------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adventskalender</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Adventskalender</h1>

    <div id="content"></div>

    <!-- <div class="door">test 1</div> -->
</body>
</html>

















