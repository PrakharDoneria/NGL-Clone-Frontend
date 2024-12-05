# NGL Clone - Frontend

This is the frontend of the NGL clone project where users can send anonymous messages. The frontend is built using **HTML**, **CSS**, and **JavaScript**. It is designed to be responsive, meaning it will adapt to different screen sizes, such as desktops, tablets, and mobile phones.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- **Responsive Design**: The website automatically adjusts to various screen sizes (desktop, tablet, mobile).
- **Anonymous Messaging**: Users can send anonymous messages.
- **Geolocation**: The user's IP, city, region, and other device details are captured and sent alongside the message.
- **Modern UI**: Clean, minimalist design with smooth transitions and hover effects.

## Tech Stack

- **HTML5**: Structure of the webpage.
- **CSS3**: Styling the webpage using a modern and sleek theme.
- **JavaScript**: Handling frontend logic and form submission, as well as fetching geolocation data.
- **External APIs**:
  - `ipinfo.io`: Used for fetching user IP information (city, region, ISP, etc.).
  
## Installation

### Prerequisites
- No dependencies are required for the frontend itself. Simply ensure that you have a web browser to run the website.

### Steps to Run Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/prakhardoneria/ngl-clone-frontend.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd ngl-clone-frontend
    ```

3. **Open the `index.html` file**:
    - You can open the `index.html` directly in your web browser to run the website locally.
    - Alternatively, you can set up a local server using any static file server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code.

4. **Start using the frontend**: Visit `index.html` in your browser, and you will be able to send messages anonymously.

## Usage

1. **Open the page**: When you visit the page, you'll see a form with a text area where you can type your anonymous message.
2. **Send a Message**: Type a message in the input field and click "Send Message". The page will send the message along with your geolocation and device information to the backend (you will need to set up the backend for this to work properly).
3. **Response**: After sending the message, you will get a success or error response displayed below the form.

## Project Structure

```
/ngl-clone-frontend
│
├── index.html             # Main HTML page for the app
├── styles.css             # CSS file for styling
└── script.js              # JavaScript file for frontend logic
```

### **index.html**
Contains the structure of the webpage, including the message form and response section.

### **styles.css**
Contains the styles for the webpage. The design is responsive and adjusts according to screen size.

### **script.js**
Handles the JavaScript logic for submitting the form, fetching user geolocation information using the `ipinfo.io` API, and sending the data to the backend.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push to your forked repository
6. Open a pull request