document.addEventListener('DOMContentLoaded', function() {
    var contentElements = document.getElementsByTagName('code');
    for (var i = 0; i < contentElements.length; i++) {
        var contentElem = contentElements[i];
        var content = contentElem.innerHTML;

        var subscriptedContent = content;
        subscriptedContent = subscriptedContent.replace(/₍/g, '<sub>₍</sub>');
        subscriptedContent = subscriptedContent.replace(/₎/g, '<sub>₎</sub>');
        contentElem.innerHTML = subscriptedContent;
    }
});

/*function Run() { 
    var contentElements = document.getElementsByClassName('editable');
    for (var i = 0; i < contentElements.length; i++) {
        var contentElem = contentElements[i];

        var content = contentElem.innerText;

        var subscriptedContent = content;
        subscriptedContent = subscriptedContent.replace(/₍/g, '<sub>₍</sub>');
        subscriptedContent = subscriptedContent.replace(/₎/g, '<sub>₎</sub>');

        contentElem.innerHTML = subscriptedContent;
    }

	document.getElementById("output").style.fontWeight = "bold";
}*/
