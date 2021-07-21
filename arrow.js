/*//not work in explorer
const add = function(x,y){
    return x+y;
}
*/
const add = (x,y)=>{
    return x+y;
}
/*const add = x,y =>{
    return x+y;
}
//////////////////////error
const add = x=>{
    return x*x;
}
/////////////////no error --valid */
const rolldie = () =>{
    return Math.floor(Math.random()*6)+1
}
/*implicit rerurn------->no return needed--------->but only one line not more than that

const rolldie = () =>(
    Math.floor(Math.random()*6)+1;
)----------------->changes
                                                            <!--or-->
const rolldie = () =>  Math.floor(Math.random()*6)+1
*/