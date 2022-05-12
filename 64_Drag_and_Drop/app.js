console.log("This is tutorial 64");
//DRAG AND DROP

let imgBox = document.querySelector(".imgBox");
let whiteBoxes = document.getElementsByClassName("whiteBox");

//EVENT LISTENER FOR DRAGABLE ELEMENT IMGBOX
imgBox.addEventListener('dragstart', (e) => {
    console.log("dragstart has been started");
    e.target.className += " hold";

    setTimeout(() => {
        e.target.className = "hide";
    }, 0);
})
imgBox.addEventListener('dragend', (e) => {
    console.log("dragend has been started");
    e.target.className = "imgBox"
})





for (let whiteBox of whiteBoxes) {
    whiteBox.addEventListener("dragover", (e) => {
        console.log("dragover method is trigerd");
        e.preventDefault();

    })
    whiteBox.addEventListener("dragenter", (e) => {
        console.log("dragenter method is trigerd");
        e.target.className += " dashed";


    })
    whiteBox.addEventListener("dragleave", (e) => {
        console.log("dragleave method is trigerd");
        e.target.className = "whiteBox";


    })
    whiteBox.addEventListener("drop", (e) => {
        console.log("drop method is trigerd");
        e.target.append(imgBox);


    })
}