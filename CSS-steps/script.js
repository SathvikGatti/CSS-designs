let prevBtn = document.getElementById("Prev");
let nextBtn = document.getElementById("Next");
let count = 1;

function exec(flag) {
    if(count==1 && flag == 0){
        prevBtn.style.backgroundColor="#ccc"
    }
    else if(count == 4 && flag == 1){
        nextBtn.style.backgroundColor="#ccc"
    }
    else{
        prevBtn.style.backgroundColor="lightseagreen";
        nextBtn.style.backgroundColor="lightseagreen";
        if(flag)
        {
            count++;
            var con = document.getElementById(count.toString());
            var step =document.getElementById((count*10).toString());
            con.className+=" load";
            con.style.flexGrow="1";
            step.className+=" fill";
        }
        else{
            var con = document.getElementById(count.toString());
            var step =document.getElementById((count*10).toString());
            // con.classList.remove("load");
            con.style.flexGrow="0";
            step.classList.remove("fill");
            count--;
        }
        if(count == 4)  nextBtn.style.backgroundColor="#ccc";
        if(count == 1)  prevBtn.style.backgroundColor="#ccc";
    }
}
