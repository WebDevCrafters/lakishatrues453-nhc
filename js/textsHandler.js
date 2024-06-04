
function handleText(data) {
    $(function () {
        console.log("name is ", data.brandName.firstLine)
        $(".first").text(data.brandName.firstLine)
        $(".second").text(data.brandName.secondLine)
    })
}

handleText(textJson)