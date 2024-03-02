export const functions = {
    titleClickHandler: (e)=>{
        if(e.target.value==="info"){
            scrollX=500;
        }
        else if(e.target.value==="about me"){
            console.log("clicked to 2")
        }
        else if(e.target.value==="projects"){
            console.log("clicked to 3")
        }
        else if(e.target.value==="my approach"){
            console.log("clicked to 4")
        }
    },
}