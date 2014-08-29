library bitclicker;

import 'dart:html';
import 'dart:async';
part 'assets/dart/models.dart';

/*
 * Data
 */ 

Wallet bitWallet;
List<Building> building;

void setup(){
  bitWallet = new Wallet(0.0, 0.0);
  building = new List<Building>();
  //set up buildings
  //(String buildingName, String buildingDesc, double buildingIncome, double levelupCosts, double levelupMultiplier, Wallet wallet)
  building.add(new Building("Hand", "A virtual Mouse that clicks the Bit", 1.0, 10.0, 0.5, bitWallet));
  building.add(new Building("Discette", "An old datastorage to keep small dirty images", 1.0, 10.0, 0.5, bitWallet));
  building.add(new Building("CD", "Well, this stores some old school holiday movies ;)", 1.0, 10.0, 0.5, bitWallet));
  building.add(new Building("Harddrive", "Store all dem Games!", 1.0, 10.0, 0.5, bitWallet));
  building.add(new Building("Mynecraft", "Host a Mynecraft Server for friends!", 1.0, 10.0, 0.5, bitWallet));
  
  
  //setup mouse binding and keyboard binding
  querySelector(".bitbutton").onClick.listen(clickBit);
  timer = new Timer.periodic(const Duration(seconds: 1), update);
}



/*
 * Game Functions 
 */

void main() {
  setup();
  
}

void update(){
  incomeGeneration();
  updateGUI();
}

void updateGUI(){
  print(bitWallet.getAmount());
  //querySelector("#bitcount").text("" +  +  " Bits");
  print("updated gui");
}

void incomeGeneration(){
  
}


/*
 * Mouse Events
 */

void clickBit(MouseEvent event){
  bitWallet.clickCoin();
  print(bitWallet.getAmount());
}

void reverseText(MouseEvent event) {
  var text = querySelector("#sample_text_id").text;
  var buffer = new StringBuffer();
  for (int i = text.length - 1; i >= 0; i--) {
    buffer.write(text[i]);
  }
  querySelector("#sample_text_id").text = buffer.toString();
}
