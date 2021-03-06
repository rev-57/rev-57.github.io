function animate_logo() {
  if (window.toggle == 0) {
    window.title.innerText = "> rev-57";
    window.toggle = 1;
  } else {
    window.title.innerText = "> rev-57_";
    window.toggle = 0;
  }
}

function on_page_load() {
  window.toggle = 0;
  window.title = document.getElementById("title");

  setInterval("animate_logo()", 500);
}

function logo_startup() {
  var title = document.getElementById("title");
  var pos = 0;
  var target_string = "rev-57";
  var id = setInterval(frame, 100);
  function frame() {
    if (pos == 0) {
      title.innerText += " r_"
      pos++;
    } else if (pos < target_string.length && pos > 0) {
      title.innerText = title.innerText.slice(0, title.innerText.length-1);
      title.innerText += target_string[pos] + "_";
      pos++;
    } else {
      clearInterval(id);
      on_page_load();
    }
  }
}
