import React from "react";
export const Iicon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 20.3333V15M15 9.66663H15.0134M28.3334 15C28.3334 22.3638 22.3638 28.3333 15 28.3333C7.63622 28.3333 1.66669 22.3638 1.66669 15C1.66669 7.63616 7.63622 1.66663 15 1.66663C22.3638 1.66663 28.3334 7.63616 28.3334 15Z"
        stroke="white"
        stroke-width="2.672"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Xicon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 2L2 18M2 2L18 18"
        stroke="white"
        stroke-width="2.672"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Ticket = ({ props = 18 }) => {
  return (
    <svg
      width={props}
      height={props}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5V4M9 9.5V8.5M9 14V13M4.2 1H17.8C18.9201 1 19.4802 1 19.908 1.21799C20.2843 1.40973 20.5903 1.71569 20.782 2.09202C21 2.51984 21 3.07989 21 4.2V5.5C19.067 5.5 17.5 7.067 17.5 9C17.5 10.933 19.067 12.5 21 12.5V13.8C21 14.9201 21 15.4802 20.782 15.908C20.5903 16.2843 20.2843 16.5903 19.908 16.782C19.4802 17 18.9201 17 17.8 17H4.2C3.0799 17 2.51984 17 2.09202 16.782C1.71569 16.5903 1.40973 16.2843 1.21799 15.908C1 15.4802 1 14.9201 1 13.8V12.5C2.933 12.5 4.5 10.933 4.5 9C4.5 7.067 2.933 5.5 1 5.5V4.2C1 3.07989 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.07989 1 4.2 1Z"
        stroke="#758195"
        stroke-width="2.004"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const TicketActive = ({ props = 18 }) => {
  return (
    <svg
      width={props}
      height={props}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66634 3.33329V2.66663M6.66634 6.33329V5.66663M6.66634 9.33329V8.66663M3.46634 0.666626H12.533C13.2797 0.666626 13.6531 0.666626 13.9383 0.811951C14.1892 0.939782 14.3932 1.14376 14.521 1.39464C14.6663 1.67985 14.6663 2.05322 14.6663 2.79996V3.66663C13.3777 3.66663 12.333 4.71129 12.333 5.99996C12.333 7.28862 13.3777 8.33329 14.6663 8.33329V9.19996C14.6663 9.9467 14.6663 10.3201 14.521 10.6053C14.3932 10.8562 14.1892 11.0601 13.9383 11.188C13.6531 11.3333 13.2797 11.3333 12.533 11.3333H3.46634C2.7196 11.3333 2.34624 11.3333 2.06102 11.188C1.81014 11.0601 1.60616 10.8562 1.47833 10.6053C1.33301 10.3201 1.33301 9.9467 1.33301 9.19996V8.33329C2.62167 8.33329 3.66634 7.28862 3.66634 5.99996C3.66634 4.71129 2.62167 3.66663 1.33301 3.66663V2.79996C1.33301 2.05322 1.33301 1.67985 1.47833 1.39464C1.60616 1.14376 1.81014 0.939782 2.06102 0.811951C2.34624 0.666626 2.7196 0.666626 3.46634 0.666626Z"
        stroke="#156FEF"
        stroke-width="1.33"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Time = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6999 11.5L18.7005 9.5L16.6999 11.5M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C13.3019 1 16.1885 2.77814 17.7545 5.42909M10 5V10L13 12"
        stroke="#758195"
        stroke-width="2.004"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Forward = () => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.7914 10.6074C19.0355 10.3981 19.1575 10.2935 19.2023 10.169C19.2415 10.0597 19.2415 9.94022 19.2023 9.83095C19.1575 9.70645 19.0355 9.60183 18.7914 9.39258L10.3206 2.13196C9.9004 1.77176 9.69029 1.59166 9.5124 1.58725C9.3578 1.58342 9.21012 1.65134 9.11242 1.77122C9 1.90915 9 2.18589 9 2.73936V7.03462C6.86532 7.40807 4.91159 8.48974 3.45971 10.1139C1.87682 11.8845 1.00123 14.1759 1 16.5509V17.1629C2.04934 15.8989 3.35951 14.8765 4.84076 14.1659C6.1467 13.5394 7.55842 13.1683 9 13.0705V17.2606C9 17.8141 9 18.0908 9.11242 18.2288C9.21012 18.3486 9.3578 18.4166 9.5124 18.4127C9.69029 18.4083 9.9004 18.2282 10.3206 17.868L18.7914 10.6074Z"
        stroke="#758195"
        stroke-width="2.004"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Expand = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8L19 1M19 1H13M19 1V7M8 12L1 19M1 19H7M1 19L1 13"
        stroke="#758195"
        stroke-width="2.004"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Shrink = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12H8M8 12V18M8 12L1 19M18 8H12M12 8V2M12 8L19 1"
        stroke="#758195"
        stroke-width="2.004"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Plus = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99996 4.16663V15.8333M4.16663 9.99996H15.8333"
        stroke="white"
        stroke-width="1.67"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Send = ({ color = "#156FEF" }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.49952 12.5L19.9995 2.00005M9.6271 12.8281L12.2552 19.5861C12.4867 20.1815 12.6025 20.4791 12.7693 20.566C12.9139 20.6414 13.0862 20.6415 13.2308 20.5663C13.3977 20.4796 13.5139 20.1821 13.7461 19.587L20.3364 2.69925C20.546 2.16207 20.6509 1.89348 20.5935 1.72185C20.5437 1.5728 20.4268 1.45583 20.2777 1.40604C20.1061 1.34871 19.8375 1.45352 19.3003 1.66315L2.41258 8.25349C1.8175 8.48572 1.51997 8.60183 1.43326 8.76873C1.35809 8.91342 1.35819 9.08567 1.43353 9.23027C1.52043 9.39707 1.81811 9.51283 2.41345 9.74436L9.17146 12.3725C9.2923 12.4195 9.35273 12.443 9.40361 12.4793C9.44871 12.5114 9.48815 12.5509 9.52031 12.596C9.55661 12.6468 9.58011 12.7073 9.6271 12.8281Z"
        stroke={color}
        stroke-width="2.004"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Home = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.66667 21.6666H19.3333M12.6903 2.68533L3.64719 9.71883C3.04269 10.189 2.74045 10.4241 2.5227 10.7185C2.32982 10.9793 2.18614 11.273 2.0987 11.5854C2 11.938 2 12.3209 2 13.0867V22.7333C2 24.2268 2 24.9735 2.29065 25.5439C2.54631 26.0457 2.95426 26.4537 3.45603 26.7093C4.02646 27 4.77319 27 6.26667 27H21.7333C23.2268 27 23.9735 27 24.544 26.7093C25.0457 26.4537 25.4537 26.0457 25.7093 25.5439C26 24.9735 26 24.2268 26 22.7333V13.0867C26 12.3209 26 11.938 25.9013 11.5854C25.8139 11.273 25.6702 10.9793 25.4773 10.7185C25.2595 10.4241 24.9573 10.189 24.3528 9.71883L15.3097 2.68533C14.8413 2.32099 14.6071 2.13883 14.3485 2.0688C14.1203 2.00701 13.8797 2.00701 13.6515 2.0688C13.3929 2.13883 13.1587 2.32099 12.6903 2.68533Z"
        stroke="#758195"
        stroke-width="2.672"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const HomeActive = ({ color = "#156FEF" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.66667 21.6668H19.3333M12.6903 2.68545L3.64719 9.71895C3.04269 10.1891 2.74045 10.4242 2.5227 10.7186C2.32982 10.9794 2.18614 11.2732 2.0987 11.5855C2 11.9381 2 12.321 2 13.0869V22.7334C2 24.2269 2 24.9736 2.29065 25.5441C2.54631 26.0458 2.95426 26.4538 3.45603 26.7094C4.02646 27.0001 4.77319 27.0001 6.26667 27.0001H21.7333C23.2268 27.0001 23.9735 27.0001 24.544 26.7094C25.0457 26.4538 25.4537 26.0458 25.7093 25.5441C26 24.9736 26 24.2269 26 22.7334V13.0869C26 12.321 26 11.9381 25.9013 11.5855C25.8139 11.2732 25.6702 10.9794 25.4773 10.7186C25.2595 10.4242 24.9573 10.1891 24.3528 9.71896L15.3097 2.68545C14.8413 2.32112 14.6071 2.13895 14.3485 2.06892C14.1203 2.00714 13.8797 2.00714 13.6515 2.06892C13.3929 2.13895 13.1587 2.32112 12.6903 2.68545Z"
        stroke={color}
        stroke-width="2.672"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Noti = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 12.6667L12.6667 15.3333L18.6667 9.33333M11.2 23.6L13.1467 26.1956C13.4362 26.5815 13.5809 26.7745 13.7584 26.8436C13.9138 26.904 14.0862 26.904 14.2416 26.8436C14.4191 26.7745 14.5638 26.5815 14.8533 26.1956L16.8 23.6C17.1909 23.0788 17.3863 22.8183 17.6247 22.6193C17.9425 22.3541 18.3177 22.1664 18.7207 22.0713C19.0228 22 19.3486 22 20 22C21.8638 22 22.7956 22 23.5307 21.6955C24.5108 21.2895 25.2895 20.5108 25.6955 19.5307C26 18.7956 26 17.8638 26 16V8.4C26 6.15979 26 5.03968 25.564 4.18404C25.1805 3.43139 24.5686 2.81947 23.816 2.43597C22.9603 2 21.8402 2 19.6 2H8.4C6.15979 2 5.03968 2 4.18404 2.43597C3.43139 2.81947 2.81947 3.43139 2.43597 4.18404C2 5.03968 2 6.15979 2 8.4V16C2 17.8638 2 18.7956 2.30448 19.5307C2.71046 20.5108 3.48915 21.2895 4.46927 21.6955C5.20435 22 6.13623 22 8 22C8.65144 22 8.97716 22 9.27934 22.0713C9.68225 22.1664 10.0575 22.3541 10.3753 22.6193C10.6137 22.8183 10.8091 23.0788 11.2 23.6Z"
        stroke="#758195"
        stroke-width="2.672"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const NotiActive = ({ color = "#156FEF" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 12.6667L12.6667 15.3333L18.6667 9.33333M11.2 23.6L13.1467 26.1956C13.4362 26.5815 13.5809 26.7745 13.7584 26.8436C13.9138 26.904 14.0862 26.904 14.2416 26.8436C14.4191 26.7745 14.5638 26.5815 14.8533 26.1956L16.8 23.6C17.1909 23.0788 17.3863 22.8183 17.6247 22.6193C17.9425 22.3541 18.3177 22.1664 18.7207 22.0713C19.0228 22 19.3486 22 20 22C21.8638 22 22.7956 22 23.5307 21.6955C24.5108 21.2895 25.2895 20.5108 25.6955 19.5307C26 18.7956 26 17.8638 26 16V8.4C26 6.15979 26 5.03968 25.564 4.18404C25.1805 3.43139 24.5686 2.81947 23.816 2.43597C22.9603 2 21.8402 2 19.6 2H8.4C6.15979 2 5.03968 2 4.18404 2.43597C3.43139 2.81947 2.81947 3.43139 2.43597 4.18404C2 5.03968 2 6.15979 2 8.4V16C2 17.8638 2 18.7956 2.30448 19.5307C2.71046 20.5108 3.48915 21.2895 4.46927 21.6955C5.20435 22 6.13623 22 8 22C8.65144 22 8.97716 22 9.27934 22.0713C9.68225 22.1664 10.0575 22.3541 10.3753 22.6193C10.6137 22.8183 10.8091 23.0788 11.2 23.6Z"
        stroke={color}
        stroke-width="2.672"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
