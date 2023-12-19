export const ApplicationLogo = ({
    fill = "success",
    size,
    height,
    width,
    ...props
}) => {
    return (
        <svg
            fill="text-primary"
            height={size || height}
            width={size || width}
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            baseProfile="basic"
        >
            <linearGradient
                id="GaekwsAQ8w1bQv7T9WVMya"
                x1="33"
                x2="33"
                y1="55.817"
                y2="8.455"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#e6abff" />
                <stop offset="1" stopColor="#6dc7ff" />
            </linearGradient>
            <path
                fill="url(#GaekwsAQ8w1bQv7T9WVMya)"
                d="M30,55.817l17-9.786v-5.186l-17,9.786V55.817z M24,50.616v5.186l-16-9.21V16.514l5,2.878	v24.893L24,50.616z M27.014,45.428l16.974-9.771L39,32.787l-16.974,9.771L27.014,45.428z M19,37.376l5-2.878V16.514l-5,2.878V37.376	z M53,30.469l5-2.878v-6.077l-5,2.878V30.469z M47,30.469v-6.077l-5-2.878v6.077L47,30.469z M50,19.196l4.986-2.871L50,13.455	l-4.986,2.871L50,19.196z M16,14.196l4.986-2.871L16,8.455l-4.986,2.871L16,14.196z"
            />
            <linearGradient
                id="GaekwsAQ8w1bQv7T9WVMyb"
                x1="33"
                x2="33"
                y1="62"
                y2="3.995"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#c822ff" />
                <stop offset="1" stopColor="#1a6dff" />
            </linearGradient>
            <path
                fill="url(#GaekwsAQ8w1bQv7T9WVMyb)"
                d="M50,11.147l8.995,5.178L50,21.503l-8.995-5.178L50,11.147z M40,18.055l9,5.181v10.692	l-9-5.181V18.055z M39,30.479l8.996,5.178L27.014,47.736l-8.996-5.179L39,30.479z M17,40.835v-22.6l9-5.181v22.6L17,40.835z M16,6.147l8.995,5.178L16,16.503l-8.995-5.178L16,6.147z M6,13.055l9,5.181v24.322h0.014c0,0.358,0.191,0.688,0.501,0.867L26,49.46	v9.801L6,47.748V13.055z M49,47.188L28,59.276v-9.801l21-12.089V47.188z M51,33.928V23.236l9-5.181v10.692L51,33.928z M61.5,15.46	l-11-6.33c-0.31-0.18-0.69-0.18-1,0l-11,6.33c-0.31,0.18-0.5,0.51-0.5,0.87v12.42L28,34.5V11.33c0-0.36-0.19-0.69-0.5-0.87l-11-6.33	c-0.31-0.18-0.69-0.18-1,0l-11,6.33C4.19,10.64,4,10.97,4,11.33v37c0,0.35,0.19,0.68,0.5,0.86l22.01,12.67	c0.16,0.09,0.33,0.14,0.5,0.14c0.18,0,0.35-0.05,0.5-0.14l22.989-13.232C50.809,48.45,51,48.12,51,47.762V36.24l10.5-6.05	c0.31-0.18,0.5-0.51,0.5-0.86v-13C62,15.97,61.81,15.64,61.5,15.46z"
            />
        </svg>
    );
};
export default ApplicationLogo;
