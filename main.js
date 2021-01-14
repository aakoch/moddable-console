/**
 * =======
 * Console
 * =======
 * 
 * Displays text as if it is a console.
 * 
 * @author Adam A. Koch (aakoch)
 * @date 2021.01.13
 */
import {} from "piu/MC";
import Poco from "commodetto/Poco";
import parseBMF from "commodetto/parseBMF";
import parseBMP from "commodetto/parseBMP";
import Resource from "Resource";
import Timer from "timer";
import config from "mc/config";

let poco = new Poco(screen, {rotation: config.rotation});

let black = poco.makeColor(0, 0, 0);
let gray = poco.makeColor(128, 128, 128);

let font = parseBMF(new Resource("OpenSans-Regular-16.fnt"));
font.bitmap = parseBMP(new Resource("OpenSans-Regular-16-alpha.bmp"));

// // prints a bunch of colored noise
// poco.begin();
// poco.drawText("" + palatino36.height, palatino36, black, 0, 0);
// poco.end();

// Timer.delay(1000);

// // print gray screen
// poco.begin();
// poco.fillRectangle(gray, 0, 0, poco.width, poco.height);
// poco.end();

// Timer.delay(1000);

// // prints a line of unrecognizable text, maybe
// poco.begin();
// poco.drawText("" + palatino36.height, palatino36, black, 0, 0);
// poco.end();

// Timer.delay(1000);

// // prints black "21" on gray background
// poco.begin();
// poco.fillRectangle(gray, 0, 0, poco.width, poco.height);
// poco.drawText("" + palatino36.height, palatino36, black, 0, 0);
// poco.end();

// Timer.delay(1000);


// // prints 9 lines with one "A" on the first, 2 on the second and so on
// poco.begin();
// poco.fillRectangle(gray, 0, 0, poco.width, poco.height);

// for (var i = 1; i < 10; i++) {
//    poco.drawText("A".repeat(i), palatino36, black, 0, palatino36.height * i);
// }

// poco.end();

// Timer.delay(1000);

// // prints 9 lines with one "A" on the first loop near the top, then 2 "A"s further down and so on with a slight delay after each line
// for (var i = 1; i < 10; i++) {
//   poco.begin();
//   poco.fillRectangle(gray, 0, 0, poco.width, poco.height);
//   poco.drawText("A".repeat(i), palatino36, black, 0, palatino36.height * i);
//   poco.end();
//   Timer.delay(300);
// }

// // prints 1 line with 9 "A"s near the bottom
// poco.begin();
// for (var i = 1; i < 10; i++) {
//   poco.fillRectangle(gray, 0, 0, poco.width, poco.height);
//   poco.drawText("A".repeat(i), palatino36, black, 0, palatino36.height * i);
// }
// poco.end();
// Timer.delay(1000);


// // prints 9 lines with one "A" on the first loop near the top, then 2 "A"s further down and so on with no delay
// poco.begin();
// poco.fillRectangle(gray, 0, 0, poco.width, poco.height);
// for (var i = 1; i < 10; i++) {
//   poco.drawText("A".repeat(i), palatino36, black, 0, palatino36.height * i);
// }
// poco.end();
// Timer.delay(1000);

// // prints black lines instead of "A"s (or perhaps a bunch of "A"s close together so it looks like a line)
// poco.begin();
// poco.fillRectangle(gray, 0, 0, poco.width, poco.height);
// poco.end();

// for (var i = 1; i < 10; i++) {
//   poco.begin();
//   poco.drawText("A".repeat(i), palatino36, black, 0, palatino36.height * i);
//   poco.end();
//   Timer.delay(700);
// }

// // prints black lines instead of "A"s (or perhaps a bunch of "A"s close together so it looks like a line)
// poco.begin();
// poco.fillRectangle(gray, 0, 0, poco.width, poco.height);
// poco.end();
// Timer.delay(700);

// for (var i = 1; i < 10; i++) {
//   poco.begin();
//   poco.drawText("A".repeat(i), palatino36, black, 0, palatino36.height * i);
//   poco.end();
//   Timer.delay(700);
// }

// // a bunch of lines
// poco.begin();
// poco.fillRectangle(gray, 0, 0, poco.width, poco.height);
// poco.end();

