var remainder = 0;
var DaObject = createObject();
var lastPrint = [0, 0];
var lastShape = DaObject.type[DaObject.imgNr];
var sqW = 24;
var moveLeft = true;
var moveRight = true;
var tetro_j= ['tetro_j.png', 'tetro_j1.png', 'tetro_j2.png', 'tetro_j3.png'];
    var tetro_i = ['tetro_i.png', 'tetro_i1.png'];
    var tetro_l = ["tetro_l.png", "tetro_l1.png", "tetro_l2.png", "tetro_l3.png"]
    var tetro_o = ["tetro_o.png"];
    var tetro_s = ["tetro_s.png", "tetro_s1.png"];
    var tetro_t = ["tetro_t.png", "tetro_t1.png", "tetro_t2.png", "tetro_t2.png"];
    var tetro_z = ["tetro_z.png", "tetro_z1.png"];

function createObject(){
    var tetro_j= ['tetro_j.png', 'tetro_j1.png', 'tetro_j2.png', 'tetro_j3.png'];
    var tetro_i = ['tetro_i.png', 'tetro_i1.png'];
    var tetro_l = ["tetro_l.png", "tetro_l1.png", "tetro_l2.png", "tetro_l3.png"]
    var tetro_o = ["tetro_o.png"];
    var tetro_s = ["tetro_s.png", "tetro_s1.png"];
    var tetro_t = ["tetro_t.png", "tetro_t1.png", "tetro_t2.png", "tetro_t3.png"];
    var tetro_z = ["tetro_z.png", "tetro_z1.png"];
    var types =[tetro_j, tetro_i, tetro_l, tetro_o, tetro_s, tetro_t, tetro_z];
    //types = [tetro_j, tetro_i, tetro_o, tetro_z];
    var pickOne = Math.floor(Math.random()*7);
    
    var img = new Image();   // Create new img element
    var type = types[pickOne];
    img.src = type[0];
    var newObject = {
        xPos: canvas.width/2,
        yPos: 0,
        img: img,
        imgNr:0,
        imgRotations: types[pickOne].length,
        type: types[pickOne]
    }
    return newObject;
    }

