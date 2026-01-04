import {MetaRecord} from "nextra";
import { Heart } from "lucide-react";

const DOCS_ITEMS: MetaRecord = {
    index: '',
    navigation: '',
}

export default {
    index: {
        type: 'page',
        theme: {
            layout: 'full',
            toc: false,
            timestamp: false,
        }
    },
    tutorial: {
        type: 'page',
        theme: {
            layout: 'full',
            toc: true,
            timestamp: true,
        }
    },
    docs: {
        type: 'page',
        title: 'Documentation',
        items: DOCS_ITEMS
    },
    // sponsor: {
    //     type: 'page',
    //     "href": "https://github.com/c-modules/c_traceback",
    //     title: (
    //         <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
    //             Sponsor
    //             <Heart color="red" size="1.1em" /> 
    //         </span>
    //     )
    // },
}