function printHello() {
    console.log('Hello');
}
function handleMouseOver() {
    console.log('Bye!');
}
function handledblclick() {
    console.log("you double clicked");
}

export default function Button() {
    return (
        <div>
           <button onClick={printHello}>Click me!</button>
           <p onMouseOver={handleMouseOver}>this parah is for event demo</p>
           <button onDoubleClick={handledblclick}>double click me!</button>
        </div>
    );
}