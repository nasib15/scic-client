# Project Setup

## 1. **React Router Setup:**

```
npm create vite@latest name-of-your-project -- --template react
# follow prompts
cd <your new project directory>
npm install react-router-dom
npm install localforage match-sorter sort-by
```

## 2. **Tailwind CSS and DaisyUI Setup:**

### Install Tailwind CSS and DaisyUI:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i -D daisyui@latest
```

### Add the paths to all of your template files in your tailwind.config.js file.

```
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
```

### Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3. **Lastly, start the server**

```
npm run dev
```

# To Run Locally

1. **Clone the repository:**

   ```
   git clone https://github.com/nasib15/scic-server.git
   cd scic-server
   ```

2. **Install the dependencies:**

   ```
   npm install
   ```

3. **Start the development server:**

   ```
   npm run dev
   ```

### Build for Production:

```
npm run build
```
