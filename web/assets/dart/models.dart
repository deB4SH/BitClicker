part of bitclicker; 

class Wallet{
  double _amount;
  double _incomePerSecond;
  double _clickMultiplier = 1.0;
  
  Wallet(double amount, double income){
    this._amount = amount;
    this._incomePerSecond = income;
  }
  
  void clickCoin(){
    _amount = _amount + _clickMultiplier;
  }
  
  double getAmount(){
    return _amount;
  }
  
  
}