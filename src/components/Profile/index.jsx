// const props = {
//     name: 'tsunode',
//     age: 24
// }

// const {name, age} = props;


export const Profile = ({ name, age, onClick, children }) => {
    console.log(children);
    return (
        <div>
            {children}
            <span>{name} - {age}</span>
            <button onClick={onClick}></button>
        </div>
    )
}