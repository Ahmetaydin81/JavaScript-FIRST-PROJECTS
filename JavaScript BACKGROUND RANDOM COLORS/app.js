let index = 0;

function randomColors(){
    let colors = ["aqua","royalblue","yellowgreen","rosybrown","indianred" ,"orange","orangered"];

    document.getElementsByTagName("div")[0].
    style.background = colors[index++];
    
    if(index > colors.length - 1)
    index = 0;
}