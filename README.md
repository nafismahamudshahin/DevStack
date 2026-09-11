# 🚀 DevStack

### Pick technologies. Build your dream stack.

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge" />
</p>

🔗 **Live Demo:** [nafisdevstack.netlify.app](https://nafisdevstack.netlify.app/)

---

## 📖 About the Project

**DevStack** is a small web app. It shows many technologies, like React, Vue, Django, and more. You can look at each technology and add it to "Your Stack". This helps you build your own list of tools for a new project. It is fun and easy to use.

---

## 🛠️ Technology Used

- **React 19** – to build the UI
- **TypeScript** – to write safe code
- **Vite** – to run and build the app fast
- **Tailwind CSS** – to style the app
- **DaisyUI** – for ready UI components
- **React Icons** – for icons
- **React Toastify** – for small pop-up messages

---

## ✨ Features

1. **Explore Technologies** – See a list of technologies. Each card shows the name, description, category, difficulty, and rating.
2. **Build Your Stack** – Click "Add to Stack" to add a technology to your own list. You can also remove one or remove all at once.
3. **Live Feedback** – When you add or remove a technology, a toast message pops up to tell you what happened.

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX is a way to write HTML inside JavaScript code. It looks like HTML, but it is really JavaScript. We use it because it makes the UI code easy to read and easy to write. We do not need to write many `createElement` functions.

### 2. What is the difference between props and state?
**Props** are data that a parent component sends to a child component. The child cannot change props. **State** is data that lives inside a component itself, and the component can change it. In short: props come from outside, state lives inside.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` lets a component remember a value and update it. When the value changes, React shows the new value on the screen. In this project, I used `useState` in `TechnologyExplorer.tsx` to keep the list of `selectedTechnology` (the user's stack). When the user adds or removes a technology, this state updates and the screen changes.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` lets us run some code after the component shows on the screen. It is often used to fetch data, like getting a JSON file from the server. In this project, I load technology data from `data.json` with a `fetch` call. I used this fetch inside an async function, and React's `use()` hook with `Suspense` waits for the data and shows a loading spinner until it is ready. This works like `useEffect` — it lets the app load data after the page starts, without blocking the UI.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
The `key` prop helps React know which item is which in a list. When the list changes (an item is added, removed, or moved), React uses the `key` to update only the right item. This makes the app faster and stops bugs. In this project, I used `technology.id` as the key.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means we show different UI based on a condition (true or false). Example from this project, in `TechnologyExplorer.tsx`:

```jsx
{selectedTechnology.length === 0 ? (
  <div className="border border-dashed rounded-2xl w-full py-10">
    <p className="text-[#64748B] text-center">Your stack is empty.</p>
  </div>
) : (
  <div className="grid gap-3">
    {selectedTechnology.map(technology => (
      <StackCard key={technology.id} technology={technology} />
    ))}
  </div>
)}
```
If the stack is empty, it shows the message "Your stack is empty." If not, it shows the list of chosen technologies.

### 7. How do you pass data from a parent to a child, and how does a child send something back to the parent?
The parent sends data to the child using **props**. For example, `TechnologyExplorer` passes `technology` and `selectedTechnology` as props to `TechnologyCard`.

For the child to send data back, the parent passes a **function** as a prop (for example, `setSelectedTechnology`). The child calls this function with new data. This is how `TechnologyCard` tells the parent to add a technology to the stack.

---

### 👤 Author
**Nafis Mahamud Shahin**
[GitHub](https://github.com/nafismahamudshahin) · [Portfolio](https://nafismahamudshahin.github.io)