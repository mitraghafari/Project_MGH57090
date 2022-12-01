window.addEventListener("DOMContentLoaded", function(){
    initializeSelect();
    
    document.getElementById("myBttn").addEventListener("click",function(){
        accumulateData();
    });

});



function initializeSelect(){
    var sex =[
        {val:"Mail",text:"M"},
        {val: "Femail", text:"F"},
        {val: "Other", text:"Other"}
    ];

    let select = document.getElementById("gender");
    for(let s of sex){
        let option = document.createElement('option');
        option.text = s.text;
        option.value = s.val;
        select.append(option);
    }

    let formSection = document.getElementById("formSection");

    let section = document.createElement('section');
    section.id = "accumulate";

    formSection.after(section);
}