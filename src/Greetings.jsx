import cocoa from "./cocoa.png"
//do not put export here for default, leave it as function Greeting()//
export function Greeting() {
    return (
        <div>
            <h1>&quot;Hello, how are you doing today?&quot;</h1>;
            <img src={cocoa} />
        </div>
    )
}
//use default export usually//
// export default Greeting;

// export { Greeting }