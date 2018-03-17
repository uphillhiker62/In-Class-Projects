

$(".searchBox").keyup(function(e) {

    let incString = $(this).val();


    $(".recipes span").each(function(i) {

        let patt = new RegExp(incString);
        let result = patt.search($(this).html());
        console.log(result);
    });

});

