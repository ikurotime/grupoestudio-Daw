interface InputProps {
  label: string
  htmlName: string
  type?: string
  textarea?: boolean
  required?: boolean
  readonly?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  dataTestId?: string
  placeholder?: string
  value?: string
}
export default function Input({
  label,
  htmlName,
  type = 'text',
  textarea = false,
  required = false,
  readonly = false,
  onChange,
  dataTestId,
  placeholder,
  value
}: InputProps) {
  return (
    <>
      <label className='font-bold' htmlFor={htmlName}>
        {label}
      </label>
      {textarea ? (
        <textarea
          className='px-2 py-2 border border-black rounded-lg'
          id={htmlName}
          name={htmlName}
          required={required}
          value={value}
          readOnly={readonly}
          placeholder={placeholder}
          onChange={onChange as unknown as never}
        />
      ) : (
        <input
          className='px-2 py-2 border border-black rounded-lg'
          type={type}
          id={htmlName}
          name={htmlName}
          required={required}
          readOnly={readonly}
          value={value}
          placeholder={placeholder}
          data-testid={dataTestId}
          onChange={onChange}
        />
      )}
    </>
  )
}
