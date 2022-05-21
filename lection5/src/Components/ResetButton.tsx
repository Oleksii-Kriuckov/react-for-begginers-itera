// import React from 'react'

export const ResetButton = ({ reset }: { reset: () => void }) => {
    return (
        <button type='button' className="resBut" onClick={reset}>
            Reset
        </button>
    )
}
