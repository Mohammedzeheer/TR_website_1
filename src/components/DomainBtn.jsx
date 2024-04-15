import React from 'react'

const DomainBtn = ({ name, clsName, btBg }) => {
    console.log(btBg + ' ' + clsName)
    return (
        <>
            <button
                className={clsName + ' ' + btBg}
            >
                {name}
            </button>
        </>
    )
}

export default DomainBtn