function clear(x, y){
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    ctx.fillStyle="#FFFFFF";
    var Drray = CheckTypeX(lastShape, x, y);
    for(var i = 0; i<Drray.length; i++){
        ctx.fillRect(Drray[i][0], Drray[i][1], sqW, sqW);
    }
}
function drawTetris(x, y, img){

    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");

    clear(lastPrint[0], lastPrint[1]);
    ctx.drawImage(img,x,y);
    lastPrint[0] = x;
    lastPrint[1] = y;
    lastShape = DaObject.type[DaObject.imgNr];
}
function clearScreen(){
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function gravityTest(object){
    if(object.yPos+object.img.height<canvas.height){
        object.yPos+=12;
        if(object.yPos+object.img.height>canvas.height)
        remainder = object.yPos+object.img.height % canvas.height;
        object.Ypos =  object.yPos-remainder;
        drawTetris(object.xPos, object.yPos, object.img);
        }else{
        return "done";
        }
}

function storeKey(e){
    rotate(DaObject,e.keyCode);
}

function rotate(object, keyCode){
    event.preventDefault()
    if(keyCode=='38')
    object.imgNr =  (object.imgNr+1) % object.imgRotations;
    if(keyCode=='40'){
        object.imgNr--;
        if(object.imgNr<0)
        object.imgNr = object.imgRotations-1;
    }
    if(keyCode=='37' && moveLeft)
        if(object.xPos>0){
        object.xPos-=24;
        moveRight = true;
        }
    if(keyCode=='39'&& moveRight)
       if(object.xPos+object.img.width<canvas.width){
       object.xPos+=24;
        moveLeft = true;
       }

    object.img.src = object.type[object.imgNr];
}


// alert(DaObject.type[DaObject.imgNr]);
setInterval(()=>{
    //clearScreen();
    gameState();
    
    }, 100);

    var ObjectArray = new Array();
    var CoordinateArray = new Array();
function gameState(){                                                                    //GAMESTATE
                                                                    /********************GAMESTATE *******************/
    if(gravityTest(DaObject) === "done"){
        CoordinateArray.push(CheckType(DaObject));
        ObjectArray.push(DaObject);
    DaObject = createObject();
    moveRight= true;
        moveLeft= true;
        lastPrint = [0,0];
        lastShape = DaObject.type[DaObject.imgNr];

    }
   // for(var i = 0; i<ObjectArray.length; i++){
     //   drawTetris(ObjectArray[i].xPos, ObjectArray[i].yPos, ObjectArray[i].img);
    //}
    var t0 = performance.now();
    
     for(var i = 0; i<ObjectArray.length; i++){
        if(CompareArray(CheckType(DaObject),CoordinateArray[i])){
            moveCanvas(DaObject.yPos+DaObject.img.height);
            CoordinateArray.push(CheckType(DaObject));
            ObjectArray.push(DaObject);
    DaObject = createObject();
    moveRight= true;
        moveLeft= true;

        lastPrint = [0,0];
        lastShape = DaObject.type[DaObject.imgNr];
        
        break;
        }

    }
    var t1 = performance.now();
    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
}

function Score(Array){

    var ArrayLast = new Array();
    for(var i = 0; i<Array.length; i++){
     for(var k = 0; k<Array[k].length; k++){
        Array[i]
     }
    }
}


function CompareArray(First,Second){
    if (typeof First === "undefined"|| typeof Second === "undefined") {
        alert("something is undefined");
    }
    var Coordinates = new Array();
    
        
    
    for(var i= 0; i<First.length; i++){
        for(var k= 0; k<Second.length; k++){
            
           if(First[i] == null || Second[k] == null){
               
               alert(First);
               alert(Second);
           }
        if(First[i][0]==Second[k][0]&& First[i][1]==Second[k][1]){
            var Coordinate = [First[i][0], First[i][1]];
            Coordinates.push(Coordinate);
            if(First[i][0]>DaObject.xPos)
            moveRight= false;
            if(First[i][0]<=DaObject.xPos)
            moveLeft= false;
            
            }
        }
    }
    for(var i = 0; i<Coordinates.length; i++){
        for(var k = 0; k<Coordinates.length; k++){
            if(i!=k){
        if(Coordinates[i][1] == Coordinates[k][1])
        return true;
            }
        }
    }   
return false;
}


function moveCanvas(y){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var imgData = ctx.getImageData(0, 0, canvas.width, y);
    ctx.putImageData(imgData, 0, 24*2);
}


function CheckType(One){
    var array;
        if(One.type[One.imgNr]=="tetro_j.png")
        array = tetroj(One.xPos, One.Ypos);
        if(One.type[One.imgNr]=="tetro_j1.png")
        array = tetroj1(One.xPos, One.Ypos);
        if(One.type[One.imgNr]=="tetro_j2.png")
        array = tetroj2(One.xPos, One.Ypos);
        if(One.type[One.imgNr]=="tetro_j3.png")    
        array = tetroj3(One.xPos, One.Ypos);
    
        if(One.type[One.imgNr]=="tetro_i.png")
        array = tetroi(One.xPos, One.Ypos);
        if(One.type[One.imgNr]=="tetro_i1.png")
        array = tetroi1(One.xPos, One.Ypos);
        
        if(One.type[One.imgNr]=="tetro_l.png")
        array = tetrol(One.xPos, One.Ypos);
        if(One.type[One.imgNr]=="tetro_l1.png")
        array = tetrol1(One.xPos, One.Ypos);
        if(One.type[One.imgNr]=="tetro_l2.png")
        array = tetrol2(One.xPos, One.Ypos);
        if(One.type[One.imgNr]=="tetro_l3.png")
        array = tetrol3(One.xPos, One.Ypos);
        
        if(One.type[One.imgNr]=="tetro_o.png")
        array = tetroo(One.xPos, One.Ypos);
        
        if(One.type[One.imgNr]=="tetro_s.png")
        array = tetros(One.xPos, One.Ypos);
        if(One.type[One.imgNr]=="tetro_s1.png")
        array = tetros1(One.xPos, One.Ypos);
    
        if(One.type[One.imgNr]=="tetro_t.png")
        array = tetrot(One.xPos, One.Ypos);
        if(One.type[One.imgNr]=="tetro_t1.png")
        array = tetrot1(One.xPos, One.Ypos);
        if(One.type[One.imgNr]=="tetro_t2.png")
        array = tetrot2(One.xPos, One.Ypos);
        if(One.type[One.imgNr]=="tetro_t3.png")
        array = tetrot3(One.xPos, One.Ypos);
    
        if(One.type[One.imgNr]=="tetro_z.png")
        array = tetroz(One.xPos, One.Ypos);
        if(One.type[One.imgNr]=="tetro_z1.png")
        array = tetroz1(One.xPos, One.Ypos);
        return array;    
    }
    function CheckTypeX(One, x, y){
        var array;
            if(One =="tetro_j.png")
            array = Xtetroj(x, y);
            if(One=="tetro_j1.png")
            array = Xtetroj1(x, y);
            if(One=="tetro_j2.png")
            array = Xtetroj2(x, y);
            if(One=="tetro_j3.png")    
            array = Xtetroj3(x, y);
        
            if(One=="tetro_i.png")
            array = Xtetroi(x, y);
            if(One=="tetro_i1.png")
            array = Xtetroi1(x, y);
            
            if(One=="tetro_l.png")
            array = Xtetrol(x, y);
            if(One=="tetro_l1.png")
            array = Xtetrol1(x, y);
            if(One=="tetro_l2.png")
            array = Xtetrol2(x, y);
            if(One=="tetro_l3.png")
            array = Xtetrol3(x, y);
            
            if(One=="tetro_o.png")
            array = Xtetroo(x, y);
            
            if(One=="tetro_s.png")
            array = Xtetros(x, y);
            if(One=="tetro_s1.png")
            array = Xtetros1(x, y);
        
            if(One=="tetro_t.png")
            array = Xtetrot(x, y);
            if(One=="tetro_t1.png")
            array = Xtetrot1(x, y);
            if(One=="tetro_t2.png")
            array = Xtetrot2(x, y);
            if(One=="tetro_t3.png")
            array = Xtetrot3(x, y);
        
            if(One=="tetro_z.png")
            array = Xtetroz(x, y);
            if(One=="tetro_z1.png")
            array = Xtetroz1(x, y);
            return array;    
        }

function tetroj(x,y){
    var Spaces = [[x,y],[x+24, y],[x, y+24],[x+24, y+24], [x, y+24*2], [x+24, y+24*2], [x+24*2, y+24], [x+24*2, y+24*2], [x+24*3, y+24], [x+24*3, y+24*2]];
    return Spaces;
}

function tetroj1(x, y){
    var Spaces = [[x+24,y],[x+24*2, y],[x+24, y+24],[x+24*2, y+24], [x+24, y+24*2], [x+24*2, y+24*2], [x+24, y+24*3], [x+24*2, y+24*3], [x, y+24*2], [x, y+24*3] ];
    return Spaces;
}

function tetroj2(x, y){
    var Spaces = [[x,y],[x, y+24],[x+24, y],[x+24, y+24], [x+24*2, y], [x+24*2, y+24], [x+24*3, y], [x+24*3, y+24], [x+24*2, y+24*2], [x+24*3, y+24*2]];
    return Spaces;
}

function tetroj3(x, y){
    var Spaces = [[x,y],[x+24, y],[x+24*2, y],[x, y+24], [x+24, y+24], [x+24*2, y+24], [x, y+24*2], [x+24, y+24*2], [x, y+24*3], [x+24, y+24*3]];
    return Spaces;
}

function tetroi(x,y){
    var Spaces = [[x,y],[x+24,y],[x,y+24],[x+24,y+24],[x,y+24*2],[x+24,y*2],[x,y+24*3],[x+24,y+24*3],[x,y+24*4],[x+24,y+24*4]];
    return Spaces;
}

function tetroi1(x,y){
    var Spaces = [[x,y],[x+24,y],[x+24*2,y],[x+24*3,y],[x+24*4,y],[x,y+24],[x+24,y+24],[x+24*2,y+24],[x+24*3,y+24],[x+24*3,y+24]];
    return Spaces;
}

function tetrol(x,y){
    var Spaces = [[x+24*2, y],[x+24*3, y],[x+24*2, y+24],[x+24*3, y+24],[x+24*2, y+24*2],[x+24*3, y+24*2],[x+24, y+24],[x+24, y+24*2], [x, y+24],[x, y+24*2]];
    return Spaces;
}

function tetrol1(x,y){
    var Spaces = [[x,y],[x+24,y],[x+24*2,y],[x,y+24],[x+24,y+24],[x+24*2,y+24],[x+24,y+24*2],[x+24*2,y+24*2],[x+24,y+24*3],[x+24*2,y+24*3]];
    return Spaces;    
}

function tetrol2(x,y){
    var Spaces = [[x,y],[x+24,y],[x+24*2,y],[x+24*3,y],[x,y+24],[x+24,y+24],[x+24*2,y+24],[x+24*3,y+24],[x,y+24*2],[x+24,y+24*2]];
    return Spaces;
}
function tetrol3(x,y){
    var Spaces = [[x,y],[x+24,y],[x,y+24],[x+24,y+24],[x,y+24*2],[x+24,y+24*2],[x,y+24*3],[x+24,y+24*3],[x+24*2,y+24*2],[x+24*2,y+24*3]];
    return Spaces;
}

function tetroo(x,y){
    var Spaces = [[x,y],[x+24,y],[x+24*2,y],[x,y+24],[x+24,y+24],[x+24*2,y+24],[x,y+24*2],[x+24,y+24*2],[x+24*2,y+24*2]];
    return Spaces;
}

function tetros(x,y){
    var Spaces = [[x+24,y],[x+24*2,y],[x+24*3,y],[x+24,y+24],[x+24*2,y+24],[x+24*3,y+24], [x,y+24], [x,y+24*2],[x+24,y+24*2],[x+24*2,y+24*2]];
    return Spaces;
}

function tetros1(x,y){
    var Spaces = [[x, y], [x+24,y], [x, y+24], [x+24,y+24], [x, y+24*2], [x+24,y+24*2], [x+24*2, y+24],[x+24*2, y+24*2],[x+24*2, y+24*3], [x+24, y+24*3]];
    return Spaces;
}

function tetrot(x,y){
    var Spaces = [[x+24,y], [x+24*2,y], [x+24,y+24], [x+24*2,y+24],[x, y+24], [x+24*3,y+24], [x,y+24*2], [x+24,y+24*2], [x+24*2,y+24*2], [x+24*3,y+24*2]];
    return Spaces;
}

function tetrot1(x,y){
    var Spaces = [[x+24,y], [x+24*2,y], [x+24,y+24], [x+24*2,y+24], [x+24,y+24*2], [x+24*2,y+24*2], [x+24,y+24*3], [x+24*2,y+24*3], [x, y+24], [x, y+24*2]];
    return Spaces;
}

function tetrot2(x,y){
    var Spaces = [[x,y],[x+24,y],[x+24*2,y], [x+24*3,y], [x,y+24],[x+24,y+24],[x+24*2,y+24], [x+24*3,y+24], [x+24, y+24*2], [x+24*2, y+24*2]];
    return Spaces;
}

function tetrot3(x,y){
    var Spaces = [[x,y], [x+24,y], [x,y+24], [x+24,y+24],[x,y+24*2], [x+24,y+24*2], [x,y+24*3], [x+24,y+24*3],[x+24*2,y+24], [x+24*2,y+24*2]];
    return Spaces;
}

function tetroz(x,y){
    var Spaces = [[x,y],[x+24,y], [x+24*2,y], [x,y+24],[x+24,y+24], [x+24*2,y+24], [x+24*3,y+24], [x+24, y+24*2], [x+24*2, y+24*2], [x+24*3, y+24*2]];
    return Spaces;
}

function tetroz1(x,y){
    var Spaces = [[x+24,y], [x+24*2,y], [x+24,y+24], [x+24*2,y+24], [x+24,y+24*2], [x+24*2,y+24*2],[x, y+24], [x, y+24*2], [x, y+24*3], [x+24, y+24*3]];
    return Spaces;
}


function Xtetroi(x,y){
    var Spaces = [[x, y], [x, y+sqW], [x, y+sqW*2], [x, y+sqW*3]];
    return Spaces;
}

function Xtetroi1(x,y){
    var Spaces = [[x, y], [x+sqW, y], [x+sqW*2, y], [x+sqW*3, y]];
    return Spaces;
}

function Xtetroj(x,y){
    var Spaces = [[x,y],[x,y+sqW], [x+sqW, y+sqW], [x+sqW*2, y+sqW]];
    return Spaces;
}

function Xtetroj1(x, y){
    var Spaces = [[x+sqW, y], [x+sqW, y+sqW], [x+sqW, y+sqW*2], [x, y+sqW*2]];
    return Spaces;
}

function Xtetroj2(x,y){
    var Spaces = [[x,y],[x+sqW, y],[x+sqW*2, y],[x+sqW*2, y+sqW]];
    return Spaces;
}

function Xtetroj3(x,y){
    var Spaces = [[x,y], [x+sqW, y], [x,y+sqW], [x,y+sqW*2]];
    return Spaces;
}

function Xtetrol(x,y){
    var Spaces = [[x+sqW*2, y], [x, y+sqW],[x+sqW, y+sqW],[x+sqW*2, y+sqW]];
    return Spaces;
}

function Xtetrol1(x,y){
    var Spaces = [[x,y],[x+sqW,y],[x+sqW,y+sqW],[x+sqW,y+sqW*2]];
    return Spaces;
}

function Xtetrol2(x,y){
    var Spaces = [[x,y],[x+sqW,y], [x+sqW*2,y], [x,y+sqW]];
    return Spaces;
}

function Xtetrol3(x,y){
    var Spaces = [[x,y],[x,y+sqW],[x,y+sqW*2],[x+sqW,y+sqW*2]];
    return Spaces;
}

function Xtetroo(x,y){
    var Spaces = [[x,y],[x+sqW,y],[x,y+sqW],[x+sqW,y+sqW]];
    return Spaces;
}

function Xtetros(x,y){
    var Spaces = [[x+sqW, y],[x+sqW*2, y],[x, y+sqW],[x+sqW, y+sqW]];
    return Spaces;
}

function Xtetros1(x,y){
    var Spaces = [[x,y],[x,y+sqW],[x+sqW,y+sqW],[x+sqW,y+sqW*2]];
    return Spaces;
}

function Xtetrot(x,y){
    var Spaces = [[x+sqW, y],[x, y+sqW],[x+sqW, y+sqW],[x+sqW*2, y+sqW]];
    return Spaces;
}

function Xtetrot1(x,y){
    var Spaces = [[x+sqW,y],[x+sqW,y+sqW],[x+sqW,y+sqW*2],[x,y+sqW]];
    return Spaces;
}

function Xtetrot2(x,y){
    var Spaces = [[x,y],[x+sqW,y],[x+sqW*2,y],[x+sqW,y+sqW]];
    return Spaces;
}

function Xtetrot3(x,y){
    var Spaces = [[x,y],[x,y+sqW],[x,y+sqW*2],[x+sqW,y+sqW]];
    return Spaces;
}

function Xtetroz(x,y){
    var Spaces = [[x,y], [x+sqW,y], [x+sqW,y+sqW], [x+sqW*2,y+sqW]];
    return Spaces;
}

function Xtetroz1(x,y){
    var Spaces = [[x+sqW, y], [x+sqW, y+sqW], [x, y+sqW], [x, y+sqW*2]];
    return Spaces;
}



function CheckTypeX2(One, x, y){
    var array;
        if(One.type[One.imgNr]=="tetro_j.png")
        array = Xtetroj(x, y);
        if(One.type[One.imgNr]=="tetro_j1.png")
        array = Xtetroj1(x, y);
        if(One.type[One.imgNr]=="tetro_j2.png")
        array = Xtetroj2(x, y);
        if(One.type[One.imgNr]=="tetro_j3.png")    
        array = Xtetroj3(x, y);
    
        if(One.type[One.imgNr]=="tetro_i.png")
        array = Xtetroi(x, y);
        if(One.type[One.imgNr]=="tetro_i1.png")
        array = Xtetroi1(x, y);
        
        if(One.type[One.imgNr]=="tetro_l.png")
        array = Xtetrol(x, y);
        if(One.type[One.imgNr]=="tetro_l1.png")
        array = Xtetrol1(x, y);
        if(One.type[One.imgNr]=="tetro_l2.png")
        array = Xtetrol2(x, y);
        if(One.type[One.imgNr]=="tetro_l3.png")
        array = Xtetrol3(x, y);
        
        if(One.type[One.imgNr]=="tetro_o.png")
        array = Xtetroo(x, y);
        
        if(One.type[One.imgNr]=="tetro_s.png")
        array = Xtetros(x, y);
        if(One.type[One.imgNr]=="tetro_s1.png")
        array = Xtetros1(x, y);
    
        if(One.type[One.imgNr]=="tetro_t.png")
        array = Xtetrot(x, y);
        if(One.type[One.imgNr]=="tetro_t1.png")
        array = Xtetrot1(x, y);
        if(One.type[One.imgNr]=="tetro_t2.png")
        array = Xtetrot2(x, y);
        if(One.type[One.imgNr]=="tetro_t3.png")
        array = Xtetrot3(x, y);
    
        if(One.type[One.imgNr]=="tetro_z.png")
        array = Xtetroz(x, y);
        if(One.type[One.imgNr]=="tetro_z1.png")
        array = Xtetroz1(x, y);
        return array;    
    }