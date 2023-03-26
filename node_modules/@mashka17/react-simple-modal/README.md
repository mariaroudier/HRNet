<h1 align="center">React Simple Modal</h1>
<h3 align="center">A library of React components created using create-react-app.</h3>



## Key Features
**Content:** insert your own content inside the modal.


**Close:** with icon on top, on click.


**Style:** add the customised style of the modal and content.

## Start

To use the modal library write in your project root terminal:
> $ npm i react-simple-modal

or
> $ yarn add react-simple-modal

# Install dependencies
> $ npm install

# Run the app
> $ npm run start

# How to use
1. Import react-simple-modal:


	`
	import ReactModal from "@mashka17/react-simple-modal";
	`


2. Create a <ReactModal> component and nest its content inside of it:

```
	function ExampleComponent() {
	      return (
                  <div>
                        <ReactModal 
                        text={yourText}
                        closeModal={yourCloseFunction}
                        styleModal={yourModalStyle}
                        styleModalBg={yourBgStyle}
                        styleText={yourTextStyle} />
                  </div>
	      );
	}
```

3.Then, show the modal by calling the action and setting the state to true. Example for your code:

```
const [ isVisible, setVisibility ] = React.useState(false)

      const openModal = (e) => {
            e.preventDefault()
            setVisibility(true)
      }

      <button onClick={openModal}></button>
```

You can manage the state of visibility by using a callback function in your component ModalReact which was given to it from the parent via props.