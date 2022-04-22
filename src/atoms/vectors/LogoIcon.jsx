import * as React from "react"

const LogoIcon = (props) => (
  <svg
    width={34}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.48 15.101a2.13 2.13 0 0 1-3.433.003L.274 2.144C-.383 1.273.216 0 1.283 0h23.541L13.48 15.101ZM25.72 3.642l-7.041 9.561.456.465 1.411 1.462a2.13 2.13 0 0 0 3.435 0l8.63-11.488 1.12-1.504C34.38 1.265 33.78 0 32.717 0H28.41L25.72 3.642Z"
      fill={props.greenbg === "true" ? "white" : "#219653"}
    />
  </svg>
)

export default LogoIcon
