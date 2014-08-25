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
  
  void addIncome(double amount){
    _amount = amount;
  }
  
  double getAmount(){
    return _amount;
  } 
}

class Building{
  Wallet _walletObj;
  
  String _name;
  String _description;
  double _basicIncome;
  double _incomeMultiplier = 1.0;
  
  int _level = 0;
  double _levelupCosts = 0;
  double _levelupCostsMultiplier;
  
  Building(String buildingName, String buildingDesc, double buildingIncome, double levelupCosts, double levelupMultiplier, Wallet wallet){
    this._name = buildingName;
    this._description = buildingDesc;
    this._basicIncome = buildingIncome;
    
    this._levelupCosts = levelupCosts;
    this._levelupCostsMultiplier = levelupMultiplier;
    
    this._levelupCosts = levelupCosts;
    this._levelupCostsMultiplier = levelupMultiplier;
    
    this._walletObj = wallet;
  }
  
  double getIncome(){
    return this._basicIncome * this._incomeMultiplier;
  }
  
  String getName(){
    return this._name;
  }
  
  String getDescription(){
    return this._description;
  }
  
  void generateIncome(){
    _walletObj.addIncome(getIncome() * _level);
  }
  
  void levelUp(){
    
  }
  
}