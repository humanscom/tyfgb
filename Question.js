class Question{
constructor()
{
    this.input=createInput("Name");
    this.input2 =  createInput("Correct option");
    this.button=createButton('Submit');
    this.title =     createElement('h2');
    this.question =  createElement('h2');
    this.option1 =   createElement('h2');
    this.option2 =  createElement('h2');
    this.option3 =  createElement('h2');
    this.option4 =  createElement('h2');
   this.reset=createButton('Reset');
   this.info=createElement('h2');
}


hide(){
    this.input.hide();
    this.button.hide();
    this.input2.hide();
    this.title.hide();
 
}


display(){
    //var title=createElement('h2');
    this.title.html("MyQuiz Game");
    this.title.position(350,0);

 // Question
    this.question.html("Question:- What is the name of Captain America ,And who his most powerful enemy.")
    this.question.position(15,40);
    //Options
    this.option1.html("1 :Steve Rogers,Thanos")
     this.option1.position(100,120);
     this.option2.html("2 :Steve Rogers,Dracula")
     this.option2.position(100,160);
     this.option3.html("3 :Bruce Banner,Red Skull")
     this.option3.position(100,200);
     this.option4.html("4 : Steve Rogers,Red Skull")
     this.option4.position(100,240);
 
     this.info.html("Press reset when  you get result")
     this.info.position(380,290);

     this.reset.position(380,350);

     this.input.position(150,300);
     this.input2.position(150,340);
     this.button.position(225,380);

    this.button.mousePressed(()=>{
    this.title.hide();
    this.input.hide();
    this.input2.hide();
    this.button.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.question.hide();
    contestant.name=this.input.value();
    contestant.answer=this.input2.value();
    contestantCount+=1;
    
    contestant.index=contestantCount;
    contestant.update();
    contestant.updateCount(contestantCount);
})

this.reset.mousePressed(()=>{
  contestant.updateCount(0);
    quiz.update(0);
})

}
}