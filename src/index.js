import React from "react"

const stock = {
    Paragraph: ({children}) => <p>{children}</p>,
    Divider: () => <hr />,
    Span: () => <span></span>,
    Banner: ({children}) => <div>{children}</div>,
}

export default stock