import comp from "../assets/components.png";
import jsx from "../assets/jsx-ui.png";
import prop from "../assets/config.png";
import stat from "../assets/state-mgmt.png";

export const concepts = [
  {
    title: "Components",
    description:
      "Independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components.",
    picture: comp,
  },
  {
    title: "JSX",
    description:
      "Syntax extension to JavaScript. JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.",
    picture: jsx,
  },
  {
    title: "Props",
    description:
      "Arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties.",
    picture: prop,
  },
  {
    title: "State",
    description:
      "Built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.",
    picture: stat,
  },
];

export const examples = {
  component: {
    title: "Component",
    code: `
    function Fun() {
      return <h1>Hello world</h1>
    }`,
  },
  jsx: {
    title: "JSX",
    code: `
    const element = <h1>Hello, world!</h1>;`,
  },
  props: {
    title: "Props",
    code: `
    function Fun(props) {
      return <h1>Hello {props.name}</h1>
    }`,
  },
  state: {
    title: "State",
    code: `
    import { useState } from 'react'

    function Info() {
      const [user, setUser] = useState('default')
      return <h1>Hello {user}</h1>
    }`,
  },
};
