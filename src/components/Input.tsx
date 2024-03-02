interface InputProps {
  label: string
  htmlName: string
  type?: string
  textarea?: boolean
  required?: boolean
  readonly?: boolean
}
export default function Input({
  label,
  htmlName,
  type = 'text',
  textarea = false,
  required = false,
  readonly = false
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
          required={required}
          readOnly={readonly}
        />
      ) : (
        <input
          className='px-2 py-2 border border-black rounded-lg'
          type={type}
          id={htmlName}
          required={required}
          readOnly={readonly}
        />
      )}
    </>
  )
}
