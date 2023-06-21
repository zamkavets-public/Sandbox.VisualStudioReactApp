import { useFormContext } from 'react-hook-form';

function Input({ label, type, id, placeholder, validation, name }) {
    const { register, formState: { errors } } = useFormContext();

    const inputError = findInputError(errors, label);
    const isInvalid = isFormInvalid(inputError);

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={id} className="font-semibold capitalize">
                    {label}
                </label>
            </div>
            <input
                id={id}
                type={type}
                className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
                placeholder={placeholder}
                {...register(name, validation)}
            />
            {isInvalid && (
                <label key={inputError.error.message}>{inputError.error.message}</label>
            ) }
        </div>
    )
}

export function findInputError(errors, name) {
    const filtered = Object.keys(errors)
        .filter(key => key.includes(name))
        .reduce((cur, key) => {
            return Object.assign(cur, { error: errors[key] })
        }, {})
    return filtered
}

export const isFormInvalid = err => {
    if (Object.keys(err).length > 0) return true
    return false
}

export default Input;