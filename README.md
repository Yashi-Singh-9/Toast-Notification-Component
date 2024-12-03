# Toast Notification Component Challenge

## Overview

This project is a **Toast Notification Component** built to meet the requirements of a coding challenge hosted on [FrontendPro](https://www.frontendpro.dev/frontend-coding-challenges/toast-notification-component-mHFR9GcTlWSyG8dO32Ok). It demonstrates the ability to build reusable, animated, and responsive notification components with a focus on clean design, user experience, and performance.

## Challenge Requirements

The Toast Notification Component fulfills the following requirements:

1. **Notification Types**:
   - Supports different types of notifications: `success`, `info`, `warning`, and `error`.

2. **Positioning**:
   - Notifications are displayed in the **top-right corner** of the page.

3. **Auto Dismissal**:
   - Notifications disappear automatically after **4 seconds**.

4. **Dismiss Button**:
   - Each notification includes a **dismiss button** to allow users to manually close it.

5. **Multiple Notifications**:
   - Handles **multiple notifications** at once, displaying them in a stack with the newest notification at the top.

6. **Animations**:
   - Smooth animations for appearing and disappearing notifications using **CSS keyframes**.

7. **Reusability**:
   - Easily reusable with customizable content, types, and styles.

8. **Responsive Design**:
   - Component adapts to various screen sizes, ensuring proper layout and visibility on mobile devices.

---

## Preview

<img src="Screenshot .png">

## Tech Stack

### **HTML**
- Provides the structure for buttons and the container where notifications appear.

### **SCSS**
- Implements styles, animations, and responsiveness in a clean, modular, and maintainable way.
- Uses SCSS features like **variables**, **mixins**, and **nested rules** to keep the code DRY and efficient.
- Includes animations for smooth transitions (fade-in and fade-out effects).

### **JavaScript**
- Handles dynamic creation, display, and dismissal of toast notifications.
- Adds reusable and extensible functionality via the `showNotification()` and `dismissToast()` methods.

---

## Features

### 1. **Notification Buttons**
Buttons for generating specific types of notifications:
- Success (`✔` Green)
- Info (`ℹ` Blue)
- Warning (`⚠` Orange)
- Error (`✖` Red)

### 2. **Dynamic Icons**
Uses **Font Awesome icons** to visually distinguish between notification types.

### 3. **Dismissal Options**
- Auto-dismiss after 4 seconds.
- Manual dismissal using a close (`×`) button.

### 4. **Smooth Animations**
- Fade-in and fade-out animations for seamless entry and exit.

### 5. **Responsive Design**
- Ensures that notifications look great across desktop, tablet, and mobile devices.

---

## How to Run the Project

### Prerequisites
- A modern browser supporting **HTML5**, **CSS3**, and **JavaScript ES6+**.
- Internet connection to load **Font Awesome** (optional: download the Font Awesome library locally).

### Steps to Run
1. Clone or download the repository.
2. Install an **SCSS compiler** if you don’t already have one. (e.g., [Sass](https://sass-lang.com/install))
3. Compile the `style.scss` file into `style.css` using your preferred tool.
4. Open the project folder and double-click the `index.html` file to open it in your browser.
5. Interact with the buttons to trigger notifications.

---

## File Structure

```
.
├── index.html         # Main HTML file
├── style.scss         # SCSS file for styles and animations
├── style.css          # Compiled CSS file (generated from SCSS)
├── script.js          # JavaScript for notification functionality
└── README.md          # Project documentation
```

---

## SCSS Highlights

1. **Variables**:
   - Defined reusable color variables for consistent design across components.

2. **Mixins**:
   - Created mixins for animations and responsive media queries to reduce redundancy.

3. **Nested Selectors**:
   - Simplified the structure by nesting rules within their parent components.

4. **Modularity**:
   - Ensured the styles for buttons, toasts, and icons are modular and reusable.

---

## Customization

### 1. **Modify Styles**
You can update the SCSS variables to change colors, sizes, and animations:

```scss
$success-color: #22C55E;
$info-color: #3B82F6;
$warning-color: #F97316;
$error-color: #EF4444;
$fade-duration: 0.5s;
```

### 2. **Add New Notification Types**
- Extend the `iconMap` object in `script.js` with additional notification types and icons.

```javascript
const iconMap = {
  success: '<i class="fa-solid fa-check"></i>',
  info: '<i class="fa-solid fa-circle-info"></i>',
  warning: '<i class="fa-solid fa-triangle-exclamation"></i>',
  error: '<i class="fa-solid fa-circle-xmark"></i>',
  custom: '<i class="fa-solid fa-star"></i>' // Example of a custom type
};
```

- Update the `showNotification()` function to handle the new type.

### 3. **Change Default Position**
To change the default position of the notifications, update the `toast-container`'s SCSS in `style.scss`. For example:

```scss
.toast-container {
  position: fixed;
  bottom: 20px; /* Move to bottom */
  left: 20px;   /* Move to bottom-left corner */
}
```

### 4. **Compile SCSS to CSS**
To apply any changes, compile the updated `style.scss` file to generate `style.css`. You can use tools like:
- Sass CLI: `sass style.scss style.css`
- VSCode extensions like **Live Sass Compiler**.

---

## Example Code Usage

### Show a Notification
```html
<button onclick="showNotification('success')">Success</button>
```

### Modify Notification Message
To change the message, you can update the content in `script.js`:

```javascript
toast.innerHTML = `
  <span class="icon">${iconMap[type]}</span>
  <span>Your custom message here!</span>
  <button class="close-btn" onclick="dismissToast(this)">
    <i class="fa-solid fa-xmark"></i>
  </button>
`;
```

---

## Challenges Faced
1. Ensuring smooth animations while stacking notifications.
2. Making the component responsive for smaller devices.
3. Integrating reusable SCSS features like mixins for animations.

---

## Conclusion

This Toast Notification Component is a lightweight, reusable, and responsive solution that meets the requirements of the challenge. Using **SCSS** adds flexibility and efficiency, making it easier to extend or maintain in the future.

---

## Author
This project was built as part of the [FrontendPro Coding Challenges](https://www.frontendpro.dev/). If you have any questions or feedback, feel free to reach out on [LinkedIn](https://www.linkedin.com/in/yashi-singh-b4143a246)! 😊
