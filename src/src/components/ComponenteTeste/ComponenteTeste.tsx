import "../ComponenteTeste/ComponenteTeste.css";

interface ComponentProps{
    classNames : string;
    content : string;
}


export default function ComponenteTeste(props : ComponentProps){
    return <>
        <div className={props.classNames}>
            {props.content}
        </div>
    </>;
}