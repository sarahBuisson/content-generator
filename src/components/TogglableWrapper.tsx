import React, { useState } from 'react';

interface TogglableWrapperProperties {
    children: React.ReactNode;
    title:string;
}

export default function TogglableWrapper({title, children }:TogglableWrapperProperties): JSX.Element {
    const [isVisible, setIsVisible] = useState(true);

    const onToggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={onToggleVisibility}>
                {title} {isVisible ? 'Hide' : 'Show'}
            </button>
            {isVisible && <div>{children}</div>}
        </div>
    );
};

