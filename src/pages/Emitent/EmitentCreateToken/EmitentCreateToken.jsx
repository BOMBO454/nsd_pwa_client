import React, {useState} from 'react'
import TokenTitle from './components/TokenTitle/TokenTitle'
import {Form} from "./styled"
import Input from "../../../components/ui/Input/Input";
import LayoutDashboard from "../../../components/layout/LayoutDashboard/LayoutDashboard";
import Button from "../../../components/ui/Button/Button";

function EmitentCreateToken() {
    const [value1, setValue1] = useState('');
    function handleChange1(event) {
        setValue1(event.target.value);
    }
    const [value2, setValue2] = useState('');
    function handleChange2(event) {
        setValue2(event.target.value);
    }
    const [value3, setValue3] = useState('');
    function handleChange3(event) {
        setValue3(event.target.value);
    }
    const [value4, setValue4] = useState('');
    function handleChange4(event) {
        setValue4(event.target.value);
    }
    const [value5, setValue5] = useState('');
    function handleChange5(event) {
        setValue5(event.target.value);
    }
    const [value6, setValue6] = useState('');
    function handleChange6(event) {
        setValue6(event.target.value);
    }
    const [value7, setValue7] = useState('');
    function handleChange7(event) {
        setValue7(event.target.value);
    }

    return (
        <LayoutDashboard>
            <TokenTitle/>
            <Form>
                <Input title="Тип" value={value1} onChange={handleChange1}/>
                <div className="row">
                    <Input title="Название" value={value2} onChange={handleChange2} className="col-8"/>
                    <Input title="Иконка" value={value3} onChange={handleChange3} className="col-4"/>
                </div>
                <Input title="Эмиссия (сколько штук выпускаем)" value={value4} onChange={handleChange4}/>
                <Input title="Цена за еденицу" value={value5} onChange={handleChange5}/>
                <Input title="Процентная ставка" value={value6} onChange={handleChange6}/>
                <Input title="Дата погашения" value={value7} onChange={handleChange7}/>
                <Button color="white">Создать</Button>
            </Form>
        </LayoutDashboard>
    )
}


export default EmitentCreateToken