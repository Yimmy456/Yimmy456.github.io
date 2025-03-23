var slideIndex = 1;
showDivs(slideIndex, 0);

function plusDivs(n, SGII) {
showDivs(slideIndex += n, SGII);
}

function showDivs(n, SGII)
{
    var i;

    var _name = "Slides_Project_" + (SGII + 1);

    var x = document.getElementsByClassName(_name);

    if (n > x.length) {slideIndex = 1}

    if (n < 1) {slideIndex = x.length}
    
    for (i = 0; i < x.length; i++)
    {
        x[i].style.display = "none";  
    }

    x[slideIndex - 1].style.display = "block";

    var _name2 = "Project_Panel_" + (SGII + 1);

    var _text = x[slideIndex - 1].getElementsByClassName("Slideshow_Description")[0].innerText;

    document.getElementById(_name2).getElementsByClassName("Slideshow_Counter_P")[0].innerText = "" + (slideIndex) + " / " + x.length;

    document.getElementById(_name2).getElementsByClassName("Slideshow_Description_Area")[0].getElementsByClassName("Text_Container")[0].innerText = _text;
}

function SetSubnavToVisible(input)
{
    var element = document.getElementById(input);

    element.style.visibility = "visible";

    var otherElements = document.getElementsByClassName("subnavbar");

    for(var _i = 0; _i < otherElements.length; _i++)
    {
        if(otherElements[_i] != element)
        {
            otherElements[_i].style.visibility = "hidden";
        }
    }
}