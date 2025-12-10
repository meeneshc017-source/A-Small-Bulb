# 🔆 Blinking Bulb Project

A simple JavaScript mini-project where a bulb blinks repeatedly using setInterval(), and you can start/stop the blinking using buttons.

## 🚀 Features

- Bulb blinks by toggling a CSS class

- Start button → starts blinking

- Off button → stops blinking

- Uses:

  - querySelector()

  - classList.toggle()

  - setInterval()

  - Event listeners


## 🧠 How It Works

- The bulbb() function uses setInterval() to toggle the "bulb" class every 400ms.

- Clicking Start starts the blinking effect.

- Clicking Off removes the event listener from the Start button (though this method can be improved — see notes below).

## ⚠️ Important Note

The current Off button does NOT stop the interval — it only removes the event listener incorrectly.
 (i will improve this later.)

## 📂 Technologies Used

- HTML

- CSS

- JavaScript (DOM, Events)

## ⭐ Future Improvements

- Add actual stop blinking logic using clearInterval()

- Add smooth glow animations

- Add ON/OFF icons

- Convert into a mobile-friendly UI
