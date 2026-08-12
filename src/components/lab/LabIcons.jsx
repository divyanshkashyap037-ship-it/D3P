const Icon = ({ paths, size, color = "#000", style, className, strokeWidth = 2 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    style={{ display: "block", ...style }}
    role="presentation"
  >
    {paths.map((p, i) => (
      <path
        key={i}
        d={p.d}
        fill="transparent"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={p.t}
      />
    ))}
  </svg>
);

export const AlertTriangleIcon = ({ size, color, style }) => (
  <Icon
    size={size}
    color={color}
    style={style}
    paths={[
      {
        d: "M 10 6 L 10 10 M 10 14.02 L 10 14 M 8.164 1.005 L 0.202 15.47 C -0.444 16.643 0.54 18 2.037 18 L 17.963 18 C 19.46 18 20.444 16.643 19.798 15.47 L 11.836 1.005 C 11.098 -0.335 8.902 -0.335 8.164 1.005 Z",
      },
    ]}
  />
);

export const GridIcon = ({ size, color, style }) => (
  <Icon
    size={size}
    color={color}
    style={style}
    paths={[
      { d: "M 0 1 C 0 0.448 0.448 0 1 0 L 6 0 C 6.552 0 7 0.448 7 1 L 7 6 C 7 6.552 6.552 7 6 7 L 1 7 C 0.448 7 0 6.552 0 6 Z" },
    ]}
  />
);

export const UploadIcon = ({ size, color, style }) => (
  <Icon
    size={size}
    color={color}
    style={style}
    paths={[
      {
        d: "M 14 9 L 15 9 C 16.657 9 18 10.343 18 12 L 18 15 C 18 16.657 16.657 18 15 18 L 3 18 C 1.343 18 0 16.657 0 15 L 0 12 C 0 10.343 1.343 9 3 9 L 4 9 M 5 4 L 9 0 M 9 0 L 13 4 M 9 0 L 9 12",
      },
    ]}
  />
);

export const ChevronLeftIcon = ({ size, color, style }) => (
  <Icon
    size={size}
    color={color}
    style={style}
    paths={[{ d: "M 8 0 L 0 8 L 8 16" }]}
  />
);

export const ChevronRightIcon = ({ size, color, style }) => (
  <Icon
    size={size}
    color={color}
    style={style}
    paths={[{ d: "M 8 0 L 16 8 L 8 16" }]}
  />
);

export const SearchIcon = ({ size, color, style }) => (
  <Icon
    size={size}
    color={color}
    style={style}
    paths={[
      {
        d: "M 15 15 L 20 20 M 17.5 8.75 C 17.5 13.582 13.582 17.5 8.75 17.5 C 3.918 17.5 0 13.582 0 8.75 C 0 3.918 3.918 0 8.75 0 C 13.582 0 17.5 3.918 17.5 8.75 Z",
      },
    ]}
  />
);

export const TagIcon = ({ size, color, style }) => (
  <Icon
    size={size}
    color={color}
    style={style}
    paths={[
      {
        d: "M 4.016 4.016 L 4 4 M 0 0 L 0 9.393 L 8.051 17.444 C 8.792 18.185 9.994 18.185 10.735 17.444 L 17.444 10.735 C 18.185 9.994 18.185 8.792 17.444 8.051 L 9.393 0 Z",
      },
    ]}
  />
);

export const PlusIcon = ({ size, color, style }) => (
  <Icon
    size={size}
    color={color}
    style={style}
    paths={[{ d: "M 8 0 L 8 16 M 0 8 L 16 8" }]}
  />
);

export const PriorityIcon = ({ size, color, style }) => (
  <Icon
    size={size}
    color={color}
    style={style}
    paths={[
      {
        d: "M 5 10 L 8.5 13.5 L 15 7 M 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 Z",
        t: "translate(2 2)",
      },
    ]}
  />
);

export const PlayIcon = ({ size, color, style }) => (
  <Icon
    size={size}
    color={color}
    style={style}
    paths={[
      {
        d: "M 0 15.338 L 0 1.002 C 0 0.21 0.875 -0.267 1.541 0.16 L 12.692 7.329 C 13.304 7.722 13.304 8.618 12.692 9.011 L 1.541 16.18 C 0.875 16.607 0 16.129 0 15.338 Z",
        t: "translate(5 3.83)",
      },
    ]}
  />
);

export const PauseIcon = ({ size, color, style }) => (
  <Icon
    size={size}
    color={color}
    style={style}
    paths={[
      {
        d: "M 0 1 C 0 0.448 0.448 0 1 0 L 3 0 C 3.552 0 4 0.448 4 1 L 4 15 C 4 15.552 3.552 16 3 16 L 1 16 C 0.448 16 0 15.552 0 15 Z",
        t: "translate(6 4)",
      },
      {
        d: "M 0 1 C 0 0.448 0.448 0 1 0 L 3 0 C 3.552 0 4 0.448 4 1 L 4 15 C 4 15.552 3.552 16 3 16 L 1 16 C 0.448 16 0 15.552 0 15 Z",
        t: "translate(14 4)",
      },
    ]}
  />
);

export const CheckboxIcon = ({ size, color, style }) => (
  <Icon
    size={size}
    color={color}
    style={style}
    paths={[
      {
        d: "M 6 18 L 6 6 M 0 6 L 18 6 M 2 18 L 16 18 C 17.105 18 18 17.105 18 16 L 18 2 C 18 0.895 17.105 0 16 0 L 2 0 C 0.895 0 0 0.895 0 2 L 0 16 C 0 17.105 0.895 18 2 18 Z",
        t: "translate(3 3)",
      },
    ]}
  />
);

export const VideoIcon = ({ size, color, style }) => (
  <Icon
    size={size}
    color={color}
    style={style}
    paths={[
      {
        d: "M 14.118 7 L 20 2.333 L 20 11.667 Z M 14.118 7 L 14.118 2.333 C 14.118 1.045 13.064 0 11.765 0 L 2.353 0 C 1.053 0 0 1.045 0 2.333 L 0 11.667 C 0 12.955 1.053 14 2.353 14 L 11.765 14 C 13.064 14 14.118 12.955 14.118 11.667 Z",
        t: "translate(2 5)",
      },
    ]}
  />
);

export const CircleIcon = ({ size, color, style }) => (
  <Icon
    size={size}
    color={color}
    style={style}
    paths={[{ d: "M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" }]}
  />
);
