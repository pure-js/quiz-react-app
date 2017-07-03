function loadHTML(myDivId, url) {
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = () => {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      document.getElementById(myDivId).innerHTML = xmlhttp.responseText;

      let allScripts = document.getElementById(myDivId).getElementsByTagName('script');
      for (let n = 0; n < allScripts.length; n++) {
        eval(allScripts[n].innerHTML); //run script inside div generally not a good idea but these scripts are anyways intended to be executed.
      }
    }
  };

  xmlhttp.open('GET', url, true);
  xmlhttp.send();
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let rand = getRandomIntInclusive(4, 13);

loadHTML('mydiv', rand);
