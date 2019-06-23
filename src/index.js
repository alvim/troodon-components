import React from "react"

const stock = {
    Paragraph: ({children}) => <p>{children}</p>,
    Divider: () => <hr />,
    Span: ({children}) => <span>{children}</span>,
    Banner: ({children}) => <div>{children}</div>,
}

export default stock