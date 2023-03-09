
interface IInput {
    value?: any;
    text: string;
    onChange?(val: any): void;
    error?: string;
    id?: string;
    placeholder: string;
    type?: string;
}

function Input(props: IInput) {
    return (
        <div className="grid gap-1 w-full">
            <div className="flex gap-1">
                <span>
                    {props.text}
                </span>
                {props.error &&
                    <span className="text-red-700">
                        {props.error}
                    </span>
                }
            </div>
            <input type={props.type ? props.type : "text"} id={props.id} value={props.value} onChange={e => props.onChange ? props.onChange(e.target.value) : {}}
                placeholder={props.placeholder}
                className={
                    `
                    outline-none p-2
                    mt-1 w-full rounded-md border bg-white text-sm text-gray-700 shadow-sm
                    ${props.error ? ' border-red-700 ' : 'border-gray-200'}
                    `
                } />
        </div>
    )
}

export default Input