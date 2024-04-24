function handlefromsubmit(event) {
    event.preventDefault();
    console.log("from was submit");
}

export default function Form() {
     return (
        <form onSubmit={handlefromsubmit}>
            <input placeholder="write something"/>
            <button>Submit</button>
        </form>
     )
}