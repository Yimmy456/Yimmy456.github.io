
function HideOrShowDesc(GroupInput, NumberInput)
{
  var _name = "" + GroupInput + "_Panel_" + NumberInput;

  var _panel = document.getElementById(_name);

  var _descriptionArea = _panel.getElementsByClassName("Description_Area")[0].getElementsByClassName("Text_Container")[0];

  var _headerArea = _panel.getElementsByClassName("Description_Area")[0].getElementsByClassName("Header_Div_L4")[0];

  if(_descriptionArea.style.display === "block")
  {
    _descriptionArea.style.display = "none";

    _headerArea.style.display = "none";
  }
  else{
    _descriptionArea.style.display = "block";

    _headerArea.style.display = "block";
  }
}


function HideOrShowDesc2(GroupInput, NumberInput, ShowBooleanInput)
{
  var _name = "" + GroupInput + "_Panel_" + NumberInput;

  var _panel = document.getElementById(_name);

  var _descriptionArea = _panel.getElementsByClassName("Description_Area")[0].getElementsByClassName("Text_Container")[0];

  var _headerArea = _panel.getElementsByClassName("Description_Area")[0].getElementsByClassName("Header_Div_L4")[0];

  if(ShowBooleanInput == '0')
  {
    _descriptionArea.style.display = "none";

    _headerArea.style.display = "none";
  }
  else{
    _descriptionArea.style.display = "block";

    _headerArea.style.display = "block";
  }
}

function HideOrShowSlideshow(GroupInput, NumberInput)
{
  var _name = "" + GroupInput + "_Panel_" + NumberInput;

  var _panel = document.getElementById(_name);

  var _slideshowArea = _panel.getElementsByClassName("Slideshow")[0].getElementsByClassName("Upper_Part_2")[0];

  var _headerArea = _panel.getElementsByClassName("Slideshow")[0].getElementsByClassName("Header_Div_L4")[0];

  var _footerArea = _panel.getElementsByClassName("Slideshow")[0].getElementsByClassName("Footer")[0];

  if(_slideshowArea.style.display === "block")
  {
    _slideshowArea.style.display = "none";

    _headerArea.style.display = "none";

    _footerArea.style.display = "none";
  }
  else{
    _slideshowArea.style.display = "block";

    _headerArea.style.display = "block";

    _footerArea.style.display = "block";
  }
}

function HideOrShowSlideshow2(GroupInput, NumberInput, ShowBooleanInput)
{
  var _name = "" + GroupInput + "_Panel_" + NumberInput;

  var _panel = document.getElementById(_name);

  var _slideshowArea = _panel.getElementsByClassName("Slideshow")[0].getElementsByClassName("Upper_Part_2")[0];

  var _headerArea = _panel.getElementsByClassName("Slideshow")[0].getElementsByClassName("Header_Div_L4")[0];

  var _footerArea = _panel.getElementsByClassName("Slideshow")[0].getElementsByClassName("Footer")[0];

  if(ShowBooleanInput == '0')
  {
    _slideshowArea.style.display = "none";

    _headerArea.style.display = "none";

    _footerArea.style.display = "none";
  }
  else{
    _slideshowArea.style.display = "block";

    _headerArea.style.display = "block";

    _footerArea.style.display = "block";
  }
}
