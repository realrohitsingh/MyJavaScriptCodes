function loginCheck() {
    let allHeading = document.querySelectorAll(".heading");
    console.log(allHeading);
    allHeading[0].innerText = "First Heading Changed"
    allHeading[1].innerText = "Second Heading Changed"
    allHeading[2].innerText = "Third Heading Changed"
    allHeading.forEach((element,index)=>{
        element.style.color = "blue"
    });
    console.log(allHeading.length);

}