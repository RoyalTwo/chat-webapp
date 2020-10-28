$(document).ready(function() {

    uname = prompt("username")

    function notaFunCTIOn(){
        $('.messages').append('<div class="msgwrapper"><div class="outMessage"><span class="content">' + $(".msgBox").val() + '</span></div></div>');
        socket.emit("sendMessage", {
            username: uname,
            message: $(".msgBox").val()
        });

        $(".msgBox").val("")

        $(".messages").scrollTop($(".messages").prop("scrollHeight"));
    }

    socket.on('recieveMessage', (data) => {
        console.log
        if (data.username == uname) return;
        $('.messages').append('<div class="msgwrapper"><div class="incMessage"><span class="content">' + data.message + '</span></div></div>');
    });

    $(".sendBtn").click("", (err) => {

        notaFunCTIOn()



        //
    });

    $(".msgBox").keypress((e) => {
        if (e.which == 13 ) {
            domsOeStuff()
        }
    })    

}); 
