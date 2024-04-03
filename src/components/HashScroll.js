import React from "react";

import {useLocation} from "react-use";

export default function HashScroll(props) {
    const {hash} = useLocation();
    const scrolledRef = React.useRef(false);
    const hashRef = React.useRef(hash);

    React.useEffect(() => {
        if (!hash) return;

        if (hashRef.current !== hash) {
            hashRef.current = hash;
            scrolledRef.current = false;
        }

        if (scrolledRef.current) return;

        const id = hash.replace("#", "");
        window.setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView();
                scrolledRef.current = true;
            }
        }, props.timeout || 1000);
    }, [hash, props.timeout]);

    return props.children || null;
}
