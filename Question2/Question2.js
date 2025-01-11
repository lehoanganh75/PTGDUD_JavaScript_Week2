function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
      return bill * 0.15;
    } else {
      return bill * 0.20;
    }
  }
  
  const bills = [125, 555, 44];
  
  const tips = [];
  for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
  }
  
  const total = [];
  for (let i = 0; i < bills.length; i++) {
    total.push(bills[i] + tips[i]);
  }
  
  console.log('Bills:', bills);
  console.log('Tips:', tips);
  console.log('Total:', total);
  