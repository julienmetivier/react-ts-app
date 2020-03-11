import React, { useState, useRef } from 'react';

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    obj?: {
        f1: string;
    };
    person: Person;
}

export const TextField: React.FC<Props> = () => {
    const [count, setCount] = useState<number | null>(5);
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLInputElement>(null);

    return (
        <div ref={divRef}>
            <input type="text" placeholder="Here is some text" ref={inputRef}/>
        </div>
    )
}