import * as React from "react"

const LogoText = (props) => (
  <svg
    width={119}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.974 14.595 0 .405h3.423l2.94 9.426 2.8-9.426h2.536l2.8 9.426 2.94-9.426h3.422l-4.973 14.19H13.23l-2.8-8.92-2.798 8.92H4.974ZM24.565 14.858c-1.41 0-2.524-.48-3.343-1.44-.819-.958-1.228-2.195-1.228-3.709 0-1.486.423-2.716 1.268-3.689.846-.973 1.96-1.46 3.343-1.46.685 0 1.296.15 1.832.447.537.297.94.702 1.209 1.216V4.824h3.06v9.77h-3.06v-1.378c-.269.487-.685.885-1.249 1.196a3.793 3.793 0 0 1-1.832.446Zm.886-2.574c.738 0 1.309-.244 1.711-.73.403-.486.604-1.101.604-1.845 0-.73-.2-1.337-.604-1.824-.402-.486-.973-.73-1.711-.73-.698 0-1.262.237-1.692.71-.416.473-.624 1.088-.624 1.844 0 .757.208 1.379.624 1.865.43.473.994.71 1.692.71ZM33.264 14.595V.405h3.081v14.19h-3.08ZM38.888 14.595V.405h3.081v14.19h-3.08ZM54.057 9.203c0 .405-.027.858-.08 1.358h-7.17c.028.635.242 1.128.645 1.48.403.35.947.527 1.631.527.94 0 1.544-.304 1.813-.913h3.02c-.148.96-.671 1.744-1.57 2.352-.887.594-1.974.892-3.263.892-1.65 0-2.953-.46-3.906-1.379-.953-.919-1.43-2.189-1.43-3.81 0-1.595.477-2.852 1.43-3.77.953-.933 2.221-1.4 3.806-1.4 1.503 0 2.725.433 3.664 1.298.94.865 1.41 1.986 1.41 3.365Zm-7.25-.568h4.21c-.014-.649-.195-1.149-.544-1.5-.35-.351-.853-.527-1.51-.527-.658 0-1.182.19-1.571.568-.376.365-.57.851-.584 1.46ZM60.875 12.182c.43 0 .785-.02 1.067-.06v2.473a11.52 11.52 0 0 1-2.054.162c-.35 0-.658-.02-.926-.061a4.106 4.106 0 0 1-.907-.264 2.351 2.351 0 0 1-.825-.587c-.215-.244-.403-.595-.564-1.055-.148-.459-.221-1-.221-1.621V7.277h-1.53V4.824h1.53V1.926h3.08v2.898h2.195v2.453h-2.195v3.243c0 .662.114 1.108.343 1.338.228.216.563.324 1.007.324ZM70.551 15c-2.282 0-4.114-.696-5.497-2.088-1.383-1.405-2.074-3.21-2.074-5.412 0-2.203.691-4 2.074-5.392C66.437.703 68.269 0 70.551 0c2.04 0 3.699.507 4.974 1.52 1.289 1 2.027 2.345 2.215 4.034h-3.463c-.189-.81-.605-1.446-1.249-1.905-.644-.473-1.463-.71-2.457-.71-1.315 0-2.342.412-3.08 1.237-.739.81-1.108 1.919-1.108 3.324 0 1.405.37 2.52 1.108 3.345.738.81 1.765 1.216 3.08 1.216.994 0 1.813-.23 2.457-.69.644-.472 1.06-1.114 1.248-1.925h3.464c-.188 1.69-.926 3.04-2.215 4.054-1.275 1-2.933 1.5-4.974 1.5ZM79.476 14.595V.405h3.08v14.19h-3.08ZM93.638 13.44c-.967.972-2.269 1.459-3.907 1.459s-2.946-.487-3.926-1.46-1.47-2.216-1.47-3.73c0-1.513.49-2.75 1.47-3.709.98-.973 2.288-1.46 3.926-1.46 1.638 0 2.94.487 3.907 1.46.98.96 1.47 2.196 1.47 3.71 0 1.513-.49 2.756-1.47 3.73Zm-3.907-1.176c.712 0 1.276-.237 1.692-.71.416-.473.624-1.088.624-1.845 0-.756-.208-1.371-.624-1.844-.416-.473-.98-.71-1.692-.71-.725 0-1.295.237-1.711.71-.403.473-.605 1.088-.605 1.844 0 .757.202 1.372.605 1.845.416.473.986.71 1.711.71ZM100.362 14.858c-1.154 0-2.04-.345-2.658-1.034-.617-.702-.926-1.689-.926-2.96v-6.04H99.9v5.352c0 1.378.537 2.067 1.611 2.067 1.249 0 1.873-.723 1.873-2.169v-5.25h3.061v9.77h-3.061v-1.398c-.577 1.108-1.584 1.662-3.021 1.662ZM115.919.405H119v14.19h-3.061v-1.379c-.268.487-.684.885-1.248 1.196a3.795 3.795 0 0 1-1.833.446c-1.409 0-2.523-.48-3.342-1.44-.819-.958-1.229-2.195-1.229-3.709 0-1.486.423-2.716 1.269-3.689.846-.973 1.96-1.46 3.343-1.46.684 0 1.295.15 1.832.447.537.297.94.702 1.208 1.216v-.831h-.02V.405Zm-2.175 11.879c.739 0 1.309-.244 1.712-.73s.604-1.101.604-1.845c0-.73-.201-1.337-.604-1.824-.403-.486-.973-.73-1.712-.73-.698 0-1.261.237-1.691.71-.416.473-.624 1.088-.624 1.844 0 .757.208 1.379.624 1.865.43.473.993.71 1.691.71Z"
      fill={props.greenbg === "true" ? "white" : "#333"}
    />
  </svg>
)

export default LogoText