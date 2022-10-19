quickDrawDataset = ["pen","paper","book","bottle"]
randomNo = Math.floor((Math.random() * quickDrawDataset.length)+1) -1
sketch = quickDrawDataset[randomNo]
console.log(randomNo)
console.log(sketch)

document.getElementById("desenhar").innerHTML = "Esboço a Ser Desenhado: "+sketch

timerCounter = 0;
timerCheck = "";
drawSketch = "";
answerHolder = "";
score = 0;

function preload(){

}

function setup(){
    canvas = createCanvas(280,280)
    canvas.center()
    background("white")
}

function draw(){
    checkSketch()

    if(drawSketch == sketch){
        answerHolder = "set";
        score = +1;
        document.getElementById("pontos").innerHTML = "pontuação:"+score;
    }
}

function updateCanvas(){
    background("white")
}

 function checkSketch(){
    timerCounter  = +1;
    document.getElementById("tempo").innerHTML = "tempo:"+timerCounter;
    console.log(timerCounter)

    if(timerCounter > 400){
        timerCounter = 0;
        
    }

    if(timerCheck == "completed",answerHolder == "set"){
        timerCheck = ""
        answerHolder = ""
        updateCanvas()
    }
 }

 


