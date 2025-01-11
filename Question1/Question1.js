var calcAverage = (score1, score2, score3) => {
    var totalScore = score1 + score2 + score3;
    return totalScore / 3;
  };
  

  const dolphinsScore = calcAverage(44, 23, 71);  
  const koalasScore = calcAverage(65, 54, 49); 
  
  const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins thắng (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas thắng (${avgKoalas} vs. ${avgDolphins})`);
    } else {
      console.log('Không có đội thắng!');
    }
  };
  checkWinner(dolphinsScore, koalasScore);
  