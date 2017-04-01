(function () {
    "use strict";

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // Cycle over each .shuffledv HTMLElement
    // Remove all divs within, store in $d
    var $d = $(".mbr-gallery-layout-default > div > div > div").remove();
    // Sort $d randomnly
    $d = shuffleArray($d);
    // Append divs within $d to .shuffledv again
    $d.appendTo(".mbr-gallery-layout-default > div > div");

    $(".mbr-gallery-layout-default > div > div > div").each(function() {
        $(this).children().first().removeAttr("data-toggle");

        var $a=$(this).find("a").first();
        if ($a && $a.text()) {
            $(this).children().first().wrap("<a target='_blank' href='"+$a[0].href+"'></a>");
        }
    });
}());