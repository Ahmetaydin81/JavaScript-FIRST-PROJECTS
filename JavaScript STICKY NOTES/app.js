var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];

var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");

var i = 0;

xIcon.addEventListener("click",function(){
    typeNote();
})

checkIcon.addEventListener("click",function(){
    createNote();
})
function typeNote(){
    if(container3.style.display == "none"){
        container3.style.display="block";
    }
    else{
        container3.style.display="none"
    }
}

function createNote(){
    var noteText = document.getElementById("note-text").value;
    var node0 = document.createElement("div");

    var node1=document.createElement("h1");

    node1.innerHTML=noteText;

    node1.setAttribute("style","width:250px;height:220px;font-size:25px; padding:25px; margin-top:10px; overflow:hidden; border-radius:15px; cursor:pointer;");

    node1.style.margin = margin();
    node1.style.background=color();

    node0.appendChild(node1);

    container2.insertAdjacentElement("beforeend",node0);

     
    node0.addEventListener("mouseenter",function(){
        node0.style.transform="scale(1.1)";

    })
    node0.addEventListener("mouseleave",function(){
        node0.style.transform="scale(1)";
    })
    node0.addEventListener("dblclick",function(){
        node0.remove();
    })
    document.getElementById("note-text").value='';

}
function margin(){
    var random_margin = ["12px","12px","12px","12px","12px","12px"];

    return random_margin[Math.floor(Math.random()*random_margin.length)];
}

function color(){
    var random_color = ["salmon","skyblue","#6F77E6","#81EE41","#2E58BD","#596F62","#09B761","#98627F","#FEF171","#50ADDB","#728196","#A3293C","#C697DE","#D47C5B","#B77AED","#E33A69","#FDA691","salmon","skyblue","#6F77E6","#81EE41","#2E58BD","#596F62","#09B761","#98627F","#FEF171","#50ADDB","#728196","#A3293C","#C697DE","#D47C5B","#B77AED","#E33A69","#FDA691","salmon","skyblue","#6F77E6","#81EE41","#2E58BD","#596F62","#09B761","#98627F","#FEF171","#50ADDB","#728196","#A3293C","#C697DE","#D47C5B","#B77AED","#E33A69","#FDA691"];

    if(i> random_color.lenght - 1){
        i = 0;
    }
    return random_color[i++];
}