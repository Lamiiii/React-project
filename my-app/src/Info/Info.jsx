import "./Info.css";
export const Info = () => {
  return (
    <div className="info ">
      <div className="app row">
        <div className="info-header">
          <h2>Get In Touch</h2>
          <p>
            Please fill out the form below to send us an email and we will get
            back to you as soon as possible.
          </p>
        </div>
        <div className="col-8">
          <div className="input">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>

          <div className="message">
            <textarea name="message" id="" placeholder="message"></textarea>
          </div>
        </div>

        <div className="col-4 right-info">
          <h5>Contact Info</h5>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffff"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
              </g>
            </svg>
            Adress
          </span>
          <p>4321 California St, San Francisco, CA 12345</p>

          <span className="info-flex">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                  fill="#ffff"
                ></path>{" "}
              </g>
            </svg>
            Phone
          </span>
          <p>+1 123 456 1234</p>
          <span className="info-flex">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                  fill="#ffff"
                ></path>{" "}
              </g>
            </svg>
            Email
          </span>

          <p>info@company.com</p>
        </div>
      </div>

      <button className="send">SEND MESSAGE</button>

      <div className="line"></div>

      <div className="sosial-media">
        <svg width="44px" height="44px" viewBox="0 0 32 32" fill="#ffff">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g fill="none" fill-rule="evenodd">
              {" "}
              <path d="m0 0h32v32h-32z"></path>{" "}
              <g fill="#ffff" fill-rule="nonzero">
                {" "}
                <path d="m32 16c0-8.83636363-7.1636364-16-16-16-8.83636362 0-16 7.16363638-16 16 0 8.8363636 7.16363638 16 16 16 8.8363636 0 16-7.1636364 16-16zm-30.54545453 0c0-8.03345453 6.512-14.54545453 14.54545453-14.54545453 8.0334545 0 14.5454545 6.512 14.5454545 14.54545453 0 8.0334545-6.512 14.5454545-14.5454545 14.5454545-8.03345453 0-14.54545453-6.512-14.54545453-14.5454545z"></path>{" "}
                <path d="m16.6138182 25.2349091v-9.2349091h3.0472727l.4814545-3.0603636h-3.5287272v-1.5345455c0-.7985455.2618182-1.56072727 1.408-1.56072727h2.2909091v-3.05454547h-3.2523636c-2.7345455 0-3.4807273 1.80072728-3.4807273 4.29672724v1.8516364h-1.8763637v3.0618182h1.8763636v9.2349091z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <svg
          fill="#ffff"
          height="44px"
          width="44px"
          version="1.1"
          id="Layer_1"
          viewBox="-143 145 512 512"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path>{" "}
              <path d="M234.3,313.1c-10.2,6-21.4,10.4-33.4,12.8c-9.6-10.2-23.3-16.6-38.4-16.6c-29,0-52.6,23.6-52.6,52.6c0,4.1,0.4,8.1,1.4,12 c-43.7-2.2-82.5-23.1-108.4-55c-4.5,7.8-7.1,16.8-7.1,26.5c0,18.2,9.3,34.3,23.4,43.8c-8.6-0.3-16.7-2.7-23.8-6.6v0.6 c0,25.5,18.1,46.8,42.2,51.6c-4.4,1.2-9.1,1.9-13.9,1.9c-3.4,0-6.7-0.3-9.9-0.9c6.7,20.9,26.1,36.1,49.1,36.5 c-18,14.1-40.7,22.5-65.3,22.5c-4.2,0-8.4-0.2-12.6-0.7c23.3,14.9,50.9,23.6,80.6,23.6c96.8,0,149.7-80.2,149.7-149.7 c0-2.3,0-4.6-0.1-6.8c10.3-7.5,19.2-16.7,26.2-27.3c-9.4,4.2-19.6,7-30.2,8.3C222.1,335.7,230.4,325.4,234.3,313.1z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
        <svg
          fill="#ffff"
          height="44px"
          width="44px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-143 145 512 512"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path>{" "}
              <path d="M196.9,311.2H29.1c0,0-44.1,0-44.1,44.1v91.5c0,0,0,44.1,44.1,44.1h167.8c0,0,44.1,0,44.1-44.1v-91.5 C241,355.3,241,311.2,196.9,311.2z M78.9,450.3v-98.5l83.8,49.3L78.9,450.3z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
};
