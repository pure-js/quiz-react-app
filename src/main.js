function loadHTML(myDivId, url) {
  url = url + '.html';
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
      if(xmlhttp.status == 200) {
        document.getElementById(myDivId).innerHTML = xmlhttp.responseText;
        let allScripts = document.getElementById(myDivId).getElementsByTagName('script');
        for (let n = 0; n < allScripts.length; n++) {
          eval(allScripts[n].innerHTML); //run script inside div generally not a good idea but these scripts are anyways intended to be executed.
        }
      } else {
        alert('Error');
      }
    }
  };

  xmlhttp.open('GET', url, true);
  xmlhttp.send();
}

let rand = getRandomIntInclusive(1, 3);

loadHTML('mydiv', rand);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
