var is_cursor_shown = true;

var logo_string = "sendbyte";
var written_letters = 0;
var written_string = "";

// TODO: zrobić wypisywanie napisu

function write_logo(){
    document.getElementById("hero-logo").innerHTML = written_string;


    written_string += logo_string[written_letters];

    console.log(written_letters);

    written_letters += 1;

    if(written_letters == logo_string.length + 1){
        cursor();
    }
    else{
        setTimeout("write_logo()", 150)
    }
}


function cursor(){
    if (is_cursor_shown == true){
        document.getElementById("cursor").style = "display: none";

        is_cursor_shown = false;
    }
    else{
        document.getElementById("cursor").style = "display: inline;";

        is_cursor_shown = true;
    }

    console.log("hello");

    setTimeout("cursor()", 600);
}