//yt link -> https://youtu.be/PAAmh1vSJCQ
// constants won't change. They're used here to set pin numbers:
const int buttonPin = 2;  // the number of the pushbutton pin
const int buttonPin1 = 4;
const int ledPin = 8;    // the number of the LED pin
const int ledPin1 = 12;

// variables will change:
int buttonState = 0;  // variable for reading the pushbutton status
int buttonState1 = 0;

void setup() {
  Serial.begin(9600);
  
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  pinMode(ledPin1, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
  pinMode(buttonPin1, INPUT);
}

void loop() {
  //Serial.println(buttonState);
  //Serial.println(buttonState1);  
  
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
//for turn on, delay, beep for 3 secs, wait for 9, beep for 3 end
for (int i = 0; i < 3; i++){
    // turn LED on:
    digitalWrite(ledPin, HIGH);
    delay(400);
    digitalWrite(ledPin, LOW);
    delay(400);
  }
  } 

  buttonState1 = digitalRead(buttonPin1);
  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState1 == HIGH) {
//for turn on, delay, beep for 9 secs, wait for 3, beep for 9 end 
for (int i = 0; i < 9; i++){   
    // turn LED on:
    digitalWrite(ledPin1, HIGH);
    delay(200);
    digitalWrite(ledPin1, LOW);
    delay(200);   
  }
  } 

}