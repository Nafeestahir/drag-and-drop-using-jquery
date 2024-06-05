$(document).ready(function () {
    let r, g, b, LeftBlock, secindex;

    $("#btn").on("click", function () {
        for (let index = 1; index <= $("#InputVal").val(); index++) {
            r = Math.floor(Math.random(255) * 255);
            g = Math.floor(Math.random(255) * 255);
            b = Math.floor(Math.random(255) * 255);

            LeftBlock = `<div class="list" id="${index}">${index}</div> `;
            $("#left").append($(LeftBlock).css({ background: `rgb(${r},${g},${b})` }))
            secindex = 1;
            $(".list").each(function () {
                $(this).text(secindex++);
            })
            $(`#${index}`).draggable({
                containment: '.maindiv',
            });

        }
    })
});

