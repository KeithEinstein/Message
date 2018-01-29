var textArea = document.querySelector("#textArea");
textArea.addEventListener("click", function(e) {
    if (e.keycode === 13) {
        sendButton.click();
    } else {
        activeChannel.typing();
    }
});
