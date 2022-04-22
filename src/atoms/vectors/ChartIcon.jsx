import * as React from "react"

const Chart = (props) => (
  <svg
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M51.333 51.333H4.667c-.957 0-1.75-.793-1.75-1.75s.793-1.75 1.75-1.75h46.666c.957 0 1.75.793 1.75 1.75s-.793 1.75-1.75 1.75Z"
      fill="#219653"
    />
    <path
      d="M22.75 9.334v42h10.5v-42c0-2.567-1.05-4.667-4.2-4.667h-2.1c-3.15 0-4.2 2.1-4.2 4.667ZM7 23.334v28h9.333v-28c0-2.567-.933-4.667-3.733-4.667h-1.867c-2.8 0-3.733 2.1-3.733 4.667ZM39.666 35v16.333H49V35c0-2.567-.934-4.667-3.733-4.667H43.4c-2.8 0-3.733 2.1-3.733 4.667Z"
      fill="#219653"
    />
  </svg>
)

export default Chart