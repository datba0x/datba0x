const Footer = () => {
  return (
    <div className="h-[200px] grid grid-cols-1 md:grid-cols-7 gap-4 p-4 border-t">
      <div className="col-span-5 col-start-2 grid grid-cols-5">
        <div className="col-span-3">
          <div className="flex flex-row gap-2">
            <h3 className="text-white">datba</h3>
            <h4 className="text-gray-500 font-light">datba.dev@gmail.com</h4>
          </div>
          <h3>.net developer and fontend developer</h3>
        </div>
        <div className="col-span-2 flex justify-end">
          <div>
            <h2>Media</h2>
            <div className="mt-2 flex items-center gap-4 text-white">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-gray-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.486 2 12.021c0 4.424 2.865 8.18 6.839 9.504.5.091.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.907-.62.069-.608.069-.608 1.002.071 1.529 1.03 1.529 1.03.892 1.53 2.341 1.088 2.91.833.091-.648.35-1.088.636-1.338-2.221-.253-4.555-1.115-4.555-4.961 0-1.096.39-1.993 1.029-2.695-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.029A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.299 2.747-1.029 2.747-1.029.546 1.378.202 2.397.1 2.65.64.702 1.028 1.599 1.028 2.695 0 3.857-2.337 4.705-4.565 4.953.359.31.678.92.678 1.854 0 1.338-.012 2.419-.012 2.748 0 .267.18.579.688.48C19.14 20.197 22 16.442 22 12.021 22 6.486 17.522 2 12 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-gray-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V11H8v3h2v5h3v-5h2.066L16 11h-3v-1.5c0-.552.448-1 1-1Z" />
                </svg>
              </a>
              <a
                href="mailto:datba.dev@gmail.com"
                aria-label="Gmail"
                className="hover:text-gray-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M4 6h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1Zm8 5.5L20 8H4l8 3.5Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <h3 className="flex items-center justify-center">
            Ac Copyright 2025. Made by datba
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
