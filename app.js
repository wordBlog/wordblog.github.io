var editor = document.querySelector(".text-editor");
var html = document.querySelector(".html");
var web = document.querySelector('.web');
var template = document.querySelector('.template');
var reset = document.querySelector('.reset');
var resetBtn = document.querySelector('.reset button');
var webCon = document.querySelector('.frame');
editor.contentWindow.document.designMode = 'on';
editor.contentWindow.document.execCommand("defaultParagraphSeparator", false, "p");
editor.contentDocument.body.addEventListener("input", function () {
    var hey = editor.contentDocument.body.innerHTML.toString();
    hey = hey.split("");
    let hen = hey.indexOf("</");
    if (hen < 0) {
        hey = hey.join("");
        hey = "<p>" + hey + "</p>";
    } else {
        hey = hey.join("");
        let temp = hey.slice(0, hen);
        hey = hey.replace(temp, " ");
        temp = "<p>" + temp + "</p>";
        hey = temp + hey;
    }
    let main = web.contentDocument.getElementsByTagName("MAIN")[0];
    console.log(main)
    html.value = hey;
    main.innerHTML = editor.contentDocument.body.innerHTML;
});
template.addEventListener('input',function(){
    let templated = template.value.split(`<?.?.?.wordBLOG.?.?.?>`)
    let final = templated[0] + templated[1];
    let frameDoc = web.contentDocument;
    frameDoc.write(final);
    reset.style.display = 'flex';
})
resetBtn.addEventListener('click',function(){
    reset.style.display = 'none';
    let tag = document.querySelector('.web');
    tag.remove();
    let newtemplate = document.createElement('iframe')
    newtemplate.className = 'web';
    console.log(newtemplate)
    webCon.appendChild(newtemplate);
    console.log(reset)
    web = newtemplate;
})
function formatTo(command){
    console.log(editor.contentWindow.document)
    editor.contentWindow.document.execCommand(command,false,null)
}