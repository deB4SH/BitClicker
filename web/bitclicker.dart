library bitclicker;

import 'dart:html';
part 'assets/dart/models.dart';

Wallet bitWallet;

void setup(){
  bitWallet = new Wallet(0,0);
}

void clickBit(){
  bitWallet.clickCoin();
  print(bitWallet.getAmount());
}

void main() {
  
  querySelector(".bitbutton")
      ..onClick.listen(clickBit);
}

void reverseText(MouseEvent event) {
  var text = querySelector("#sample_text_id").text;
  var buffer = new StringBuffer();
  for (int i = text.length - 1; i >= 0; i--) {
    buffer.write(text[i]);
  }
  querySelector("#sample_text_id").text = buffer.toString();
}
