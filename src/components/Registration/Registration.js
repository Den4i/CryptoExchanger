import React from 'react';

const Registration = () => {
    return (
        <div className={"form-group col-4"}>
            <div><input id={'name'} placeholder={'Ваше имя'} className={"form-control"}/></div>
            <div><input id={'email'} placeholder={'Ваш E-mail'} type="email" className={"form-control"} /></div>
            <div><button className="btn btn-success">Регистрация</button></div>
        </div>
    )
};

export default Registration;