function loadHTML(myDivId, url) {
  let htmlUrl = url + '.html';
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
      if(xmlhttp.status == 200) {
        document.getElementById(myDivId).innerHTML = xmlhttp.responseText;
        var allScripts = document.getElementById(myDivId).getElementsByTagName('script');
        for (let n = 0; n < allScripts.length; n++) {
          eval(allScripts[n].innerHTML); //run script inside div generally not a good idea but these scripts are anyways intended to be executed.
        }
      } else {
        alert('Error');
      }
    }
  }

  xmlhttp.open('GET', htmlUrl, true);
  xmlhttp.send();
}

loadHTML('mydiv', '1');
