function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6S0LgGtS0lV":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById("bgSound");
audio.src ="audio.mp3"
audio.load();
audio.play();

}

