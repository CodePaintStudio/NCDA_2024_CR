 function init(path) {
  //load css in js
  window.onload = () => {
    var headTag = document.getElementsByTagName("head")[0];
    const linkforCSSfile = document.createElement("link");
    linkforCSSfile.href = path;
    linkforCSSfile.rel = "stylesheet";
    headTag.appendChild(linkforCSSfile);
    document.body.appendChild(headTag);
  };
};
