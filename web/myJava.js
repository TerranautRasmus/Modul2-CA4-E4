$(document).ready(function () {
    
    var lastClicked;
    
    $("#svg2 path").click(function () {
        
        $(lastClicked).css("fill", "#c0c0c0");
        lastClicked = $(this).css("fill", "blue");
        
        $.ajax({
            type: "GET",
            url: "Servlet?id=" + $(this).attr("id")
        }).done(function (country) {
            country = JSON.parse(country);
            var name = "Country: " + country[0].name;
            var pop = "Population: " + country[0].population;
            var area = "Area: " + country[0].area;
            var borders = "Borders: " + country[0].borders;

            $(".countryContent #name").html(name);
            $(".countryContent #population").html(pop);
            $(".countryContent #area").html(area);
            $(".countryContent #borders").html(borders);
        }).fail(function () {
            alert("Failed");
        });
    });
});