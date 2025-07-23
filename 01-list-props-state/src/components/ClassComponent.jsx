import { createRenderer } from "react-dom/test-utils"

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1> Hello world </h1>
            </div>
        )
    }
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById('root')
)

// ==========================================================

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>hello world</h1>
            </div>
        )
    }
}

export default MyComponent

// rcc (react class component)
// rfce (react function component export)
// rafce (react arrow function component export)


