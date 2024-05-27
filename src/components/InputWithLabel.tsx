import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
type InputWithLabelProps = {
  id?: string
  label: string
  placeholder?: string
  name: string
  type?: string
  disabled?: boolean
  value?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export function InputWithLabel({
  label = 'Email',
  id = 'email',
  placeholder = 'Email',
  type = 'email',
  name,
  value,
  disabled = false,
  defaultValue,
  onChange
}: InputWithLabelProps) {
  return (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  )
}
