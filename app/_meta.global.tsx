import {MetaRecord} from "nextra";
import { Heart, Star, User } from "lucide-react";

const DOCS_ITEMS: MetaRecord = {
    index: '',
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
    support: {
        type: 'menu',
        title: (
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                Support Us
                <Heart color="red" size="1.1em" /> 
            </span>
        ),
        items: {
            Star: {
                title: (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Give us a star on GitHub
                        <Star size="1.1em" className="inline fill-yellow-400 stroke-yellow-400" />
                    </span>
                ),
                "href": "https://github.com/c-modules/c_traceback",
            },
            Follow: {
                title: (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Follow Us on GitHub
                        <User size="1.1em" className="inline fill-blue-400 stroke-blue-400" />
                    </span>
                ),
                "href": "https://github.com/alvinng4",
            }
        }
    },
}