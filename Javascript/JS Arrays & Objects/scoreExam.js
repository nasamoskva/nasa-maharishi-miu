function scoreExam(studentA, correctA){
    let correctAnswers = [0,0,0,0];
    for(let i = 0; i < studentA.length; i++){
        for(let j = 0; j < studentA[i].length; j++){
            if(studentA[i][j] == correctA[j]){
                correctAnswers[j] += 1;
            }
        }
    }
    return correctAnswers;
}
console.log(scoreExam([[1,1,2,4],[2,1,2,2],[3,1,3,4]],[3,1,2,4]));

