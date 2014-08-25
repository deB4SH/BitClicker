part of bitclicker; 

class Wallet{
  double _amount;
  double _incomePerSecond;
  double _clickMultiplier = 1;
  
  Wallet({double amount, double income}){
    this._amount = amount;
    this._incomePerSecond = income;
  }
  
  void clickCoin(){
    _amount = _amount + clickMultiplier;
  }
  
  double getAmount(){
    return _amount;
  }
  
  
}