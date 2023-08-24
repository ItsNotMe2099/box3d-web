interface Props {
  className?: string
  color: string
  onClick?: () => void
}

export default function EyeCloseSvg(props: Props) {
  return (
    <svg className={props.className} onClick={props.onClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g opacity="0.5" clip-path="url(#clip0_393_180485)">
        <path d="M21 9C18.6 11.667 15.6 13 12 13C8.4 13 5.4 11.667 3 9" stroke={props.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 15L5.5 11.2" stroke={props.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.9998 14.976L18.5078 11.2" stroke={props.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 17L9.5 13" stroke={props.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15 17L14.5 13" stroke={props.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_393_180485">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

