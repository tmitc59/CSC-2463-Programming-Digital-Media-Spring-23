int trigPin = 10; 
int echoPin = 8; 
int ledPin  = 3;

int ledBrightness = 0;

float duration_us, distance_cm;

void setup() 
{
  Serial.begin (9600);   

  pinMode(trigPin, OUTPUT); 
  pinMode(echoPin, INPUT);
}

void loop() 
{
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration_us = pulseIn(echoPin, HIGH);
  distance_cm = 0.017 * duration_us;

  ledBrightness = map(distance_cm, 0, 15, 0, 50);
  
  analogWrite(ledPin, ledBrightness);

  Serial.print("distance: ");
  Serial.print(distance_cm);
  Serial.println(" cm");

  delay(500);
}
