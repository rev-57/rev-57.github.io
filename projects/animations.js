function animate_logo() {
  if (window.toggle == 0) {
    window.title.innerText = "> my_projects";
    window.toggle = 1;
  } else {
    window.title.innerText = "> my_projects_";
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
  var target_string = "my_projects";
  var id = setInterval(frame, 100);
  function frame() {
    if (pos == 0) {
      title.innerText += " m" + "_";
      pos++;
    }
    if (pos < target_string.length && pos > 0) {
      title.innerText = title.innerText.slice(0, title.innerText.length-1);
      title.innerText += target_string[pos] + "_";
      pos++;
    } else {
      clearInterval(id);
      on_page_load();
    }
  }
}
