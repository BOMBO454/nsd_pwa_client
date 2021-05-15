import React from 'react'
import {Label, InputText, Title} from './styled'

export default function Input({title,value, placeholder , className, onChange}) {
    return (
        <Label className={className}>
            <Title>{title}</Title>
            <InputText type="text" value={value} placeholder={placeholder} onChange={onChange}/>
        </Label>
    )
}
