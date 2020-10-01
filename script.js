const myColors = [
    {
        motto:'rose red',
        name:'red'
    },
    {
        motto:'pink panter',
        name:'pink'
    },
    {
        motto:'sun yellow',
        name:'yellow'
    },
    {
        motto:'deep purple',
        name:'green'
    }
];

const labelDiv = document.querySelector("#colorLabel");
const mottoDiv = document.querySelector("#colorDesc");
const userInp = document.querySelector("input");

document.querySelector("#randomColorButton").addEventListener('click',changeColor);

document.querySelector("#setColorButton").addEventListener('click',setColor);

function changeColor() {
    const randomIndex = Math.floor(Math.random() * myColors.length)
    document.querySelector("body").style.backgroundColor = myColors[randomIndex].name

    labelDiv.textContent = myColors[randomIndex].name.toUpperCase()
    mottoDiv.textContent = myColors[randomIndex].motto.toUpperCase()

}

function setColor() {


    if (userInp.value.includes("#")) {
        document.querySelector("body").style.backgroundColor = userInp.value;
        const newColorObject = {
            motto: userInp.value,
            name: userInp.value
        };
        document.querySelector("#colorLabel").textContent = newColorObject.name;
        document.querySelector("#colorDesc").textContent = newColorObject.motto;

        myColors.push(newColorObject);


    }else if (userInp.value == "" || isColor(userInp.value.split(":")[0]) == false) {
        document.querySelector("#colorLabel").innerHTML = "Please enter a valid color";
        document.querySelector("#colorDesc").textContent = "";
    } 
    else {

        const colorData = userInp.value.split(":");

        const newColorObject = {
            motto: colorData[1],
            name: colorData[0]
        };

        if (myColors.findIndex((myColor) => myColor.name === newColorObject.name) === -1) {
            document.querySelector("body").style.backgroundColor = newColorObject.name;
            document.querySelector("#colorLabel").textContent = newColorObject.name;
            document.querySelector("#colorDesc").textContent = newColorObject.motto;

            myColors.push(newColorObject);
            
        }else {
            alert('This color has been already added!!!')
        }
    }
    userInp.value = ""
    userInp.focus();
}

function isColor(strColor) {
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
}