// for (var i = 1; i < 10; i++) {
//   poco.begin();
//   poco.fillRectangle(gray, 0, palatino36.height * (i + 1), poco.width, poco.height);
//   poco.drawText("A".repeat(i), palatino36, black, 0, palatino36.height * i);
//   poco.end();
//   Timer.delay(300);
// }
// Timer.delay(3000);

// // this erased the line above it
// poco.begin();
// poco.fillRectangle(gray, 0, 0, poco.width, poco.height);
// poco.end();

// for (var i = 1; i < 10; i++) {
//   poco.begin();
//   poco.fillRectangle(gray, 0, palatino36.height * i, poco.width, poco.height);
//   poco.drawText("A".repeat(i), palatino36, black, 0, palatino36.height * i);
//   poco.end();
//   Timer.delay(300);
// }
// Timer.delay(3000);

// // this one worked!
// poco.begin();
// poco.fillRectangle(gray, 0, 0, poco.width, poco.height);
// poco.end();

// for (var i = 1; i < 10; i++) {
//   poco.begin(0, palatino36.height * i, poco.width, poco.height);
//   poco.fillRectangle(gray, 0, palatino36.height * i, poco.width, poco.height);
//   poco.drawText("A".repeat(i), palatino36, black, 0, palatino36.height * i);
//   poco.end();
//   Timer.delay(300);
// }


// Timer.delay(3000);

// // seems to be the same (but at least working)
// poco.begin();
// poco.fillRectangle(gray, 0, 0, poco.width, poco.height);
// poco.end();

// for (var i = 1; i < 10; i++) {
//   poco.begin(0, palatino36.height * i, poco.width, poco.height);
//   poco.fillRectangle(gray, 0, palatino36.height * i, poco.width, poco.height - (palatino36.height * i));
//   poco.drawText("A".repeat(i), palatino36, black, 0, palatino36.height * i);
//   poco.end();
//   Timer.delay(300);
// }


// Timer.delay(3000);

// // works, but is an infinite loop
// poco.begin();
// poco.fillRectangle(gray, 0, 0, poco.width, poco.height);
// poco.end();

// for (var i = 0; i < 30; i++) {
//   if (palatino36.height * (i + 1) > poco.height) {
//     i = 0;
//   }
//   poco.begin(0, palatino36.height * i, poco.width, poco.height);
//   poco.fillRectangle(gray, 0, palatino36.height * i, poco.width, poco.height - (palatino36.height * i));
//   poco.drawText("A".repeat(i + 1), palatino36, black, 0, palatino36.height * i);
//   poco.end();
//   Timer.delay(300);
// }


// Timer.delay(3000);


// This will restart the text at the top
// poco.begin();
// poco.fillRectangle(gray, 0, 0, poco.width, poco.height);
// poco.end();

// for (var i = 0, lines = 0; lines < 40; i++) {
//   if (font.height * (i + 1) > poco.height) {
//     i = 0;
//   }
//   poco.begin(0, font.height * i, poco.width, font.height * 2);
//   poco.fillRectangle(gray, 0, font.height * i, poco.width, font.height * 2);
//   poco.drawText("A".repeat(++lines), font, black, 0, font.height * i, poco.width - 2);
//   poco.end();
//   Timer.delay(300);
// }


const Console = (screen, font) => { 
  const _screen = screen;
  const _font = font;

  _screen.begin();
  _screen.fillRectangle(gray, 0, 0, _screen.width, _screen.height);
  _screen.end();

  let msgs = [];
  return {
    log: msg => {
      msgs.push(msg);
      if (_font.height * msgs.length > _screen.height) {
        msgs.shift();
      }
      for (let msgIndex = 0; msgIndex < msgs.length; msgIndex++) {
        _screen.begin(0, _font.height * msgIndex, _screen.width, _font.height * 2);
        _screen.fillRectangle(gray, 0, _font.height * msgIndex, _screen.width, _font.height * 2);
        _screen.drawText(msgs[msgIndex], _font, black, 0, _font.height * msgIndex, _screen.width - 2);
        _screen.end();
      }
    }
  };
}

let console = Console(poco, font);


console.log('Initializing...');

Timer.delay(1000);
console.log('Loading...');

for(let i = 0; i < 20; i++) {
  Timer.delay(1000);
  console.log('Connecting to WiFi...');
}

console.log('Connected');
