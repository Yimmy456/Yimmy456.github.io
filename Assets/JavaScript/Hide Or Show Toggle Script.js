
function HideOrShowDesc(GroupInput, NumberInput)
{
  var _name = "" + GroupInput + "_Panel_" + NumberInput;

  var _panel = document.getElementById(_name);

  var _descriptionArea = _panel.getElementsByClassName("Description_Area")[0].getElementsByClassName("Text_Container")[0];

  var _headerArea = _panel.getElementsByClassName("Description_Area")[0].getElementsByClassName("Header_Div_L4")[0];

  var _buttonImage  = _panel.getElementsByClassName("Description_Area")[0].getElementsByClassName("Toggle_Button_Div")[0].getElementsByClassName("Button_Container")[0].getElementsByClassName("Toggle_Button_Image")[0];

  if(_descriptionArea.style.display === "block")
  {
    _descriptionArea.style.display = "none";

    _headerArea.style.display = "none";

    ChangeButtonImageInDescription(_name, '1');
  }
  else{
    _descriptionArea.style.display = "block";

    _headerArea.style.display = "block";    

    ChangeButtonImageInDescription(_name, '0');
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

    ChangeButtonImageInDescription(_name, '1');
  }
  else{
    _descriptionArea.style.display = "block";

    _headerArea.style.display = "block";    

    ChangeButtonImageInDescription(_name, '0');
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

    ChangeButtonImageInSlideshow(_name, '1');
  }
  else{
    _slideshowArea.style.display = "block";

    _headerArea.style.display = "block";

    _footerArea.style.display = "block";    

    ChangeButtonImageInSlideshow(_name, '0');
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

    ChangeButtonImageInSlideshow(_name, '1');
  }
  else{
    _slideshowArea.style.display = "block";

    _headerArea.style.display = "block";

    _footerArea.style.display = "block";   

    ChangeButtonImageInSlideshow(_name, '0');
  }
}


function ChangeButtonImageInDescription(_nameInput, _statusInput)
{
  var _panel = document.getElementById(_nameInput).getElementsByClassName("Description_Area")[0].getElementsByClassName("Toggle_Button_Div")[0].getElementsByClassName("Button_Image")[0];

  var _panel2 = document.getElementById(_nameInput).getElementsByClassName("Description_Area")[0].getElementsByClassName("Toggle_Button_Div")[0].getElementsByClassName("Button_Image_Blur")[0];

  if(_statusInput == '1')
  {
    _panel.src = "Assets/images/Made Buttons/Dropdown Buttons/Dropdown Description Button.png";

    _panel2.src = "Assets/images/Made Buttons/Dropdown Buttons/Dropdown Description Button Blur.png";
  }
  else{
    _panel.src = "Assets/images/Made Buttons/Hiding Buttons/Hiding Description Button.png";

    _panel2.src = "Assets/images/Made Buttons/Hiding Buttons/Hiding Button Blur.png";
  }
}

function ChangeButtonImageInSlideshow(_nameInput, _statusInput)
{
  var _panel = document.getElementById(_nameInput).getElementsByClassName("Slideshow")[0].getElementsByClassName("Toggle_Button_Div")[0].getElementsByClassName("Button_Image")[0];

  var _panel2 = document.getElementById(_nameInput).getElementsByClassName("Slideshow")[0].getElementsByClassName("Toggle_Button_Div")[0].getElementsByClassName("Button_Image_Blur")[0];

  if(_statusInput == '1')
  {
    _panel.src = "Assets/images/Made Buttons/Dropdown Buttons/Dropdown Slideshow Button (Teal).png";

    _panel2.src = "Assets/images/Made Buttons/Dropdown Buttons/Dropdown Slideshow Button Blur (Teal).png";
  }
  else{
    _panel.src = "Assets/images/Made Buttons/Hiding Buttons/Hiding Slideshow Button.png";

    _panel2.src = "Assets/images/Made Buttons/Hiding Buttons/Hiding Button Blur.png";
  }
}

function ChangeButtonImageDesc(_groupInput, _indexInput, _BlurInput)
{
  var _name = "" + _groupInput + "_Panel_" + _indexInput;

  var _panel = document.getElementById(_name).getElementsByClassName("Description_Area")[0].getElementsByClassName("Toggle_Button_Div")[0].getElementsByClassName("Button_Image")[0];

  var _descriptionArea =  document.getElementById(_name).getElementsByClassName("Description_Area")[0].getElementsByClassName("Text_Container")[0];

  if(_BlurInput == '1')
  {
    if(_descriptionArea.style.display === "block")
    {
      _panel.src = "Assets/images/Made Buttons/Hiding Buttons/Hiding Description Button Glow.png";
    }
    else{
      _panel.src = "Assets/images/Made Buttons/Dropdown Buttons/Dropdown Description Button Glow.png";
    }
  } 
  else
  {
    if(_descriptionArea.style.display === "block")
    {
      _panel.src = "Assets/images/Made Buttons/Hiding Buttons/Hiding Description Button.png";
    }
    else{
      _panel.src = "Assets/images/Made Buttons/Dropdown Buttons/Dropdown Description Button.png";
    }
  }
}

function ChangeButtonImageSlideshow(_groupInput, _indexInput, _BlurInput)
{
  var _name = "" + _groupInput + "_Panel_" + _indexInput;

  var _panel = document.getElementById(_name).getElementsByClassName("Slideshow")[0].getElementsByClassName("Toggle_Button_Div")[0].getElementsByClassName("Button_Image")[0];

  var _panel2 = document.getElementById(_name).getElementsByClassName("Slideshow")[0].getElementsByClassName("Toggle_Button_Div")[0].getElementsByClassName("Button_Image_Blur")[0];


  var _descriptionArea =  document.getElementById(_name).getElementsByClassName("Slideshow")[0].getElementsByClassName("Upper_Part_2")[0];

  if(_BlurInput == '1')
    {
      if(_descriptionArea.style.display === "block")
      {
        _panel.src = "Assets/images/Made Buttons/Hiding Buttons/Hiding Slideshow Button.png";

        _panel2.src = "Assets/images/Made Buttons/Hiding Buttons/Hiding Button Blur.png";
      }
      else{
        _panel.src = "Assets/images/Made Buttons/Dropdown Buttons/Dropdown Slideshow Button (Teal).png";

        _panel2.src = "Assets/images/Made Buttons/Dropdown Buttons/Dropdown Slideshow Button Blur (Teal).png";
      }
    } 
    else
    {
      if(_descriptionArea.style.display === "block")
      {
        _panel.src = "Assets/images/Made Buttons/Hiding Buttons/Hiding Slideshow Button.png";        

        _panel2.src = "Assets/images/Made Buttons/Hiding Buttons/Hiding Button Blur.png";
      }
      else{
        _panel.src = "Assets/images/Made Buttons/Dropdown Buttons/Dropdown Slideshow Button (Teal).png";

        _panel2.src = "Assets/images/Made Buttons/Dropdown Buttons/Dropdown Slideshow Button Blur (Teal).png";
      }
    }
}
