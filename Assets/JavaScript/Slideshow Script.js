var slideIndex = 1;
showDivs(slideIndex, 'Project_Panel_1');

function plusDivs(n, Container_Name) {
    showDivs(slideIndex += n, Container_Name);
}

function showDivs(n, Container_Name)
{
    var i;

    var x = document.getElementById(Container_Name);

    var y = x.getElementsByClassName("Slideshow")[0];

    var _slides = y.getElementsByClassName("Slides");

    if(n > _slides.length) {slideIndex = 1;}

    if(n < 1) {slideIndex = _slides.length;}

    for(i = 0; i < _slides.length; i++)
    {
        _slides[i].style.display = "none";
    }

    _slides[slideIndex - 1].style.display = "block";

    _slides[slideIndex - 1].getElementsByClassName("Slideshow_Description")[0].style.display = "none";

    var _text = _slides[slideIndex - 1].getElementsByClassName("Slideshow_Description")[0].innerHTML;

    y.getElementsByClassName("Slideshow_Counter_P")[0].innerText = "" + (slideIndex) + " / " + _slides.length;

    y.getElementsByClassName("Slideshow_Description_Area")[0].getElementsByClassName("Text_Container")[0].innerHTML = _text;
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

function ChangeButtonImageOnHoverPnN(_nameInput, _buttonInput, _hoverInput)
{
    var _panel = document.getElementById(_nameInput);

    var _buttonVar

    if(_buttonInput == '-1')
    {
        _buttonVar = _panel.getElementsByClassName("Slideshow")[0].getElementsByClassName("Footer")[0].getElementsByClassName("Previous_Button_Div")[0].getElementsByClassName("Button_Image")[0];

        if(_hoverInput == '1')
        {
            _buttonVar.src = "Assets/images/Made Buttons/Previous Button/Previous Button 2 with Red Glow.png";
        }
        else
        {
            _buttonVar.src = "Assets/images/Made Buttons/Previous Button/Previous Button 2 (899 x 429 px).png";
        }
    }
    else
    {
        _buttonVar = _panel.getElementsByClassName("Slideshow")[0].getElementsByClassName("Footer")[0].getElementsByClassName("Next_Button_Div")[0].getElementsByClassName("Button_Image")[0];

        if(_hoverInput == '1')
        {
            _buttonVar.src = "Assets/images/Made Buttons/Next Button/Next Button 2 with Green Glow.png";
        }
        else
        {
            _buttonVar.src = "Assets/images/Made Buttons/Next Button/Next Button 2 (899 x 429 px).png";
        }
    }
}