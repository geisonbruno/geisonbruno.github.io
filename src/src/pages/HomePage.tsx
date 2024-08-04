import ComponenteTeste from "../components/ComponenteTeste/ComponenteTeste";

export default function HomePage(){
    return <>
        <div className="text-center">
                minha primeira pagina com react
        </div>
        <div>
            <ComponenteTeste classNames="bg-base-200 text-center" content="Conteudo" />
        </div>
    </>;
}