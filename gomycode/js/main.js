// document.getElementById(b).addEventListener(click,f1);
// function f1 ()
// {
//     var a = documet.getElementById(texte);
//     a.style.

// }
function bold(){
    document.getElementById ("texte").style.fontWeight="bold";
}
function italic() {
    document.getElementById("texte").style.fontStyle="italic";
}
function underline (){
    document.getElementById("texte").style.textDecoration="underline";
    
}
function Size(){
    document.getElementById("texte").style.fontSize=document.getElementById("s").value;


}
function family(){
    document.getElementById("texte").style.fontFamily=document.getElementById("k").value;


}