"use strict";
function gen(input) {
    if (!input)
        throw Error("Input the text!");
    return input.replace(/(a|i|u|o)/gi, "e");
}
;
/*
* Gabut Project
*/ 
