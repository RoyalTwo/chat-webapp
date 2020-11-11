$(document).ready(() => {

    $(".ulabel").css("color", "transparent")
    $(".plabel").css("color", "transparent")

    setTimeout(() => {
        $(".logo").css("filter", "opacity(1)")
        $(".container-left").css("filter", "opacity(1)")
        $(".container-right").css("filter", "opacity(1)") 
    }, 3000);

    $(".login").click(() => {
        $(".outer").css("animation", "unloaded ease 1.5s")
        $(".outer").css("animation", "unloaded ease 1.5s")
        $(".logo").css("filter", "opacity(0)")
        $(".container-left").css("filter", "opacity(0)")
        $(".container-right").css("filter", "opacity(0)")
        
    })

    $(".uname").on("input", () => {
        if ($(".uname").val() != ""){
            $(".ulabel").css("color", "#e6e6e6")
        } else {
            $(".ulabel").css("color", "transparent")
        }
    })

    $(".passwd").on("input", () => {
        if ($(".passwd").val() != ""){
            $(".plabel").css("color", "#e6e6e6")
        } else {
            $(".plabel").css("color", "transparent")
        }
    })
})