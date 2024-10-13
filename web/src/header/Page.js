import React from 'react';

export default function Page(props) {
    const setFunc = (props.page === "Logout")
        ? () => props.setToken("")
        : () => props.setState(props.page);

    const style = props.active ? {borderWidth: '3px', borderColor: '#000'} : null;

    return (
        <div className='page' onClick={setFunc} style={style}>
            <p>{props.page}</p>
        </div>
    )
}