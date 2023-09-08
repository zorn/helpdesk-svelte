/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "watchSchema": {
        "url": "http://localhost:4000/gql",
        "interval": 0
    },
    "plugins": {
        "houdini-svelte": {}
    },
    "scalars": {
        "Json": {
            "type": "Record<any, any>",
        },
        "DateTime": {
            "type": "Date",
            unmarshal(val) {
                return val ? new Date(val) : null
            },
            marshal(val) {
                return date && date.getTime()
            }
        }
    },
    "types": {
        "Ticket": {
            "resolve": {
                "queryField": "getTicket"
            }
        },
        "Representative": {
            "resolve": {
                "queryField": "getRepresentative"
            }
        }
    }
}

export default config
